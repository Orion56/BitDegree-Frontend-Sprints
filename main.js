const log = console.log
const user = prompt('Hello Creative !, Please enter your name..')
alert(`Welcome ${user}, Lets start our game! \n start by providing some words and let your imagination flow..`)

let replacables = [
    'adjective',
    'color',
    'animal name',
    'verb',
    'preposition',
    'new adjective',
    'new animal name',
    'new fancy adjective',
]

let qArray = []
let qArrayConst = ()=> {
    let q =''
    for (let el of replacables) {
        let vouls = ['a','o','u','e','i']
        if ( vouls.includes(el[0])) q = `Please enter an ${el}..`
        else q = `Please enter a ${el}..`
        qArray.push(q)
    }
    return qArray
}
qArrayConst()
//log(qArray)

//get user inputs
let uInputs =[]
for (q of qArray) {
    let userInput = prompt(q)
    uInputs.push(userInput)
    log(`You wrote ${userInput}`)
}
log(uInputs)

let originalStory = "The quick brown fox jumped over the lazy dog. Just when the quick brown fox jumped over the lazy dog the lazy dog jumped over the fox. He was a very hyper lazy dog!Guess what? The lazy dog jumped over the quick brown fox again! Of course he did. How could you not expect him to do that because I said in the previous paragraph he was a hyper dog.The hyper dog was a really cute dog but not if you were trying to get some sleep. Then the poor little hyper dog has to sleep outside. That might explain why the hyper dog was jumping over the quick brown fox in the first place. I guess he isn't a lazy dog after all."

originalStory = originalStory.split(' ')
//log(originalStory)

let newStory = originalStory.map(word => {
    if (word == 'quick') word =uInputs[0]
    if (word == 'brown') word = uInputs[1]
    if (word == 'fox') word = uInputs[2]
    if (word == 'jumped') word = uInputs[3]
    if (word == 'over') word = uInputs[4]
    if (word == 'lazy') word = uInputs[5]
    if (word == 'dog') word = uInputs[6]
    if (word == 'hyper') word = uInputs[7]
    return word
})

log(`Well done ${user}, You have wrote this fancy story! \n "${newStory.join(' ')}" `)