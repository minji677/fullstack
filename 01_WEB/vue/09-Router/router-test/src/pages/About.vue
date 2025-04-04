<script setup></script>

<template>
  <div class="card card-body">
    <h2>About</h2>
    <nav>
      <!--이름으로 링크-->
      <router-link to="{name: 'class'}">학급소개</router-link>
      <router-link to="/about/goal">목표</router-link>
    </nav>

    <hr />
    <router-view />
  </div>
</template>
<style scoped></style>
