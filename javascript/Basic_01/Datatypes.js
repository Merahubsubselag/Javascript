"use strict"; // treat all js code as new version
//alert we are not use in browser , we are use node js 


//Datatypes in js


//call by value and call by refernce:-

// mean how story the data in the memory and how to get the data from memory .
// In these behalf of datatype divied into two part primitive and non primitive

//primitive: its is call by value means its copy the value not give the address of the data.

// Primitive chote data ke liye fast hai. Lekin bade data (Objects/Arrays) ke mamle me, poore data ko baar-baar copy karne se hazar guna zyada fast hota hai sirf uske Address (Reference) ke saath khelna. 
// Isiliye Reference type memory aur speed dono bachata hai.

// • Primitive (Call by Value) me: Asli DATA copy hota hai (jaise poori book ki photocopy).
// • Reference Type me: Data ka ADDRESS (Pata) copy hota hai (jaise ghar ki ek aur chaabi ya link). and inka type of objectes he aata hai

// $$$$$$$$$$$$$ funcation name v as variable he store hota hai es leye ous name mai address he stored hota hai heap wale data ka or yhe heap wala data function ka maal hota hai

Number = 56
BigInt = 8888888888n
String = ""
Boolean = true
heloo = undefined
temp = null
Symbol;

const id = Symbol(234)
const ids = Symbol(234)
console.log(id == ids);
//its always give different  or unique id for tag that called symbol


console.log(typeof ob)

// refrenece type or non prmitive es mai memory mai dierct refernec loact kiya ja sakta hai es leye refrenece type v bolte hai
//Array,Object,function, advance arrya set(), advance objects map()

const arr = ['car', 'bike', 'cycyle'];
const ob = {
    car: 'new', bike: 'old', cycle: '56', islog: true,
    city: {
        cityname: 'chd',
        citycolour: 'red'
    },
    playcar: function car() { console.log("hii") }
}
console.log(typeof ob)


let hello =
    function () { console.log("varifunction") }


console.log(typeof hello) // its called function object

hello();


//sets
1)
let mySet = new Set(); // Khaali Set ban gaya
mySet.add(10);
mySet.add(20);

2)
// Word ke saare unique letters nikal lega
let letters = new Set("HELLO");
// Output: Set(4) { 'H', 'E', 'L', 'O' }

3)
// Bracket () ke andar ek Array [10, 20, 10, 30, 20] pass kiya hai:
let numbers = new Set([10, 20, 10, 30, 20]);

console.log(numbers);
// Output: Set(3) { 10, 20, 30 }

// Advantages 
// Automatic Duplicate Removal:
// Super Fast Searching(.has())
// Aasan Add aur Delete: .add() aur.delete()
// Order Fix

// Disadvantages
// Index(Position) Nahi Hota:
// Array Functions not worked
// SON Mein Seedha Convert Nahi Hota
// Objects Ko Duplicate Nahi Maanta

//access

mySet = new Set(["Apple", "Mango", "Banana"]);

// Tareeka A: for...of loop
for (let fruit of mySet) {
    console.log(fruit); // Apple, Mango, Banana
}

// Tareeka B: .forEach() method
mySet.forEach((fruit) => {
    console.log(fruit); // Apple, Mango, Banana
});


mySet = new Set(["Apple", "Mango", "Banana"]);

// Set ko Array banaya
let arr = [...mySet];

console.log(arr[0]); // Output: "Apple" (Pehli value)
console.log(arr[1]); // Output: "Mango" (Doosri value)


mySet = new Set(["Apple", "Mango", "Banana"]);

let firstItem = mySet.values().next().value;
console.log(firstItem); // Output: "Apple"

mySet = new Set(["Apple", "Mango", "Banana"]);

console.log(mySet.has("Mango"));  // Output: true
console.log(mySet.has("Grapes")); // Output: false
summary: - 
 • mySet[0] kaam nahi karta(undefined deta hai).
