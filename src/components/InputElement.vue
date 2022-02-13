<script setup lang="ts">
interface Emits {
  (e: "update:value", newValue: { value: number, index: number }): void;
}
interface Props {
  value: number;
  label: string;
  index: number
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleInput = (event: Event) => {
  if (!(event.target instanceof HTMLInputElement)) return
  let value = parseFloat(event.target.value)
  if (isNaN(value)) value = 0

  emit("update:value", { value, index: props.index });

};
</script>

<template>
  <label>
    {{ label }}
    <input type="number" :value="value" @input="handleInput" />
  </label>
</template>

