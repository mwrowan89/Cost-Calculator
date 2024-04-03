<template>
  <div class="expense-input">
    <h2>Expenses:</h2>
    <ol class="expense-list">
      <li v-for="(expense, index) in expenses" :key="index">
        <strong>{{ expense.expense }}</strong> ${{ expense.amount }}
        <span v-if="expense.participants.length > 0">
          (Participants: {{ expense.participants.join(', ') }})
        </span>
        <button @click="removeExpense(index)">Remove</button>
      </li>
    </ol>
  </div>
</template>
  
<script>
export default {
  props: ['expenses'],
  methods: {
    removeExpense(index) {
      this.$emit('remove-expense', index);
    }
  },
  mounted() {
    console.log(this.expenses);
  }
}
</script>
<style scoped>
.expense-input {
  display: flex;
  flex-direction: column;
}
</style>