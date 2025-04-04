<template>
  <div>
    <button @click="increase">좋아요누르기</button>
  </div>
</template>

<script setup>
import { useLikeStore } from '@/stores/like';
//값 자체를 가져올 때 반응형이 깨짐
// const { increase, reset, count } = useCountStore();

const like = useLikeStore();
const { increase } = like;
</script>
