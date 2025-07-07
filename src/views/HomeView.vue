<template>
  <main class="home-view">
    <h2 class="home-view__title">
      Учетные записи
      <plus-icon
        class="home-view__add"
        @click="add"
      />
    </h2>
    <h4 class="home-view__clue">
      <question-icon class="home-view__clue-icon" />
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
    </h4>
    <div class="home-view__inner">
      <div class="home-view__table-head">
        <h3>Метки</h3>
        <h3>Тип записи</h3>
        <h3>Логин</h3>
        <h3>Пароль</h3>
      </div>
      <account-form
        v-for="(account, index) in formData"
        :key="index"
        :index="index"
        :errors="errors[index]"
        @delete-form="remove(index)"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { PlusIcon, QuestionIcon } from '@/shared';
import { storeToRefs } from 'pinia';
import { AccountForm } from '@/features';
import { useFormDataStore } from '@/stores/formData.ts';

const { addForm, deleteForm } = useFormDataStore();
const { errors, formData } = storeToRefs(useFormDataStore());

const add = () => {
  addForm();
};
const remove = (index: number) => {
  deleteForm(index);
};
</script>

<style scoped lang="scss">
.home-view {
  max-width: 1200px;
  margin: 48px auto 0 auto;
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
  &__table-head {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 0.25fr;
    gap: 16px;
    h3 {
      font-weight: 400;
    }
  }
  &__clue {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 400;
    padding: 8px 12px;
    margin-bottom: 8px;
    background-color: #cae6f4;
    border-radius: 8px;
    &-icon {
      border: 1px black solid;
      border-radius: 50%;
    }
  }
}
</style>
