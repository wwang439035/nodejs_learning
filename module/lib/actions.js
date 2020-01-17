const sayings = [
  "Hello world",
  "Happy new year",
  "Good morning",
];

const interval = setInterval(function () {
  const i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function (data) {
  console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});