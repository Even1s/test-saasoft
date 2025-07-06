<template>
  <div class="account-form">
    <text-input
      v-model="values.tags"
      :is-error="errors.tags"
    />
    <select-input
      v-model="values.type"
      :options="['LDAP', 'Локальная']"
      :is-error="errors.type"
    />
    <text-input
      v-model="values.login"
      :class="{ 'account-form__full-login': values.type === 'LDAP' }"
      :is-error="errors.login"
    />
    <password-input
      v-if="values.type !== 'LDAP'"
      v-model="values.password"
      :is-error="errors.password"
    />
    <trash-icon
      class="account-form__delete"
      @click="remove"
    />
  </div>
</template>

<script setup lang="ts">
import { PasswordInput, SelectInput, TextInput, TrashIcon } from '@/shared';
import { useAccountValidation } from '@/composables/useAccountValidation.ts';
import { useFormStore } from '@/stores/form.ts';
import type { IAccount } from '@/stores/formInterfaces.ts';

interface IProps {
  index: number;
  account: IAccount;
}
const props = defineProps<IProps>();

const { errors, values } = useAccountValidation(props.index);
const { deleteAccount } = useFormStore();

const remove = () => {
  deleteAccount(props.index);
};
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
