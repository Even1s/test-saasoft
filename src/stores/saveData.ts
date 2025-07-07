import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TAccountsList } from './accountInterfaces.ts';

export const useSaveDataStore = defineStore('save-data', () => {
  const accountsList = ref<TAccountsList>(JSON.parse(localStorage.getItem('save-data') ?? '[]'));

  const addAccount = () => {
    accountsList.value.push({
      tags: [],
      type: null,
      login: '',
      password: '',
    });
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
  };

  const changeTags = (index: number, tags: string) => {
    accountsList.value[index].tags = tags.split('; ').map((tag) => ({ text: tag }));
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
  };

  const changeType = (index: number, type: 'LDAP'|'Локальная') => {
    accountsList.value[index].type = type;
    if (type === 'LDAP') accountsList.value[index].password = null;
    else if (type === 'Локальная') accountsList.value[index].password = '';
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
  };

  const changeLogin = (index: number, login: string) => {
    accountsList.value[index].login = login;
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
  };

  const changePassword = (index: number, password: string) => {
    accountsList.value[index].password = password;
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
  };

  const deleteAccount = (index: number) => {
    accountsList.value.splice(index, 1);
    localStorage.setItem('save-data', JSON.stringify(accountsList.value));
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
