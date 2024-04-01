<template>
  <div>
    <input v-model="expenseName" type="text" placeholder="Expense Name">
    <input v-model.number="amount" type="number" placeholder="Amount">
    <input v-model="participantsInput" type="text" placeholder="Participants">
    <div v-for="person in people" :key="person">
      <input type="checkbox" :id="person" :value="person" v-model="selectedParticipants">
      <label :for="person">{{ person }}</label>
    </div>
    <button @click="addExpense">Add Expense</button>
  </div>
</template>

<script>
export default {
  props: ['people'],
  data() {
    return {
      expenseName: '',
      amount: 0,
      participantsInput: '',
      selectedParticipants: []
    }
  },
  watch: {
    selectedParticipants: {
      handler(newValue) {
        this.participantsInput = newValue.join(', ') + ' ';
      }
    }
  },
  methods: {
    addExpense() {
      const participantsArray = this.participantsInput.split(',').map(participant => participant.trim());
      this.$emit('add-expense', this.expenseName, this.amount, participantsArray);
      this.expenseName = '';
      this.amount = 0;
      this.participantsInput = '';
    }

  }
}
</script>