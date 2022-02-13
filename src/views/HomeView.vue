<script setup lang="ts">
import InputElement from "@/components/InputElement.vue";
import { reactive } from "vue";
import { LdlCholesterol, HdlCholesterol, TotalCholesterol, MaximumBloodPressure, MinimumBloodPressure } from '@/model/IngredientsList'

const state = reactive([new LdlCholesterol(), new HdlCholesterol(), new TotalCholesterol(), new MaximumBloodPressure(), new MinimumBloodPressure()]);

const updateValue = (newValue: { value: number, index: number }) => {
  state[newValue.index].value = newValue.value
}
</script>
<template>
  <h1>成分一覧</h1>
  <InputElement
    v-for="(list,index) in state"
    :value="list.value"
    :label="list.name"
    :index="index"
    @update:value="updateValue"
  />
</template>

<style>
</style>
