<script setup>
import BaseBadge from './UI/BaseBadge.vue'
import BaseButton from './UI/BaseButton.vue'
import BaseAlert from './UI/BaseAlert.vue'
</script>
<template>
  <!--그리드컨테이너-->
  <main class="component-grid">
    <!--컴포넌트그룹 그리드아이템-->
    <section class="component-card">
      <h2>버튼</h2>
      <BaseButton variant="primary">primary</BaseButton>
      <BaseButton variant="outline">outline</BaseButton>
      <BaseButton variant="pill">pill</BaseButton>
    </section>
    <section class="component-card">
      <h2>알림장</h2>
      <BaseAlert variant="success">Success</BaseAlert>
      <BaseAlert variant="warning">Warning</BaseAlert>
      <BaseAlert variant="error">Error</BaseAlert>
    </section>
    <section class="component-card">
      <h2>뱃지</h2>
      <BaseBadge variant="success">Sucess</BaseBadge>
      <BaseBadge variant="number">3</BaseBadge>
    </section>
  </main>
</template>
<style scoped></style>
