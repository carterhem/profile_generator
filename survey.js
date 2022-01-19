const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('What meal is your favourite meal? (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer1}'s favourite sport is ${answer6}, but their favourite activity is ${answer2}. You can find ${answer1} listening to ${answer3} or eating ${answer5} - most often for ${answer4}. Their superpower is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


//the reason we have to nesst is that callback is singular, once condition is hit it will returnt the console log
//to avoid this we nest our questions - so it is a singular input, and console.log will be our singular output
//singular input - one long message rather than 3 individual questions which is multiple in/outputs


//preveious format for reference
// rl.question('What\'s an activity you like doing?', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });