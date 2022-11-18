<template>
  <div>
    <div class="habit-list" v-for="habit in habits">
      <Habit
          :id="habit.id"
          :name="habit.name"
          :count="habit.count"
          @delete="onDelete"
          @increase="onIncrease"
          @decrease="onDecrease"/>
    </div>
    <p v-if="count">there's no habits</p>
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
  },
  computed: {
    count() {
      return this.habits.length === 0
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