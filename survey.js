const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? (Nicknames are also acceptable) `, (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);
  rl.question(`What's an activity you like doing? `, (activity) => {
    console.log(`Thank you. Answer: ${activity}`);
      rl.question(`What do you listen to while doing that? `, (music) => {
        console.log(`${music} Banger!!!`);
          rl.question(`Which meal is your favorite (ex. dinner, brunch, etc.) `, (meal) => {
            console.log(`${meal} is a good choice.`);
              rl.question(`What's your favorite thing to eat for that meal? `, (food) => {
                console.log(`${food} sounds yummy.`);
                  rl.question(`Which sport is your absolute favorite? `, (sport) => {
                    console.log(`${sport} is fun!`);
                    rl.close();
          });
        });
      });
    });
  });
});