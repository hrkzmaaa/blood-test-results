<script setup lang="ts">
import InputElement from "@/components/InputElement.vue";
import { reactive } from "vue";

const state = reactive({
  value: "",
  label: "カロリー"
});

const updateValue = (newValue: string) => {
  state.value = newValue
}
</script>
<template>
  <InputElement :value="state.value" :label="state.label" @update:value="updateValue" />
</template>


<style>
</style>