• Saari values chahiye toh for...of, aur position([0], [1]) se chahiye toh[...mySet] use karein.

// map
// 1. Naya Map banana (Initialize)
let myMap = new Map();

// 2. .set(key, value) -> Naya data dalna
myMap.set("name", "Rahul");
myMap.set(1, "Roll Number One");   // Number ko key banaya
myMap.set(true, "Active");         // Boolean ko key banaya

// Agar same key dobara .set() karenge toh purani value UPDATE ho jayegi:
myMap.set("name", "Amit");         // "Rahul" badal kar "Amit" ho gaya

console.log(myMap);
// Output: Map(3) { 'name' => 'Amit', 1 => 'Roll Number One', true => 'Active' }

// 3. .get(key) -> Key ka naam dekar value nikalna
console.log(myMap.get("name"));    // Output: "Amit"
console.log(myMap.get(1));         // Output: "Roll Number One"
console.log(myMap.get("city"));    // Output: undefined (Kyunki yeh key nahi hai)

// 4. .has(key) -> Check karna ki key andar hai ya nahi (true / false)
console.log(myMap.has(true));      // Output: true
console.log(myMap.has("age"));     // Output: false

// 5. .size -> Total kitne jode (pairs) hain yeh ginna
console.log(myMap.size);           // Output: 3

// 6. .delete(key) -> Kisi ek key-value jode ko hatana
myMap.delete(1);                   // Roll Number One hat gaya
console.log(myMap.size);           // Output: 2

// 7. .keys(), .values(), .entries() -> Alag-alag hisse nikalna
console.log([...myMap.keys()]);    // Output: [ 'name', true ]
console.log([...myMap.values()]);  // Output: [ 'Amit', 'Active' ]
console.log([...myMap.entries()]); // Output: [ [ 'name', 'Amit' ], [ true, 'Active' ] ]

// 8. Map par Loop chalana (for...of)
for (let [key, value] of myMap) {
    console.log(key + " = " + value);
    // Output:
    // name = Amit
    // true = Active
}

// 9. .clear() -> Poora Map ek baar mein khaali karna
myMap.clear();
console.log(myMap);                // Output: Map(0) {}
console.log(myMap.size);           // Output: 0

// note: Map mein kabhi bhi myMap["name"] = "Rahul" Aisa karne par data Map 
// ke rules mein nahi judta—myMap.size 0 
// hi dikhayega aur.get("name") kaam nahi karega.Hamesha.set() aur.get() hi use karein!




// JavaScript mein Object aur Map ke Key Differences:

// 1. Key Types:
// - Object: Sirf Strings aur Symbols hi keys ho sakte hain.
// - Map: Kisi bhi data type (Objects, Functions, Numbers, Strings) ko key banaya ja sakta hai.

// 2. Key Order:
// - Object: Keys ka order hamesha insertion order mein nahi rehta.
// - Map: Keys hamesha usi order mein rehti hain jis order mein unhe add kiya gaya hai (Insertion Order).

// 3. Size Check:
// - Object: Size check karne ke liye Object.keys(obj).length likhna padta hai.
// - Map: Direct map.size property se turant count mil jaata hai.

// 4. Iteration (Looping):
// - Object: Directly iterable nahi hota. Loop ke liye Object.keys() ya for...in use karna padta hai.
// - Map: Directly iterable hota hai. Is par seedha for...of ya .forEach() chala sakte hain.

// 5. Default Keys:
// - Object: Isme prototype se kuch default keys (jaise toString) pehle se hoti hain.
// - Map: Isme koi default key nahi hoti, sirf aapka dala hua data hota hai.

// 6. Performance:
// - Object: Static data ke liye best hai, lekin frequent add/delete mein thoda slow hai.
// - Map: Baar-baar data add ya delete karne ke liye zyada fast aur optimized hai.

// 7. JSON Support:
// - Object: JSON.stringify() aur JSON.parse() ko directly support karta hai.
// - Map: Direct JSON support nahi karta.

