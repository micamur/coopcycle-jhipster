import { IUserAccount } from 'app/shared/model/user-account.model';
import { ICooperative } from 'app/shared/model/cooperative.model';

export interface IRestaurant {
  id?: number;
  name?: string;
  description?: string;
  owner?: IUserAccount;
  cooperatives?: ICooperative[];
}

export class Restaurant implements IRestaurant {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public owner?: IUserAccount,
    public cooperatives?: ICooperative[]
  ) {}
}
