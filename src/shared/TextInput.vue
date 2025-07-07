<template>
  <input-text
    v-model="value"
    type="text"
    :invalid="isError"
    :placeholder="placeholder"
    @blur="blur"
  />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
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

<style scoped lang="scss">

</style>
