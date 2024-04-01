<template>
  <div>
    <input v-model="expenseName" type="text" placeholder="Expense Name">
    <input v-model.number="amount" type="number" placeholder="Amount">
    <input v-model="participantsInput" type="text" placeholder="Participants">
    <select v-model="participants" multiple>
      <option v-for="person in people" :key="person">{{ person }}</option>
    </select>
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
      participantsInput: ''
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

<!-- Similar structure for other components (PersonInput.vue, ExpenseList.vue, PersonList.vue) -->
<!-- addExpense() {
  // Ensure participants is always an array
  let participantsArray = [];
  if (typeof this.participants === 'string') {
    participantsArray = this.participants.split(',').map(p => p.trim());
  }

  
  // Emit the expense object with the correct structure
  this.$emit('add-expense', { expenseName: this.expenseName, amount: this.amount, participants: participantsArray });

  // Reset input fields
  this.expenseName = '';
  this.amount = 0;
  this.participants = '';
} -->