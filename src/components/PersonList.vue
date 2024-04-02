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
  align-items: center;
  width: 20vw;
}

.list {
  display: flex;
  font-size: 1.1rem;
  list-style: none;
  justify-content: center;
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  height: 3vh;
  width: 5vw;
}
</style>