// Kab kiska use karein?
// - Object: Jab simple structure wala data ho ya API ke saath JSON format mein kaam karna ho.
// - Map: Jab keys ke roop mein objects/numbers chahiye hon, order maintain rakhna ho, ya data baar-baar update/delete karna ho.





//with partical

// ==========================================
// 1. KEY TYPES (Object badal deta hai, Map nahi)
// ==========================================
const obj1 = {};
obj1[100] = "Century"; // Humne number 100 dala

const map1 = new Map();
map1.set(100, "Century"); // Yahan bhi number 100 dala

// Check karte hain key ka type kya bana:
console.log("Object ki key kya hai?:", typeof Object.keys(obj1)[0]); // "string" (Badal gaya!)
console.log("Map ki key kya hai?:", typeof [...map1.keys()][0]);     // "number" (Same raha!)


// ==========================================
// 2. KEY ORDER (Object sequence bigad deta hai)
// ==========================================
const obj2 = {};
obj2["first"] = "A";
obj2 = "B";
obj2 = "C";

const map2 = new Map();
map2.set("first", "A");
map2.set(5, "B");
map2.set(1, "C");

// Check karte hain line mein kaun pehle aaya:
console.log("Object ka order:", Object.keys(obj2)); // ['1', '5', 'first'] -> Numbers aage aa gaye!
console.log("Map ka order:", [...map2.keys()]);     // ['first', 5, 1] -> Bilkul waisa hi hai!

// ==========================================
// 3. SIZE CHECK
// ==========================================
console.log("3. Object Size:", Object.keys(orderObj).length); // 3 (Lamba tarika)
console.log("3. Map Size:", orderMap.size);                   // 3 (Direct property)


// ==========================================
// 4. ITERATION (Looping)
// ==========================================
// Object par direct for...of nahi chalta (Error dega), keys nikalni padti hain
for (let key of Object.keys(orderObj)) {
    console.log("4. Object Loop:", key);
}
Object.value(obj)
Object.entries(obj) // using  // for loop

// Map par seedha for...of chalta hai
for (let [key, value] of orderMap) {
    console.log("4. Map Loop:", key, "->", value);
}

warn-- - map par for in nhi chalta besuck oject ka advance kue na ho becuse Map apna data normal property mein nahi,
    balki ek internal hidden slot([[MapData]]) mein store karta hai.Isliye for...in ko kuch nahi milta.

// ==========================================
// 5. DEFAULT KEYS (Prototype)
// ==========================================

const meraObj = {};

// 1. Check karte hain kya 'toString' meraObj ki APNI property hai?
console.log(meraObj.hasOwnProperty("toString"));
// Output: false (Matlab humne nahi banaya)

// 2. Phir bhi agar hum 'toString' mangte hain toh kya milta hai?
console.log(meraObj["toString"]);
// Output: [Function: toString] (Parent ne de diya!)

// 3. Lekin Map mein koi Parent keys nahi hotin:
const meraMap = new Map();
console.log(meraMap.get("toString"));
// Output: undefined (Bilkul saaf!)


// ==========================================
// 6. JSON SUPPORT
// ==========================================
console.log("6. Object to JSON:", JSON.stringify(orderObj)); // '{"1":"one","2":"two","b":2}'
console.log("6. Map to JSON:", JSON.stringify(orderMap));    // '{}' (Khali aata hai, direct support nahi)



// Array datatype vs Set datatype


//partical:
// ==========================================
// 1. DUPLICATE VALUES (Sabse bada difference)
// ==========================================
const myArr = [10, 20, 20, 30, 10]
console.log("Array:", myArr);
// Output: [10, 20, 20, 30, 10] (Saari values rakhi hain)

const mySett = new Set([10, 20, 20, 30, 10]);
console.log("Sett:", mySett);
// Output: Set(3) { 10, 20, 30 } (Duplicates apne aap hat gaye!)                                       



