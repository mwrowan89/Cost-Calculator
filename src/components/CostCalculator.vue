<template>
  <div>
    <person-input @add-person="addPerson"></person-input>
    <expense-input :people="people" @add-expense="addExpense"></expense-input>
    <person-list :people="people"></person-list>
    <expense-list :expenses="expenses"></expense-list>
  </div>
</template>
  
<script>
import ExpenseInput from './ExpenseInput.vue';
import PersonInput from './PersonInput.vue';
import ExpenseList from './ExpenseList.vue';
import PersonList from './PersonList.vue';

export default {
  components: {
    ExpenseInput,
    PersonInput,
    ExpenseList,
    PersonList
  },
  data() {
    return {
      people: [],
      expenses: []
    }
  },
  methods: {
    addPerson(personName) {
      this.people.push(personName);
    },
    addExpense(expenseName, amount, participants) {
      this.expenses.push({ expenseName, amount, participants });
    }
  }
}
</script>
  