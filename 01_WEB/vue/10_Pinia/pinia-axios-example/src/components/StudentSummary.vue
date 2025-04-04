<template>
  <div>
    <p>
      전체 학생수 : <Strong>{{ studentStore.studentCount }}</Strong>
    </p>
  </div>
</template>

<script setup>
import { useStudentStore } from '@/stores/studentStore';

const studentStore = useStudentStore();
</script>
<style scoped></style>
