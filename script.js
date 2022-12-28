// Failure is the opportunity to begin again more intelligently
// verb             nount           phrase

const verbs = [
  'Failure', 
  'Crashing', 
  'Flopping',
  'Failing',
  'Defeat',
  'Flunking'
];

const nouns = [
  'opportunity', 
  'possibility',
  'opening', 
  'fortune',
  'moment',
  'liberty'
]

const phrases = [
  'to begin again more intelligently',
  "to start anew with a better plan",
  "to approach things differently",
  "to try again with a better strategy",
  "to start fresh with a more informed approach",
  "to recommence with a smarter approach",
  "to reevaluate and make changes for a more successful outcome"
]


const inspiratinalQuoteGenerator = () => {
  
  // get randome vars
//  console.log (Math.floor(Math.random ()*6))
  const noun = nouns[Math.floor(Math.random ()*6)]
  const verb = verbs[Math.floor(Math.random ()*6)]
  const phrase = phrases[Math.floor(Math.random ()*7)]
  
  
  return `${verb} is the ${noun} ${phrase}`

}

console.log(inspiratinalQuoteGenerator())