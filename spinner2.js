let sign = "|/-\|/-\|";
let time = 5000;
for (const char of sign) {
  setTimeout(() => {
    process.stdout.write('\r ');
    process.stdout.write(char);
  }, time);
  time += 2500
}

// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// // setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);


// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 2000);

// // ... fill in the rest yourself ...
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 2500);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 3000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 3500);


// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 4000);