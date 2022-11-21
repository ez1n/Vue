<template>
  <form class="add-form-container" @submit="addHabit">
    <input
        class="add-form"
        type="text"
        required
        placeholder="Enter Your Habit"
        ref="habit">
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<script>
export default {
  name: 'HabitAddForm',
  data() {
    return {
      habit: ''
    }
  },
  methods: {
    addHabit(e) {
      e.preventDefault();
      this.$emit('add', this.$refs.habit.value);
      this.$refs.habit.value='';
    }
  }
}
</script>

<style>
.add-form-container {
  display: flex;
  align-items: center;
  margin: 1rem;
}

.add-form {
  width: 50%;
  height: 2.5rem;
  border-radius: 10px;
  font-size: x-large;
  padding-left: 10px;
}

.add-form:focus {
  outline: none;
}

.add-button {
  margin: 1rem;
  font-size: x-large;
  background-color: rgb(50, 141, 50);
  color: #fcfcfc;
  border: none;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
}

.add-button:hover {
  background-color: rgb(87, 196, 87);
}

@media screen and (max-width: 768px) {
  .add-form {
    width: 70%;
    height: 2.3rem;
    font-size: large;
  }

  .add-button {
    font-size: large;
    padding: 10px;
  }
}

@media screen and (max-width: 480px) {
  .add-form-container {
    justify-content: center;
  }

  .add-form {
    width: 100%;
    height: 2rem;
    font-size: medium;
  }

  .add-button {
    font-size: medium;
    margin: 0.5rem;
  }
}
</style>