<template>
  <header class="header">
    <font-awesome-icon icon="fa-solid fa-leaf" class="header-icon" />
    <h1 class="title">Habit Tracker</h1>
    <p class="total-count">{{count}}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    count: Number
  }
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

.total-count {
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

@media screen and (max-width: 768px) {
  .header {
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
  }

  .header-icon {
    font-size: x-large;
  }

  .total-count {
    line-height: 2.1rem;
    width: 2.1rem;
    height: 2.1rem;
    font-size: x-large;
  }
}

@media screen and (max-width: 480px) {
  .header {
    justify-content: center;
  }

  .title {
    font-size: x-large;
  }

  .total-count {
    line-height: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    font-size: large;
  }
}
</style>