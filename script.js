let userName = prompt("Welcome to GC mini golf! What is your name?");
let golfHole = prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes today?`);


let totalPar = 0;
let coursePar = golfHole * 3;


for (let i = 0; i < golfHole; i++) {
    let totalPutts = Number(prompt(`How many putts for hole ${i + 1}? (par is 3)`) );
    totalPar += totalPutts;
}
console.log("Score: " + totalPar + ".");


if (coursePar === totalPar) {
    console.log(`Good job, ${userName}. Your total par was: 0`);
    } else if (coursePar < totalPar) {
    console.log(`Great job, ${userName}! Your total par was -${coursePar}`);
    } else if (coursePar > totalPar) {
    console.log(`Nice try, ${userName}... Your total par was +${coursePar}`);
}


