<template>
  <div class="account-form">
    <text-input
      v-model="formData[index].tags"
      :is-error="errors.tags"
      placeholder="Введите Теги"
    />
    <select-input
      v-model="formData[index].type"
      :options="['LDAP', 'Локальная']"
      :is-error="errors.type"
    />
    <text-input
      v-model="formData[index].login"
      :class="{ 'account-form__full-login': formData[index].type === 'LDAP' }"
      :is-error="errors.login"
      placeholder="Введите Логин"
    />
    <password-input
      v-if="formData[index].type !== 'LDAP'"
      v-model="formData[index].password"
      :is-error="errors.password"
      placeholder="Введите Пароль"
    />
    <trash-icon
      class="account-form__delete"
      @click="remove"
    />
  </div>
</template>

<script setup lang="ts">
import { PasswordInput, SelectInput, TextInput, TrashIcon } from '@/shared';
import type { IErrors } from '@/stores/accountInterfaces.ts';
import { storeToRefs } from 'pinia';
import { useFormDataStore } from '@/stores/formData.ts';
import { watch } from 'vue';

interface IProps {
  index: number;
  errors: IErrors;
}
const props = defineProps<IProps>();

const emits = defineEmits<{
  deleteForm: []
}>();
const remove = () => emits('deleteForm');

const { formData } = storeToRefs(useFormDataStore());
const { checkTags, checkType, checkLogin, checkPassword } = useFormDataStore();

watch(() => formData.value[props.index].tags, () => checkTags(formData.value[props.index].tags, props.index));
watch(() => formData.value[props.index].type, () => checkType(formData.value[props.index].type, props.index));
watch(() => formData.value[props.index].login, () => checkLogin(formData.value[props.index].login, props.index));
watch(() => formData.value[props.index].password, () => checkPassword(formData.value[props.index].password, props.index));
</script>

<style scoped lang="scss">
.account-form {
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.25fr;
  gap: 16px;
  align-items: center;
  &__full-login {
    grid-column: 1 / 5;
    grid-column-start: 3;
  }
  &__delete {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
}
</style>
