<template>
  <prime-select
    v-model="value"
    :options="options"
    placeholder="Выберите значение"
    :invalid="isError"
  />
</template>

<script setup lang="ts">
import { default as PrimeSelect } from 'primevue/select';

interface IProps {
  options: string[];
  isError?: boolean;
}
const { isError = false } = defineProps<IProps>();

const value = defineModel<string|null>({ default: null });
</script>

<style scoped lang="scss"></style>
