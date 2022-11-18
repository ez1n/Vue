<template>
  <div>
    <li class="habit-list" v-for="habit in habits">
      <Habit
          :id="habit.id"
          :name="habit.name"
          :count="habit.count"
          @delete="onDelete"
          @increase="onIncrease"
          @decrease="onDecrease"/>
    </li>
  </div>
</template>

<script>
import Habit from "@/components/Habit.vue";

export default {
  name: "Habits",
  components: {Habit},
  props: {
    habits: Array
  },
  methods: {
    onDelete(id) {
      this.$emit("delete", id)
    },
    onIncrease(id) {
      this.$emit("increase", id)
    },
    onDecrease(id) {
      this.$emit("decrease", id)
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