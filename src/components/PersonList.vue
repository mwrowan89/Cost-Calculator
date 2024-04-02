<template>
  <div class="people-input">
    <h2>People:</h2>
    <ul class="list">
      <li class="items" v-for="(person, index) in people" :key="index">
        {{ person }}
        <button class="button" @click="removePerson(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  props: ['people'],
  methods: {
    removePerson(index) {
      this.$emit('remove-person', index);
    }
  }
}
</script>

<style scoped>
.people-input {
  display: flex;
  width: 75vw;
}

.list {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  list-style: none;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.button {
  scale: 80%;
}
</style>