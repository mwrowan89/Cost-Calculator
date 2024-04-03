<template>
  <div>
    <person-input @add-person="addPerson"></person-input>
    <person-list class="people" :people="people" @remove-person="removePerson"></person-list>
    <expense-list class="expenses" :expenses="expenses" @remove-expense="removeExpense"></expense-list>
    <div class="total-owed">
      <h2>Total Owed:</h2>
      <ul class="total-owed-ul">
        <li class="total-owed-li" v-for="(amountOwed, person) in calculateTotalOwed" :key="person">
          {{ person }}: ${{ amountOwed }}
        </li>
      </ul>
    </div>
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
          const share = amount / participants.length;
          participants.forEach(person => {
            totalOwed[person] += share;
          });
        }
      });

      for (const person in totalOwed) {
        totalOwed[person] = Number(totalOwed[person].toFixed(2));
      }
      return totalOwed;
    }
  }
};
</script>

<style scoped>
.people,
.expenses,
.total-owed {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  max-width: 75vw;
  width: 75vh;
  padding: 20px;
}

.total-owed-li {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.total-owed-ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
}
</style>
  