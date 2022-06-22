const log = console.log
const user = prompt('Hello Creative !, Please enter your name..')
alert(`Welcome ${user}, Lets start our game! \n Start by entering some required words,So let your imagination flow..`)

let originalStory = "The quick brown fox jumped over the lazy dog. Just when the quick brown fox jumped over the lazy dog the lazy dog jumped over the fox. He was a very hyper lazy dog!Guess what? The lazy dog jumped over the quick brown fox again! Of course he did. How could you not expect him to do that because I said in the previous paragraph he was a hyper dog.The hyper dog was a really cute dog but not if you were trying to get some sleep. Then the poor little hyper dog has to sleep outside. That might explain why the hyper dog was jumping over the quick brown fox in the first place. I guess he isn't a lazy dog after all."

originalStory = originalStory.split(' ')
//log(originalStory)

let replacables = [
    {type:'adjective', value: 'quick'},
    {type:'color', value: 'brown'},
    {type:'animal name', value: 'fox'},
    {type:'verb in past simple tense', value: 'jumped'},
    {type:'preposition', value: 'over'},
    {type:'new adjective', value: 'lazy'},
    {type:'new animal name', value: 'dog'},
    {type:'new fancy adjective', value: 'hyper'}
]

let qArray = []
let qArrayConst = ()=> {
    let q =''
    for (el of replacables) {
        let vouls = ['a','o','u','e','i']
        if ( vouls.includes(el.type[0])) q = `Please enter an ${el.type}..`
        else q = `Please enter a ${el.type}..`
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
    if(userInput.trim() == '') userInput= 'BLANK'
    uInputs.push(userInput.trim())
    log(`You wrote ${userInput.trim()}`)
}
log(uInputs)


let newStory = originalStory.map(word => {
    for (let i=0; i < replacables.length; i++){
        if (word == replacables[i].value) word =uInputs[i]
    }
    return word
})

log(`Well done ${user}, You have wrote this fancy story! \n "${newStory.join(' ')}" `)
let readableStory = newStory.join(' ')
document.write(` ${readableStory} `)