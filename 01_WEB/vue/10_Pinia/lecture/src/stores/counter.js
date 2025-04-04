import { defineStore } from 'pinia';
import { ref } from 'vue';

//pinia스토어 정의
//디파인 스토어 : 스토어가 생성하는 함수

export const useCounterStore = defineStore('counter', () => {
  //state
  const count = ref(0);
  //getter

  //action
  //1씩 증가시키는 매서드

  const increase = () => {
    count.value++;
  };
  const reset = () => {
    count.value = 0;
  };
  return { count, increase, reset };
});