// ==========================================
// 2. INDEX ACCESS (Position se nikalna)
// ==========================================
console.log("Array index 0:", myArr[0]); // Output: 10
console.log("Set index 0:", mySett[0]);   // Output: undefined (Index nahi hota)


// ==========================================
// 3. SIZE CHECK & SEARCHING
// ==========================================
console.log("Array Length:", myArr.length);        // Output: 5
console.log("Array mein 20 hai?:", myArr.includes(20)); // true (Slow search)

console.log("Set Size:", mySett.size);              // Output: 3
console.log("Set mein 20 hai?:", mySett.has(20));   // true (Super fast search)

// ==========================================
// 4. ADD AUR DELETE KARNA
// ==========================================
myArr.push(67)
mySett.add(40);      // Naya item add kiya
mySett.delete(10);   // 10 ko delete kiya (Direct value se, index ki zaroorat nahi)
console.log("Updated Set:", mySett); // Output: Set(3) { 20, 30, 40 }
console.log("Updated array:", myArr); // Output: Set(3) { 20, 30, 40 }
myArr.pop(67)
console.log("Updated array after delete:", myArr)


use: -
// Array use karein:-Jab aapko items ko index (0, 1, 2) se access karna ho, duplicate data rakhna ho, ya .map(), 
// .filter() jaise array methods lagane hon.

// Set use karein: Jab aapko list mein se duplicates hatane hon, ya bahut bade data mein turant check karna ho ki koi item maujood hai ya nahi
//  (.has()).





  // Array,set,object,map conversions 

// ========================================================
// 1. ARRAY <---> SET (Duplicates hatane aur wapas laane ke liye)
// ========================================================

// Array ko Set mein badalna:
const arr =;
const setFromArr = new Set(arr);
console.log("Array -> Set:", setFromArr); // Set(3) { 10, 20, 30 }

// Set ko wapas Array mein badalna (taaki .map(), .filter() chala sakein):
const arrFromSet = [...setFromArr];
// (Doosra tarika: Array.from(setFromArr))
console.log("Set -> Array:", arrFromSet); // [10, 20, 30]


// ========================================================
// 2. OBJECT <---> MAP (Data structure badalne ke liye)
// ========================================================

// Object ko Map mein badalna:
const obj = { name: "Rahul", age: 25 };
const mapFromObj = new Map(Object.entries(obj));
console.log("Object -> Map:", mapFromObj); // Map(2) { 'name' => 'Rahul', 'age' => 25 }

// Map ko wapas Object mein badalna (taaki JSON.stringify() kar sakein):
const objFromMap = Object.fromEntries(mapFromObj);
console.log("Map -> Object:", objFromMap); // { name: 'Rahul', age: 25 }


// ========================================================
// 3. ARRAY <---> OBJECT (List ko Key-Value banane ke liye)
// ========================================================

// 2D Array (pairs wali list) ko Object mein badalna:
const pairArr = [["city", "Mohali"], ["state", "Punjab"]];
const objFromArr = Object.fromEntries(pairArr);
console.log("Array -> Object:", objFromArr); // { city: 'Mohali', state: 'Punjab' }

// Object ko Array mein badalna (3 tarike hain):
console.log("Object Keys -> Array:", Object.keys(obj));       // ['name', 'age']
console.log("Object Values -> Array:", Object.values(obj));   // ['Rahul', 25]
console.log("Object Entries -> Array:", Object.entries(obj)); // [['name', 'Rahul'], ['age', 25]]


// ========================================================
// 4. ARRAY <---> MAP (List ko Map banane ke liye)
// ========================================================

// 2D Array ko Map mein badalna:
const mapFromArr = new Map(pairArr);
console.log("Array -> Map:", mapFromArr); // Map(2) { 'city' => 'Mohali', 'state' => 'Punjab' }

// Map ko wapas Array mein badalna:
const arrFromMap = [...mapFromArr];
// (Sirf keys chahiye toh [...mapFromArr.keys()], sirf values toh [...mapFromArr.values()])
console.log("Map -> Array:", arrFromMap); // [['city', 'Mohali'], ['state', 'Punjab']]


