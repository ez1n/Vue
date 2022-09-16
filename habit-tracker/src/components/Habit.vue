<template>
  <span class="habit">Reading</span>

  <span class="count">0</span>

  <button class="icon-button">
    <font-awesome-icon class="plus-icon" icon="fa-solid fa-square-plus" />
  </button>

  <button class="icon-button">
    <font-awesome-icon class="minus-icon" icon="fa-solid fa-square-minus" />
  </button>

  <button class="icon-button">
    <font-awesome-icon class="delete-icon" icon="fa-solid fa-trash" />
  </button>
</template>

<script>
export default {
  name: 'Habit'
}
</script>

<style>
.habit {
  font-size: xx-large;
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

.icon-button {
  border: none;
  background-color: unset;
}

.plus-icon,
.minus-icon,
.delete-icon {
  font-size: xx-large;
}

.plus-icon,
.minus-icon {
  color: #f1bc29
}

.delete-icon {
  color: rgb(179, 47, 47)
}
</style>