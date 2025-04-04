<script setup>
import { onMounted } from 'vue';
import { useStudent } from '@/api/Students';

const { students, error, fetchAllstudents } = useStudent();
onMounted(() => {
  fetchAllstudents();
});
</script>

<template>
  <h2>KB-19기 학생들</h2>
  <div>
    <div v-for="student in students" :key="student.id">
      <StudentCard :student="student"></StudentCard>
    </div>
  </div>
</template>

<style scoped></style>
