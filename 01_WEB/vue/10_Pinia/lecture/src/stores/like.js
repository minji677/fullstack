import LikeStore from '@/components/LikeStore.vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';

//pinia스토어 정의
//디파인 스토어 : 스토어가 생성하는 함수

export const useLikeStore = defineStore('like', () => {
  //state
  const count = ref(0);
  //getter
  const fivetime = computed(() => like.value * 5);

  //action
  //1씩 증가시키는 매서드

  const increase = () => {
    like.value++;
  };

  return { like, increase, reset, fivetime };
});
