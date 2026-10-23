const  firstname='rahul'
const lastname ='kumar'
// old type
console.log('full Name',firstname+lastname);

//new 
console.log(`full name is ${firstname,lastname} `)

//new way to declare string


const  game= new String('rahul-kumar-')
let url='https/.rahulkumar.com/rahul%20kumar'

const  gamee= new String('  rha  ')
// console.log(game.length);
// console.log(game['2']);
// console.log(game.__proto__); // in this oject protoype many functions of string objects
// console.log(game.substring(0,2)); 
console.log(game.slice(-10,9)); // it will acccpt - value also its mean pick from last or reverse -10 or 10 tell postion fornt or back and 9 tell the how many no cut or slice
console.log(game.toUpperCase()); 
console.log(game.indexOf('k')); 
console.log(game.charAt(4)); 
console.log(gamee.trim())
console.log(url.replace('%20','-'));
//include for have include or not 
console.log(url.includes('oo'));
//based on _ whitespaces and give as array

const  game0= new String('rahul-kumar-')
console.log(game0.split('-'))


// string functions
anchor()
at()
big()
blink()


bold()
 charAt()
charCodeAt
 charCodeAt()
codePointAt
 codePointAt()
 concat()
String()
 endsWith()
fixed()
fontcolor()
fontsize()
 includes()
 indexOf()
 isWellFormed()
italics()
lastIndexOf()
length
 link()
 localeCompare()
 match()
 matchAll()
 normalize()
padEnd()
 padStart()
 repeat()
 replace()
 replaceAll()
 search()
 slice()
 small()
 split()
 startsWith()
 strike()
 sub()
 substr()
 substring()
 sup()
 toLocaleLowerCase()
 toLocaleUpperCase()
 toLowerCase()
 toString()
 toUpperCase()
 toWellFormed()
 trim()
 trimEnd()
 trimStart()
 trimEnd()
 trimStart()
 valueOf()
Symbol(Symbol.iterator)
 [Symbol.iterator]()
