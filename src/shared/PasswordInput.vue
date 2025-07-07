<template>
  <password
    v-model="value"
    :invalid="isError"
    :feedback="false"
    :toggle-mask="true"
    :placeholder="placeholder"
    @blur="blur"
  />
</template>

<script setup lang="ts">
import Password from 'primevue/password';
import { ref, watch } from 'vue';

interface IProps {
  isError?: boolean;
  placeholder?: string;
}
const { isError = false, placeholder = '' } = defineProps<IProps>();

const model = defineModel<string>({ default: '' });
const value = ref<string>(model.value);

const blur = () => {
  model.value = value.value;
};
watch(() => model.value, () => {
  value.value = model.value;
});
</script>

<style lang="scss">
.p-password-input {
  width: 100%;
}
</style>
