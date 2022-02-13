<script setup lang="ts">
interface Emits {
  (e: "update:value", value: string): void;
}
interface Props {
  value: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  disabled?: boolean;
}


const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleInput = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emit("update:value", event.target.value);
  }
};
</script>

<template>
  <label>
    {{ label }}
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
  </label>
</template>

