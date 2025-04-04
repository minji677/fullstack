<script setup>
import Counter from './components/Counter.vue';
import Like from './components/Like.vue';
import { useCounterStore } from './stores/counter';
import { useLikeStore } from './stores/like';

const counter = useCounterStore();
const like = useLikeStore();
</script>

<template>
  <div>
    <h1>pinia 상태관리 예제</h1>
    <hr />
    <h2>좋아요 갯수 : {{ like.like }}</h2>
    <h2>좋아요 갯수 뻥튀기: {{ like.fivetime }}</h2>
    <hr />
    <h2>앱에서 보는 카운터: {{ counter.count }}</h2>
    <Counter />
    <Counter />
  </div>
</template>

<style scoped></style>
