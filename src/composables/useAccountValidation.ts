import type { IAccountForm, IErrors } from './interfaces.ts';
import { reactive, watch } from 'vue';
import { useFormStore } from '@/stores/form.ts';
import { storeToRefs } from 'pinia';

export const useAccountValidation = (index: number) => {

  const { accountsList } = storeToRefs(useFormStore());

  const values = reactive<IAccountForm>({
    tags: accountsList.value[index].tags.map(tag => tag.text).join('; '),
    type: accountsList.value[index].type,
    login: accountsList.value[index].login,
    password: accountsList.value[index].password ?? '',
  });
  const errors = reactive<IErrors>({
    tags: false,
    type: false,
    login: false,
    password: false,
  });

  const {
    changeTags,
    changeType,
    changeLogin,
    changePassword,
  } = useFormStore();

  const checkTags = () => {
    if (values.tags.length <= 50) {
      errors.tags = false;
      changeTags(index, values.tags);
    } else {
      errors.tags = true;
    }
  };

  const checkType = () => {
    if (values.type) {
      errors.type = false;
      changeType(index, values.type);
      values.password = '';
    } else {
      errors.type = true;
    }
  };

  const checkLogin = () => {
    if (!!values.login && values.login.length <= 100) {
      errors.login = false;
      changeLogin(index, values.login);
    } else {
      errors.login = true;
    }
  };

  const checkPassword = () => {
    if (!!values.password && values.password.length <= 100) {
      errors.password = false;
      changePassword(index, values.password);
    } else {
      errors.password = true;
    }
  };

  watch(() => values.tags, checkTags);
  watch(() => values.type, checkType);
  watch(() => values.login, checkLogin);
  watch(() => values.password, checkPassword);

  return {
    errors,
    values,
  };
};
