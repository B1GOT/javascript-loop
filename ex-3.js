// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = studentScores[0];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] < minScore) {
        minScore = studentScores[i];
    }
}

console.log(minScore);
