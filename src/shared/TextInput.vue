<template>
  <input-text
    v-model="value"
    type="text"
    :invalid="isError"
    @blur="blur"
  />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
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

<style scoped lang="scss">

</style>
