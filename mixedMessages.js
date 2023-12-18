const randomJokes =  ['Did you hear they arrested the devil? Yeah, they got him on possession.', 'What did one DNA say to the other DNA? “Do these genes make me look fat?”','My IQ test results came back. They were negative.', 'What do you get when you cross a polar bear with a seal? A polar bear.', 'Why can"t you trust an atom? Because they make up literally everything.' ]

for (i=0; i < 7; i++) {
    const mixThemUp = Math.floor(Math.random() * 5);
    console.log(randomJokes[mixThemUp])
}

console.log('Add more jokes')