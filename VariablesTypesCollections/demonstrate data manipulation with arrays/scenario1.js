let customers = [
    { id: 432, name: "Gwen", rating: 4.9, bonus: 20 },
    { id: 112, name: "Jack", rating: 4.5, bonus: 40 },
    { id: 226, name: "Sam", rating: 4.0, bonus: 0 },
    { id: 102, name: "Sofia", rating: 3.9, bonus: 50 },
    { id: 324, name: "Marven", rating: 3.2, bonus: 0 }
];

let customersWithScore = customers.map((item) => {
    let score = item.rating * 2.4 + item.bonus;
    return {...item, score: Number(score.toFixed(2))};
});

let sortedCustomersWithScore = customersWithScore.sort((a, b) => a.score - b.score);

customersWithScore.splice(customersWithScore.length-2, 2);

let sortedCustomerNames = customersWithScore.map((item) => item.name);

console.log(sortedCustomerNames.join(", "));