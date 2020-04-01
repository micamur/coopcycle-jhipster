import { IRestaurant } from 'app/shared/model/restaurant.model';
import { IBasket } from 'app/shared/model/basket.model';
import { Disponibility } from 'app/shared/model/enumerations/disponibility.model';

export interface IProduct {
  id?: number;
  productId?: number;
  name?: string;
  description?: string;
  price?: number;
  disponibility?: Disponibility;
  restaurant?: IRestaurant;
  baskets?: IBasket[];
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public productId?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public disponibility?: Disponibility,
    public restaurant?: IRestaurant,
    public baskets?: IBasket[]
  ) {}
}
