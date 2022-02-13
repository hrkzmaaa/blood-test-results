<script setup lang="ts">
import InputElement from "@/components/InputElement.vue";
import { reactive, computed } from "vue";
import { LdlCholesterol, HdlCholesterol, TotalCholesterol, MaximumBloodPressure, MinimumBloodPressure } from '@/model/IngredientsList'

const state = reactive([new LdlCholesterol(), new HdlCholesterol(), new TotalCholesterol(), new MaximumBloodPressure(), new MinimumBloodPressure()]);

const updateValue = (newValue: { value: number, index: number }) => {
  state[newValue.index].value = newValue.value
}

// 標準の範囲内か判定
const check = computed({
  get: () => state.map(list => list.calc()),
  set: () => { return }
})

</script>
<template>
  <h1>成分一覧</h1>
  <template v-for="(list,index) in state">
    <div>
      <InputElement
        class="input"
        :value="list.value"
        :label="list.name"
        :index="index"
        @update:value="updateValue"
      />
      <img v-if="check[index] === 'Upper'" src="../icon//Upper.svg" width="16" height="16" />
      <img v-else-if="check[index] === 'Lower'" src="../icon//Lower.svg" width="16" height="16" />
      <img
        v-else-if="check[index] === 'Standard'"
        src="../icon//Standard.svg"
        width="16"
        height="16"
      />
    </div>
  </template>
</template>

<style scoped>
#input {
  display: flex;
}
</style>
