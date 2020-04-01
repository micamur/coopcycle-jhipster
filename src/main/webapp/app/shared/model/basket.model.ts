import { ICourse } from 'app/shared/model/course.model';
import { IProduct } from 'app/shared/model/product.model';
import { BasketState } from 'app/shared/model/enumerations/basket-state.model';

export interface IBasket {
  id?: number;
  basketState?: BasketState;
  orderId?: ICourse;
  products?: IProduct[];
}

export class Basket implements IBasket {
  constructor(public id?: number, public basketState?: BasketState, public orderId?: ICourse, public products?: IProduct[]) {}
}
