<template>
  <div>
    <person-list :people="people" @remove-person="removePerson"></person-list>
    <expense-list :expenses="expenses" @remove-expense="removeExpense"></expense-list>
    <div>
      <h2>Total Owed</h2>
      <ul>
        <li v-for="(amountOwed, person) in calculateTotalOwed" :key="person">
          {{ person }}: ${{ amountOwed }}
        </li>
      </ul>
    </div>
    <person-input @add-person="addPerson"></person-input>
    <expense-input :people="people" @add-expense="addExpense"></expense-input>
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
    addExpense(expenseName, amount, participants) {
      this.expenses.push({ expense: expenseName, amount, participants });
      console.log(expenseName, amount, participants)
    },
    removePerson(index) {
      const removedPerson = this.people[index];
      this.people.splice(index, 1);

      this.expenses.forEach(expense => {
        expense.participants = expense.participants.filter(person => person !== removedPerson);
      });
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
        if (participants && participants.length > 0) {
          console.log(participants);
          const share = amount / participants.length;
          participants.forEach(person => {
            totalOwed[person] += share;
          });
        }
      });

      for (const person in totalOwed) {
        totalOwed[person] = Number(totalOwed[person].toFixed(2));
      }
      console.log(totalOwed)

      return totalOwed;
    }
  }
};
</script>
  