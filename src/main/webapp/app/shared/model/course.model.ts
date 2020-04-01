import { Moment } from 'moment';
import { IRestaurant } from 'app/shared/model/restaurant.model';
import { IUserAccount } from 'app/shared/model/user-account.model';
import { IBasket } from 'app/shared/model/basket.model';
import { DeliveryState } from 'app/shared/model/enumerations/delivery-state.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface ICourse {
  id?: number;
  state?: DeliveryState;
  paymentMethod?: PaymentMethod;
  estimatedPreparationTime?: Moment;
  estimatedDeliveryTime?: Moment;
  preparationTime?: Moment;
  deliveryTime?: Moment;
  restaurant?: IRestaurant;
  deliverer?: IUserAccount;
  customer?: IUserAccount;
  basketId?: IBasket;
}

export class Course implements ICourse {
  constructor(
    public id?: number,
    public state?: DeliveryState,
    public paymentMethod?: PaymentMethod,
    public estimatedPreparationTime?: Moment,
    public estimatedDeliveryTime?: Moment,
    public preparationTime?: Moment,
    public deliveryTime?: Moment,
    public restaurant?: IRestaurant,
    public deliverer?: IUserAccount,
    public customer?: IUserAccount,
    public basketId?: IBasket
  ) {}
}
