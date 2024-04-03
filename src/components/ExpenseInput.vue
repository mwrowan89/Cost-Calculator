<template>
  <div>
    <input v-model="expenseName" type="text" placeholder="Expense Name">
    <input v-model.number="amount" type="number" placeholder="Amount">
    <input v-model="participantsInput" type="text" placeholder="Participants">
    <button @click="addExpense">Add Expense</button>
    <br>
    <div class="selectAll">
      <input type="checkbox" v-model="selectAll" @change="toggleSelectAll">
    <label>Select All</label>
    </div>
    <div class="checkbox" v-for="person in people" :key="person">
      <input  type="checkbox" :id="person" :value="person" v-model="selectedParticipants">
      <label :for="person"> {{ " " + person }}</label>
    </div> 
    <br>
  </div>
</template>

<script>
export default {
  props: ['people'],
  data() {
    return {
      selectAll: false,
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
    },
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedParticipants = this.people;
      } else {
        this.selectedParticipants = [];
      }
    }

  }
}
</script>

<style scoped> 
.checkbox {

  display: inline-block;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;

}
</style>
