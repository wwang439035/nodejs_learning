let hello = "Hello Word From Node JS";
console.log(hello);
global.console.log('Hello World From Global');

console.log(__dirname);
console.log(__filename);

const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);

console.log(`The process id is ${process.pid}`);
console.log(process.versions.node);
console.log(process.argv);
const [firstArg, lastArg] = process.argv;
console.log(`${firstArg} ${lastArg}`);

process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

/*
const questions = [
    "What is your name?",
    "What would you rather be doing?"
];
const ask = (i = 0) => {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(` > `);
};
ask();

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});
process.on("exit", () => {
    const [first, second] = answers;
    console.log(`${first}, ${second}`);
});
*/

const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const readLine = require("readline");
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor(currentTime / waitTime * 100);
    readLine.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting... ${p}%`)
};
const timerFinished = () => {
    clearInterval(interval);
    console.log("\ndone");
    process.exit();
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
console.log(Boolean(process.stdout.isTTY));
