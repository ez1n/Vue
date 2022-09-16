<template>
  <div class="container">
    <header class="header-container">
      <Header/>
    </header>
    <HabitAddForm/>
    <main class="wrap">
      <Habits/>
    </main>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import HabitAddForm from "@/components/HabitAddForm.vue";
import Habits from "@/components/Habits.vue";

export default {
  name: "Main",
  components: {
    Habits: Habits,
    HabitAddForm: HabitAddForm,
    Header: Header
  },
}
</script>

<style scoped>
.header-container {
  margin-bottom: 1rem;
}

.wrap {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>