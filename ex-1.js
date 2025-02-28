// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
let decreaseScore = [];

for (let i = 0; i < scores.length; i++) {
   const decrease = scores[i] - 10;
   decreaseScore.push(decrease)
};
console.log(decreaseScore)
