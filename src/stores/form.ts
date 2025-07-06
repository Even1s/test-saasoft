import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TAccountsList } from './formInterfaces.ts';

export const useFormStore = defineStore('form', () => {
  const accountsList = ref<TAccountsList>([]);

  const addAccount = () => {
    accountsList.value.push({
      tags: [],
      type: null,
      login: '',
      password: '',
    });
  };

  const changeTags = (index: number, tags: string) => {
    accountsList.value[index].tags = tags.split('; ').map((tag) => ({ text: tag }));
  };

  const changeType = (index: number, type: 'LDAP'|'Локальная') => {
    accountsList.value[index].type = type;
    if (type === 'LDAP') accountsList.value[index].password = null;
  };

  const changeLogin = (index: number, login: string) => {
    accountsList.value[index].login = login;
  };

  const changePassword = (index: number, password: string) => {
    if (accountsList.value[index].type === 'Локальная')
      accountsList.value[index].password = password;
  };

  const deleteAccount = (index: number) => {
    accountsList.value.splice(index, 1);
  };

  return {
    accountsList,
    addAccount,
    changeTags,
    changeType,
    changeLogin,
    changePassword,
    deleteAccount,
  };
});
