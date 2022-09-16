<template>
  <div>
    <span class="habit">{{ name }}</span>

    <span class="count">{{ count }}</span>

    <button class="icon-button" @click="increment">
      <font-awesome-icon class="icon plus-icon" icon="fa-solid fa-square-plus"/>
    </button>

    <button class="icon-button" @click="decrement">
      <font-awesome-icon class="icon minus-icon" icon="fa-solid fa-square-minus"/>
    </button>

    <button class="icon-button" @click="delete(id)">
      <font-awesome-icon class="icon delete-icon" icon="fa-solid fa-trash"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Habit',
  props: {
    id: Number,
    name: String,
    count: Number,
    delete: Function
  },
  methods: {
    increment() {
      return this.count ++
    },
    decrement() {
      this.count === 0 ? this.count = 0 : this.count--
    }
  }
}
</script>

<style>
button {
  cursor: pointer;
}

.habit {
  font-size: xx-large;
  margin-right: 1rem;
}

.count {
  display: inline-block;
  text-align: center;
  line-height: 2.2rem;
  width: 2.2rem;
  height: 2.2rem;
  font-size: x-large;
  border-radius: 50%;
  background-color: rgb(116, 184, 116);
  color: #fcfcfc;
  margin-right: 1rem;
}

.icon-button {
  border: none;
  background-color: unset;
  margin-right: 0.5rem;
}

.icon {
  font-size: 2.2rem;
}

.plus-icon,
.minus-icon {
  color: #f1bc29
}

.plus-icon:hover,
.minus-icon:hover {
  color: rgba(241, 188, 41, 0.8)
}

.delete-icon {
  color: rgb(179, 47, 47)
}

.delete-icon:hover {
  color: rgba(179, 47, 47, 0.8)
}
</style>