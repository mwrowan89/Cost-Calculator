<template>
    <div>
      <h2>People</h2>
      <ul>
        <li v-for="(person, index) in people" :key="index">
          {{ person }}
          <button @click="removePerson(index)">Remove</button>
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