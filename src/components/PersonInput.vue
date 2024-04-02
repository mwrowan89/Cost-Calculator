<template>
  <div class="input">
    <input v-model="personName" type="text" placeholder="Person's Name">
    <button @click="addPerson">Add Person</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personName: ''
    }
  },
  methods: {
    addPerson() {
      if (this.personName.trim() !== '') {
        this.$emit('add-person', this.personName.trim());
        this.personName = '';
      }
    }
  }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 20vw;
}
</style>
