<template>
  <header class="header">
    <font-awesome-icon icon="fa-solid fa-leaf" class="header-icon" />
    <h1 class="title">Habit Tracker</h1>
    <p class="count">0</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  background-color: #ffebbf;
  padding: 1rem;
}

.header-icon {
  font-size: xx-large;
  margin-right: 1rem;
  color: rgb(50, 141, 50);
}

.title {
  margin-right: 1rem;
  color: black;
}

.count {
  display: inline-block;
  text-align: center;
  line-height: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  font-size: xx-large;
  border-radius: 50%;
  background-color: rgb(50, 141, 50);
  color: #fcfcfc;
}
</style>