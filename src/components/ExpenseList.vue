<template>
    <div>
      <h2>Expenses</h2>
      <ul>
        <li v-for="(expense, index) in expenses" :key="index">
          <strong>{{ expense.expenseName }}</strong>: ${{ expense.amount }}
          <span v-if="expense.participants.length > 0">
            (Participants: {{ expense.participants.join(', ') }})
          </span>
          <button @click="removeExpense(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['expenses'],
    methods: {
      removeExpense(index) {
        this.$emit('remove-expense', index);
      }
    }
  }
  </script>