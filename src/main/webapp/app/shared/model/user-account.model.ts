import { ICooperative } from 'app/shared/model/cooperative.model';
import { IRole } from 'app/shared/model/role.model';

export interface IUserAccount {
  id?: number;
  login?: string;
  email?: string;
  password?: string;
  adminsys?: ICooperative[];
  admincoops?: ICooperative[];
  roles?: IRole[];
}

export class UserAccount implements IUserAccount {
  constructor(
    public id?: number,
    public login?: string,
    public email?: string,
    public password?: string,
    public adminsys?: ICooperative[],
    public admincoops?: ICooperative[],
    public roles?: IRole[]
  ) {}
}
