import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { ICourse, Course } from 'app/shared/model/course.model';
import { CourseService } from './course.service';
import { IRestaurant } from 'app/shared/model/restaurant.model';
import { RestaurantService } from 'app/entities/restaurant/restaurant.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

type SelectableEntity = IRestaurant | IUser;

@Component({
  selector: 'jhi-course-update',
  templateUrl: './course-update.component.html'
})
export class CourseUpdateComponent implements OnInit {
  isSaving = false;
  restaurants: IRestaurant[] = [];
  users: IUser[] = [];

  editForm = this.fb.group({
    id: [],
    courseId: [null, [Validators.required]],
    state: [null, [Validators.required]],
    paymentMethod: [null, [Validators.required]],
    estimatedPreparationTime: [null, [Validators.required]],
    estimatedDeliveryTime: [null, [Validators.required]],
    preparationTime: [null, [Validators.required]],
    deliveryTime: [null, [Validators.required]],
    restaurant: [],
    deliverer: [],
    customer: []
  });

  constructor(
    protected courseService: CourseService,
    protected restaurantService: RestaurantService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ course }) => {
      if (!course.id) {
        const today = moment().startOf('day');
        course.estimatedPreparationTime = today;
        course.estimatedDeliveryTime = today;
        course.preparationTime = today;
        course.deliveryTime = today;
      }

      this.updateForm(course);

      this.restaurantService.query().subscribe((res: HttpResponse<IRestaurant[]>) => (this.restaurants = res.body || []));

      this.userService.query().subscribe((res: HttpResponse<IUser[]>) => (this.users = res.body || []));
    });
  }

  updateForm(course: ICourse): void {
    this.editForm.patchValue({
      id: course.id,
      courseId: course.courseId,
      state: course.state,
      paymentMethod: course.paymentMethod,
      estimatedPreparationTime: course.estimatedPreparationTime ? course.estimatedPreparationTime.format(DATE_TIME_FORMAT) : null,
      estimatedDeliveryTime: course.estimatedDeliveryTime ? course.estimatedDeliveryTime.format(DATE_TIME_FORMAT) : null,
      preparationTime: course.preparationTime ? course.preparationTime.format(DATE_TIME_FORMAT) : null,
      deliveryTime: course.deliveryTime ? course.deliveryTime.format(DATE_TIME_FORMAT) : null,
      restaurant: course.restaurant,
      deliverer: course.deliverer,
      customer: course.customer
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const course = this.createFromForm();
    if (course.id !== undefined) {
      this.subscribeToSaveResponse(this.courseService.update(course));
    } else {
      this.subscribeToSaveResponse(this.courseService.create(course));
    }
  }

  private createFromForm(): ICourse {
    return {
      ...new Course(),
      id: this.editForm.get(['id'])!.value,
      courseId: this.editForm.get(['courseId'])!.value,
      state: this.editForm.get(['state'])!.value,
      paymentMethod: this.editForm.get(['paymentMethod'])!.value,
      estimatedPreparationTime: this.editForm.get(['estimatedPreparationTime'])!.value
        ? moment(this.editForm.get(['estimatedPreparationTime'])!.value, DATE_TIME_FORMAT)
        : undefined,
      estimatedDeliveryTime: this.editForm.get(['estimatedDeliveryTime'])!.value
        ? moment(this.editForm.get(['estimatedDeliveryTime'])!.value, DATE_TIME_FORMAT)
        : undefined,
      preparationTime: this.editForm.get(['preparationTime'])!.value
        ? moment(this.editForm.get(['preparationTime'])!.value, DATE_TIME_FORMAT)
        : undefined,
      deliveryTime: this.editForm.get(['deliveryTime'])!.value
        ? moment(this.editForm.get(['deliveryTime'])!.value, DATE_TIME_FORMAT)
        : undefined,
      restaurant: this.editForm.get(['restaurant'])!.value,
      deliverer: this.editForm.get(['deliverer'])!.value,
      customer: this.editForm.get(['customer'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICourse>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
