<template>
  <password
    v-model="value"
    :invalid="isError"
    :feedback="false"
    :toggle-mask="true"
    @blur="blur"
  />
</template>

<script setup lang="ts">
import Password from 'primevue/password';
import { ref } from 'vue';

interface IProps {
  isError?: boolean;
}
const { isError = false } = defineProps<IProps>();

const model = defineModel<string>({ default: '' });
const value = ref<string>(model.value);

const blur = () => {
  model.value = value.value;
};
</script>

<style lang="scss">
.p-password-input {
  width: 100%;
}
</style>
