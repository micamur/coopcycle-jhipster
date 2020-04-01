import { Moment } from 'moment';
import { IRestaurant } from 'app/shared/model/restaurant.model';
import { IUser } from 'app/core/user/user.model';
import { IBasket } from 'app/shared/model/basket.model';
import { DeliveryState } from 'app/shared/model/enumerations/delivery-state.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface ICourse {
  id?: number;
  courseId?: number;
  state?: DeliveryState;
  paymentMethod?: PaymentMethod;
  estimatedPreparationTime?: Moment;
  estimatedDeliveryTime?: Moment;
  preparationTime?: Moment;
  deliveryTime?: Moment;
  restaurant?: IRestaurant;
  deliverer?: IUser;
  customer?: IUser;
  basketId?: IBasket;
}

export class Course implements ICourse {
  constructor(
    public id?: number,
    public courseId?: number,
    public state?: DeliveryState,
    public paymentMethod?: PaymentMethod,
    public estimatedPreparationTime?: Moment,
    public estimatedDeliveryTime?: Moment,
    public preparationTime?: Moment,
    public deliveryTime?: Moment,
    public restaurant?: IRestaurant,
    public deliverer?: IUser,
    public customer?: IUser,
    public basketId?: IBasket
  ) {}
}
