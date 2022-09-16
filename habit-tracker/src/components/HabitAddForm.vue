<template>
  <section class="add-form-container">
    <input type="text" class="add-form">
    <button class="add-button">Add</button>
  </section>
</template>

<script>
export default {
  name: 'HabitAddForm'
}
</script>

<style>
.add-form-container {
  display: flex;
  align-items: center;
}

.add-form {
  width: 80%;
  height: 3rem;
  border-radius: 10px;
  font-size: x-large;
  padding-left: 10px;
}

.add-form:focus {
  list-style: none;
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
</style>