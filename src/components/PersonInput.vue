<template>
  <div class="person-input">
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
.person-input {
  scale: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