// ========================================================
// 1. OBJECT ---> SET (Object se unique values/keys nikalna)
// ========================================================
const obj = {
    user1: "Rahul",
    user2: "Amit",
    user3: "Rahul" // Duplicate value
};

// Object ki sirf KEYS ko Set mein dalna:
const keysSet = new Set(Object.keys(obj));
console.log("Object Keys -> Set:", keysSet);
// Output: Set(3) { 'user1', 'user2', 'user3' }

// Object ki sirf VALUES ko Set mein dalna (Duplicates hat jayenge!):
const valuesSet = new Set(Object.values(obj));
console.log("Object Values -> Set:", valuesSet);
// Output: Set(2) { 'Rahul', 'Amit' } ("Rahul" ek hi baar bacha!)


// ========================================================
// 6. SET ---> OBJECT (Set ke items ko Object banana)
// ========================================================
const fruitsSet = new Set(["Apple", "Banana", "Mango"]);

// Tarika A: Key aur Value dono same rakhni ho (.entries() use karke)
const objSame = Object.fromEntries(fruitsSet.entries());
console.log("Set -> Object (Same):", objSame);
// Output: { Apple: 'Apple', Banana: 'Banana', Mango: 'Mango' }

// Tarika B: Index (0, 1, 2) ko Key banana ho (Pehle Array banakar)
const objWithIndex = Object.assign({}, [...fruitsSet]);
// (Ya spread operator se: { ...[...fruitsSet] })
console.log("Set -> Object (Index keys):", objWithIndex);
// Output: { '0': 'Apple', '1': 'Banana', '2': 'Mango' }


// use real life:
// 1. Array \(\leftrightarrow \) Set (Sabse common — duplicates hatane ke liye)
// 2. Object \(\leftrightarrow \) Map (Data structure upgrade karne ke liye)
// 3. Array \(\leftrightarrow \) Object (Data transform karne ke liye)
// 4. Array \(\leftrightarrow \) Map (Pairs se Map banane ke liye)
// 5. Map \(\leftrightarrow \) Set (Map se unique keys/values nikalne ke liye)
// 6. Object \(\leftrightarrow \) Set (Object se unique values nikalne ya JSON bhejne ke liye)


//Golden Formula:

// 1. Array = Raja hai (.map(), .filter(), .reduce(), .find(), .forEach() sab iske paas hain).
// 2. Set aur Map = Inke paas sirf .forEach() aur for...of hai.
// 3. Object = Iske paas apna koi .forEach() nahi hai, isliye Object.entries() se ise Array banakar
//  hi Array ke saare methods use kiye jaate hain.



//ARRAY KE 7 MAIN LOOP METHODS (1-LINE SHORTCUT)
-------------------------------------------------------------------
    // - .forEach() : Bas har item par loop chalane ke liye (kuch return nahi karta).
    // - .map()     : Har item ko badal kar NAYA array banane ke liye.
    // - .filter()  : Condition pass karne wale items ka NAYA array banane ke liye.
    // - .find()    : filter ke tera work karat but Condition pass karne wala sirf PEHLA item dhoondhne ke liye.
    // - .reduce()  : Sabhi items ko jod kar EK single value (total) banane ke liye.
    // - .some()    : Kya KAM SE KAM EK item condition poori karta hai? (true / false).
    // - .every()   : Kya SAARE ke SAARE items condition poori karte hain? (true / false).

    Tips: -
// • [...cheez] (Spread Operator): Kisi bhi Set ya Map ko wapas Array banane ka sabse aasan tarika hai.
// • Object.entries(obj): Kisi bhi Object ko tod kar Array banata hai, jisse aap uspar .map(), .filter(),
//  ya new Map() chala sakte ho.
// • Object.fromEntries(...): Kisi bhi Map ya Array ko jod kar wapas Object banata hai.


