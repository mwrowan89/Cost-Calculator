<template>
    <h1>Cost Calculator</h1>
</template>

<script>
let expenses = {}; 
let people = {};

// Function to add an expense
function addExpense(expenseName, amount, participants) {
    expenses[expenseName] = { amount, participants };
    updateAmounts();
}

// Function to add a person
function addPerson(personName) {
    people[personName] = {};
    updateAmounts();
}

// Function to update amounts owed
function updateAmounts() {
    for (let person in people) {
        people[person].totalOwed = 0;
        for (let expense in expenses) {
            let { amount, participants } = expenses[expense];
            if (participants.includes(person)) {
                people[person].totalOwed += amount / participants.length;
            }
        }
    }
}

// Function to exclude a person from an expense
function excludePersonFromExpense(expenseName, personName) {
    if (expenses[expenseName]) {
        expenses[expenseName].participants = expenses[expenseName].participants.filter(participant => participant !== personName);
        updateAmounts();
    }
}

// Example usage
addPerson("Alice");
addPerson("Bob");
addPerson("Charlie");

addExpense("AirBnb", 300, ["Alice", "Bob", "Charlie"]);
addExpense("CarRental", 150, ["Alice", "Bob"]);
addExpense("Skiing", 200, ["Alice"]);

excludePersonFromExpense("Skiing", "Alice");

console.log(people);


</script>