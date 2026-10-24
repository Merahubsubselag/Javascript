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

//  Interview questions

//  String methods original string ko kabhi change nahi karte."
// JavaScript mein strings Immutable (jinhe badla na ja sake) hoti hain. Isiliye 
// .slice() ya .trim() chalane par hamesha ek Nayi String banti hai, purani string waisi ki waisi hi rehti hai.



Group 1: Substring Nikalne Wale Methods (Cutting/Slicing)

Jab aapko ek badi string mein se chota hissa kaat kar nikaalna ho, toh yeh 2 sabse zyada use hote hain. Dono mein index (position) ka khel hota hai:

1. .slice(start, end)

• Kaam: Yeh string ko start index se lekar end index ke ek pehle tak kaatta hai.
• Jadu/Fayda: Isme aap negative values (-1, -2) bhi de sakte hain, jo string ke peeche se counting shuru karti hain.

let text = "JavaScript";
console.log(text.slice(0, 4));  // Output: "Java" (0 se shuru, 4 se pehle khatam)
console.log(text.slice(-5));    // Output: "Script" (Peeche se 5 characters)



substring(start, end)

• Kaam: Yeh bhi bilkul .slice() ki tarah kaam karta hai.
• Farq: Yeh negative values ko support nahi karta. Agar aap isme negative value dalenge, toh yeh use automatically 0 maan lega.

console.log(text.substring(0, 4)); // Output: "Java"
console.log(text.substring(-3, 4)); // Output: "Java" (Kyunki -3 ko isne 0 bana diya)



Group 2: Search/Check Karne Wale Methods (Checking)

Yeh functions aapko true ya false (Boolean) return karte hain, jisse aap pata kar sakte hain ki string mein koi word hai ya nahi.


.includes(searchString)

• Kaam: Yeh check karta hai ki kya woh word string mein maujood hai ya nahi.

let sentence = "I love coding in JavaScript";
console.log(sentence.includes("coding")); // Output: true
console.log(sentence.includes("Java"));   // Output: true



.startsWith(string) aur .endsWith(string)

• Kaam: Pata karna ki string kis word se shuru ya khatam ho rahi hai.
javascript
console.log(sentence.startsWith("I"));       // Output: true
console.log(sentence.endsWith("JavaScript")); // Output: true


Group 3: String Modifying Methods (Badlav Karne Wale)


replace(old, new)

• Kaam: Kisi ek word ko doosre word se badalna. (Note: Yeh sirf pehle match hone wale word ko badalta hai).
javascript
let msg = "Hello Rahul, Hello Guest";
console.log(msg.replace("Hello", "Hi")); // Output: "Hi Rahul, Hello Guest"


.trim()

• Kaam: String ke aage aur peeche ke faltu extra spaces (khaali jagah) ko saaf karna.


Group 4: Character & Position Dhoondhne Wale Methods


.charAt(index)

• Kaam: Kisi specific position (index) par kaun sa character baitha hai, yeh pata karna.
javascript
let tech = "React";
console.log(tech.charAt(2)); // Output: "a" (Kyunki R=0, e=1, a=2)



.indexOf(substring) aur .lastIndexOf(substring)

• Kaam: Kisi letter ya word ki position (index) number nikaalna. Agar woh word nahi milta, toh yeh -1 return karta hai.
javascript
let msg = "hello lolo";
console.log(msg.indexOf("l"));     // Output: 2 (Pehla 'l' index 2 par hai)
console.log(msg.lastIndexOf("l")); // Output: 8 (Aakhiri 'l' index 8 par hai)
console.log(msg.indexOf("z"));     // Output: -1 (Kyunki 'z' string mein nahi hai)