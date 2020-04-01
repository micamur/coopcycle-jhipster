import { IUserAccount } from 'app/shared/model/user-account.model';
import { IRestaurant } from 'app/shared/model/restaurant.model';

export interface ICooperative {
  id?: number;
  name?: string;
  area?: string;
  dg?: IUserAccount;
  restaurants?: IRestaurant[];
  adminsys?: IUserAccount[];
  admincoops?: IUserAccount[];
}

export class Cooperative implements ICooperative {
  constructor(
    public id?: number,
    public name?: string,
    public area?: string,
    public dg?: IUserAccount,
    public restaurants?: IRestaurant[],
    public adminsys?: IUserAccount[],
    public admincoops?: IUserAccount[]
  ) {}
}
