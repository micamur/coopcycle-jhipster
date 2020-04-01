import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IUserAccount, UserAccount } from 'app/shared/model/user-account.model';
import { UserAccountService } from './user-account.service';

@Component({
  selector: 'jhi-user-account-update',
  templateUrl: './user-account-update.component.html'
})
export class UserAccountUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
    email: [null, [Validators.required, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]],
    password: [null, [Validators.required, Validators.minLength(8)]]
  });

  constructor(protected userAccountService: UserAccountService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ userAccount }) => {
      this.updateForm(userAccount);
    });
  }

  updateForm(userAccount: IUserAccount): void {
    this.editForm.patchValue({
      id: userAccount.id,
      login: userAccount.login,
      email: userAccount.email,
      password: userAccount.password
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const userAccount = this.createFromForm();
    if (userAccount.id !== undefined) {
      this.subscribeToSaveResponse(this.userAccountService.update(userAccount));
    } else {
      this.subscribeToSaveResponse(this.userAccountService.create(userAccount));
    }
  }

  private createFromForm(): IUserAccount {
    return {
      ...new UserAccount(),
      id: this.editForm.get(['id'])!.value,
      login: this.editForm.get(['login'])!.value,
      email: this.editForm.get(['email'])!.value,
      password: this.editForm.get(['password'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUserAccount>>): void {
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
}
