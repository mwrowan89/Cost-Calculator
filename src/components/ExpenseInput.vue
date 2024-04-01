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

// Similar structure for other components (PersonInput.vue, ExpenseList.vue, PersonList.vue)

// CostCalculator.vue
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
