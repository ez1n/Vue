<script setup>
import HabitAddForm from '../components/HabitAddForm.vue';
import Header from '../components/Header.vue';
import Habit from '../components/Habit.vue';
</script>

<template>
  <div class="container">
    <header class="header-container">
      <Header />
    </header>
    <HabitAddForm />
    <main class="wrap">
      <Habit />
    </main>
  </div>
</template>

<style scoped>
.header-container {
  margin-bottom: 1rem;
}

.wrap {
  margin-left: 2rem;
}
</style>