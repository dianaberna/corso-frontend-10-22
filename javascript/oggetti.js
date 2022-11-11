
  function budgetTotale(oggetto){
    let budgetTot=0
    let i=0
    for (i=0; i<oggetto.length; i++){
        budgetTot+= oggetto[i].budget
        
    }
    return budgetTot
  }
  
  
console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);
