export interface ITag {
  text: string;
}

export interface IAccount {
  tags: ITag[];
  type: 'LDAP'|'Локальная'|null;
  login: string;
  password: string|null;
}
export type TAccountsList = IAccount[];

export interface IErrors {
  tags: boolean;
  type: boolean;
  login: boolean;
  password: boolean;
}
export interface IAccountForm {
  tags: string;
  type: 'LDAP'|'Локальная'|null;
  login: string;
  password: string;
}
export type TErrorsList = IErrors[];
export type TAccountFormList = IAccountForm[];
