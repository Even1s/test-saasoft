import { defineStore, storeToRefs } from 'pinia';
import { useSaveDataStore } from '@/stores/saveData.ts';
import { ref } from 'vue';
import type { TAccountFormList, TErrorsList } from './accountInterfaces.ts';

export const useFormDataStore = defineStore('form-data', () => {
  const { accountsList } = storeToRefs(useSaveDataStore());
  const {
    addAccount,
    deleteAccount,
    changeTags,
    changeType,
    changeLogin,
    changePassword,
  } = useSaveDataStore();

  const formData = ref<TAccountFormList>(accountsList.value.map((account) => ({
    tags: account.tags.map(tag => tag.text).join('; '),
    type: account.type,
    login: account.login,
    password: account.password ?? '',
  })));

  const errors = ref<TErrorsList>(accountsList.value.map(() => ({
    tags: false,
    type: false,
    login: false,
    password: false,
  })));


  const addForm = () => {
    formData.value.push({
      tags: '',
      type: null,
      login: '',
      password: '',
    });
    errors.value.push({
      tags: false,
      type: false,
      login: false,
      password: false,
    });
    addAccount();
  };

  const deleteForm = (index: number) => {
    formData.value.splice(index, 1);
    errors.value.splice(index, 1);
    deleteAccount(index);
  };

  const checkTags = (value: string, index: number) => {
    if (value.length <= 50) {
      errors.value[index].tags = false;
      changeTags(index, value);
    } else {
      errors.value[index].tags = true;
    }
  };

  const checkType = (value: string|null, index: number) => {
    if (value && value === 'LDAP') {
      errors.value[index].type = false;
      changeType(index, value);
      formData.value[index].password = '';
    } else if (value && value === 'Локальная') {
      errors.value[index].type = false;
      changeType(index, value);
    } else {
      errors.value[index].type = true;
    }
  };

  const checkLogin = (value: string, index: number) => {
    if (!!value && value.length <= 100) {
      errors.value[index].login = false;
      changeLogin(index, value);
    } else {
      errors.value[index].login = true;
    }
  };

  const checkPassword = (value: string, index: number) => {
    if (formData.value[index].type === 'LDAP') return;
    if (!!value && value.length <= 100) {
      errors.value[index].password = false;
      changePassword(index, value);
    } else {
      errors.value[index].password = true;
    }
  };

  return {
    errors,
    formData,
    addForm,
    deleteForm,
    checkTags,
    checkType,
    checkLogin,
    checkPassword,
  };
});
