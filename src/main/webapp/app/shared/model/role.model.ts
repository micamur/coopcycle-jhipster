import { IUser } from 'app/core/user/user.model';
import { RoleOption } from 'app/shared/model/enumerations/role-option.model';

export interface IRole {
  id?: number;
  role?: RoleOption;
  accountIds?: IUser[];
}

export class Role implements IRole {
  constructor(public id?: number, public role?: RoleOption, public accountIds?: IUser[]) {}
}
