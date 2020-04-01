import { IUser } from 'app/core/user/user.model';
import { IRestaurant } from 'app/shared/model/restaurant.model';

export interface ICooperative {
  id?: number;
  cooperativeId?: number;
  name?: string;
  area?: string;
  dg?: IUser;
  restaurants?: IRestaurant[];
  adminsys?: IUser[];
  admincoops?: IUser[];
}

export class Cooperative implements ICooperative {
  constructor(
    public id?: number,
    public cooperativeId?: number,
    public name?: string,
    public area?: string,
    public dg?: IUser,
    public restaurants?: IRestaurant[],
    public adminsys?: IUser[],
    public admincoops?: IUser[]
  ) {}
}
