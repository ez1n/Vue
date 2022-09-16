<template>
  <li class="habit-list" v-for="habit in habits">
    <Habit :id="habit.id" :name="habit.name" :count="habit.count" @delete="delete" />
  </li>
</template>

<script>
import Habit from "@/components/Habit.vue";

export default {
  name: "Habits",
  components: {Habit},
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
    delete(id) {
      this.habits = this.habits.filter((item) => item.id !== id);
      console.log('delete')
    }
  }
}
</script>

<style scoped>
.habit-list {
  list-style: none;
  margin-bottom: 1rem;
}
</style>