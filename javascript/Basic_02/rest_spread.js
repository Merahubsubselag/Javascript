
//Function में Object Destructuring करते समय बाकी properties पाना

const student = { name: 'Rahul', score: 95 };

// Function के ब्रैकेट में ही destructuring कर ली
function checkResult({ name, score }) {
    console.log(`${name} scored ${score} marks.`);
}

checkResult(student); // Output: Rahul scored 95 marks.


// array and object mai use hota copy and destrcuting time




//Strings becuse it also collection

//example:
const name = "RAHUL";

// String को अक्षरों में फैला दिया
const characters = [...name];

console.log(characters);
// Output: ['R', 'A', 'H', 'U', 'L']

// NodeList और HTML Collections के साथ (DOM Manipulation)

// मान लीजिए page पर 3 buttons हैं, तो ये NodeList लाएगा
const buttonsNodeList = document.querySelectorAll('button');

// Spread की मदद से इसे असली Array में बदल दिया
const buttonsArray = [...buttonsNodeList];

// अब आप आसानी से Array का .map() या .filter() लगा सकते हैं
buttonsArray.map(btn => btn.style.backgroundColor = 'blue');

// Math Functions के साथ (Math.max / Math.min)

const scores =;

// बिना Spread के: Math.max(scores) --> NaN (Error)

// Spread के साथ: यह scores array को खोलकर 45, 99, 82, 12 बना देता है
const highestScore = Math.max(...scores);

console.log(highestScore); // Output: 99
