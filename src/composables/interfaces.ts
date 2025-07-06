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
