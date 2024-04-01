<template>
    <div>
      <person-input @add-person="addPerson"></person-input>
      <expense-input :people="people" @add-expense="addExpense"></expense-input>
      <person-list :people="people" @remove-person="removePerson"></person-list>
      <expense-list :expenses="expenses" @remove-expense="removeExpense"></expense-list>
      <div>
        <h2>Total Owed</h2>
        <ul>
          <li v-for="(amountOwed, person) in calculateTotalOwed" :key="person">
            {{ person }}: ${{ amountOwed.toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import PersonInput from '../components/PersonInput.vue';
  import ExpenseInput from '../components/ExpenseInput.vue';
  import PersonList from '../components/PersonList.vue';
  import ExpenseList from '../components/ExpenseList.vue';
  
  export default {
    components: {
      PersonInput,
      ExpenseInput,
      PersonList,
      ExpenseList
    },
    data() {
      return {
        people: [],
        expenses: []
      };
    },
    methods: {
      addPerson(personName) {
        if (!this.people.includes(personName.trim())) {
          this.people.push(personName.trim());
        }
      },
      addExpense(expense) {
        this.expenses.push(expense);
      },
      removePerson(index) {
        this.people.splice(index, 1);
      },
      removeExpense(index) {
        this.expenses.splice(index, 1);
      }
    },
    computed: {
      calculateTotalOwed() {
        const totalOwed = {};
        this.people.forEach(person => {
          totalOwed[person] = 0;
        });
  
        this.expenses.forEach(expense => {
          const { amount, participants } = expense;
          const share = amount / participants.length;
          participants.forEach(person => {
            totalOwed[person] += share;
          });
        });
  
        return totalOwed;
      }
    }
  };
  </script>
  