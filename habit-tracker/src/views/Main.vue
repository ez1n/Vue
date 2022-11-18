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
import HabitRepository from "@/service/habit_repository";

export default {
  name: "Main",
  components: {
    Habits: Habits,
    HabitAddForm: HabitAddForm,
    Header: Header
  },
  data() {
    return {
      habits: []
    }
  },
  mounted() {
    const setHabit = (data) => this.habits = data;
    HabitRepository.getHabits(setHabit);
  },
  methods: {
    addHabit(habit) {
      const newHabit = {id: Date.now(), name: habit, count: 0}
      HabitRepository.addHabit(newHabit)
          .then(() => console.log('add'))
          .catch(error => console.log(error))
    },
    deleteHabit(id) {
      HabitRepository.deleteHabit(id)
          .then(() => console.log('delete'))
          .catch(error => console.log(error))
    },
    incrementHabit(id) {
      let newHabit;
      this.habits.map(item => {
        if (item.id === id) {
          newHabit = {...item, count: item.count + 1}
        }
      })
      HabitRepository.countHabit(id, newHabit)
          .then(() => console.log('increase'))
          .catch(error => console.log(error))
    },
    decrementHabit(id) {
      let newHabit;
      this.habits.map(item => {
        if (item.id === id) {
          newHabit = {...item, count: item.count > 0 ? item.count - 1 : 0}
        }
      })
      HabitRepository.countHabit(id, newHabit)
          .then(() => console.log('decrease'))
          .catch(error => console.log(error))
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