<template>
  <div>
    x : <input type="text" v-model.number="x" /><br />
    결과 : {{ result }}
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0) // 0으로 초기화
    const result = ref(0) // 0으로 초기화

    // x가 바뀔 때마다 실행됨
    watch(x, (newVal, oldVal) => {
      console.log('이전 값:', oldVal, '새로운 값:', newVal)
      result.value = newVal
    })

    return { x, result }
  },
}
</script>
