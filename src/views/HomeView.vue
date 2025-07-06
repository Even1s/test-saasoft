<template>
  <main class="home-view">
    <h2 class="home-view__title">
      Учетные записи
      <plus-icon
        class="home-view__add"
        @click="add"
      />
    </h2>
    <div class="home-view__inner">
      <account-form
        v-for="(account, index) in accountsList"
        :key="index"
        :index="index"
        :account="account"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { PlusIcon } from '@/shared';
import { useFormStore } from '@/stores/form.ts';
import { storeToRefs } from 'pinia';
import { AccountForm } from '@/features';

const { addAccount } = useFormStore();
const { accountsList } = storeToRefs(useFormStore());

const add = () => {
  addAccount();
};
</script>

<style scoped lang="scss">
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  &__title {
    font-size: 32px;
    font-weight: 500;
    gap: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  &__add {
    height: 24px;
    width: 24px;
    border: 2px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  &__inner {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
}
</style>
