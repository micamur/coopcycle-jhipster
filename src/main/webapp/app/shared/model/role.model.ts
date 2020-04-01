import { IUserAccount } from 'app/shared/model/user-account.model';
import { RoleOption } from 'app/shared/model/enumerations/role-option.model';

export interface IRole {
  id?: number;
  role?: RoleOption;
  accountIds?: IUserAccount[];
}

export class Role implements IRole {
  constructor(public id?: number, public role?: RoleOption, public accountIds?: IUserAccount[]) {}
}
