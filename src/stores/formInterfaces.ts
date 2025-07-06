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
