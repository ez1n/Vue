<template>
  <div class="container">
    <header class="header-container">
      <Header :count="count"/>
    </header>
    <HabitAddForm @add="addHabit"/>
    <main class="wrap">
      <Habits
          :habits="habits"
          @delete="deleteHabit"
          @increase="incrementHabit"
          @decrease="decrementHabit"/>
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
  data() {
    return {
      habits: [
        {id: 1, name: "Reading", count: 0},
        {id: 2, name: "Running", count: 0},
        {id: 3, name: "Coding", count: 0},
      ]
    }
  },
  methods: {
    addHabit(habit) {
      this.habits = [...this.habits, {id: Date.now(), name: habit, count: 0}]
    },
    deleteHabit(id) {
      this.habits = this.habits.filter(item => item.id !== id);
    },
    incrementHabit(id) {
      this.habits = this.habits.map(item =>
          item.id === id ? {...item, count: item.count + 1} : item)
    },
    decrementHabit(id) {
      this.habits = this.habits.map(item => {
        if (item.id === id) {
          return {...item, count: item.count > 0 ? item.count - 1 : 0}
        } else return item;
      })
    }
  },
  computed: {
    count() {
      return this.habits.length;
    }
  }
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