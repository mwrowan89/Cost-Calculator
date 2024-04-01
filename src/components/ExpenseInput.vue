<template>
  <div>
    <input v-model="expenseName" type="text" placeholder="Expense Name">
    <input v-model.number="amount" type="number" placeholder="Amount">
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
      participants: []
    }
  },
  methods: {
    addExpense() {
      this.$emit('add-expense', this.expenseName, this.amount, this.participants);
      this.expenseName = '';
      this.amount = 0;
      this.participants = [];
    }
  }
}
</script>

<!-- Similar structure for other components (PersonInput.vue, ExpenseList.vue, PersonList.vue) -->
