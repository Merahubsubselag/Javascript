


================================================================================
                  PROGRAMMING LOOPS: COMPLETE BEGINNER NOTES
================================================================================

Loop ka simple matlab: Ek hi kaam ko baar-baar karna, jab tak shart (condition)
poori na ho jaye. Har loop sirf TRUE ya FALSE par chalta hai.

--------------------------------------------------------------------------------
1. TEENON LOOPS MEIN KYA FARK HAI? (DIFFERENCE TABLE)
--------------------------------------------------------------------------------

+---------------+---------------------------+----------------------------------+------------------------------------------+

| Loop Type     | Kab Use Karein?           | Kaise Kaam Karta Hai?            | Code Example (JavaScript)                |
+---------------+---------------------------+----------------------------------+------------------------------------------+

| for loop      | Jab ginti PEHLE SE PATA   | Start, Condition aur Step (i++)  | for (let i = 1; i <= 3; i++) {           |
|               | ho (Fixed iterations).    | teeno ek hi line () mein hote    |   console.log("Round: " + i);            |
|               |                           | hain.                            | }                                        |
+---------------+---------------------------+----------------------------------+------------------------------------------+

| while loop    | Jab exact ginti PATA NA   | Start loop ke bahar hota hai.    | let battery = 50;                        |
|               | ho, sirf shart par rukna  | Jab tak condition TRUE hai,      | while (battery > 0) {                    |
|               | ho.                       | loop chalta rehta hai.           |   battery -= 25;                         |
|               |                           |                                  | }                                        |
+---------------+---------------------------+----------------------------------+------------------------------------------+

| do-while loop | Jab kaam KAM SE KAM 1     | Pehle code chalta hai, BAAD MEIN | let run = false;                         |
|               | BAAR zaroor chalana ho    | condition check hoti hai.        | do {                                     |
|               | (Ex: ATM / Menu apps).    |                                  |   console.log("ATM Menu Open");          |
|               |                           |                                  | } while (run === true);                  |
+---------------+---------------------------+----------------------------------+------------------------------------------+

--------------------------------------------------------------------------------
2. WHILE LOOP: NUMBERS VS BOOLEAN (BAHOT ZAROORI!)


A. NUMBERS KE SAATH (Jahan ++ ya -- lagana padta hai)
   Jab loop kisi number par chalta hai, toh andar i++ (badhana) ya i-- (ghatana)
   likhna zaroori hai, warna number kabhi badlega nahi aur loop kabhi rukega nahi.

   Code Example:
   let i = 1;
   while (i <= 5) {
     console.log(i);
     i++; // Number badhana zaroori hai taaki loop ruke
   }

B. BOOLEAN / CONDITION KE SAATH (Jahan ++ ya -- ki zaroorat NAHI hoti)
   Jab kaam kisi haalat (true/false, null, ya exit) par rukna ho, wahan ginti
   badhane (i++) ki koi zaroorat nahi hoti. Aise cases mein 'for' loop likhne mein
   ganda aur mushkil lagta hai, isliye 'while' best hai.

   Code Example:
   let isAlive = true;
   while (isAlive) {
     console.log("Game chal raha hai...");
     isAlive = false; // Game over hote hi loop apne aap ruk jayega
   }

   Iske 5 Real-Life Examples:
   1. Boolean Flag Based (true se false hona):
      - Game khelte waqt jab tak player zinda hai (true), game chalao. Game Over
        (false) hote hi loop band.
   2. User Input Based:
      - ATM machine mein jab tak user "Cancel" ya 0 na dabaye, screen chalti rahe.
   3. Data / Collection Khatam Hone Par:
      - WhatsApp par purani chats load karna ya file padhna, jab tak messages
        khatam na ho jayein.
   4. Null / Khaali Check Based (Train ke dibbe jaisa):
      - Jaise train ke ek dibbe se agle dibbe mein jate rehna jab tak aakhiri
        dibbe ke baad khaali patri (null) na aa jaye. (Linked List / Tree mein).
   5. Emergency / Event Driven (while(true) aur break):
      - Website ka server hamesha (while(true)) chalta rehta hai, aur sirf tabhi
        rukta (break) hai jab koi crash ya emergency shutdown aaye.

--------------------------------------------------------------------------------
3. KYA LOOP SIRF AAGE (FORWARD) HI CHALTA HAI?
--------------------------------------------------------------------------------

Nahi! Aap loop ko kisi bhi direction aur speed se chala sakte hain:

1. Peeche chalna (Reverse):
   for (let i = 5; i >= 1; i--) { console.log(i); } // Output: 5, 4, 3, 2, 1

2. 2-2 kadam aage badhna:
   for (let i = 2; i <= 8; i += 2) { console.log(i); } // Output: 2, 4, 6, 8

3. Multiply / Divide karke tez bhagna:
   for (let i = 1; i <= 16; i *= 2) { console.log(i); } // Output: 1, 2, 4, 8, 16

4. Beech mein rokna (break aur continue):
   - break: Kaam milte hi loop se seedha bahar aa jao.
   - continue: Sirf is baar ko skip karo aur agle number par badh jao.

   Code Example:
   for (let i = 1; i <= 5; i++) {
     if (i === 3) continue; // 3 ko skip karega
     if (i === 5) break;    // 5 par loop khatam kar dega
     console.log(i);        // Output: 1, 2, 4
   }

--------------------------------------------------------------------------------
4. NUMBER-BASED LOGIC KAHAN USE HOTA HAI?
--------------------------------------------------------------------------------

1. Searching & Filtering: List mein koi cheez dhundhna ya chhaantna.
2. Pattern Printing: Star (*) aur Pyramid ke design banana.
3. Calculation & Total (Accumulation): Cart ka total bill ya Factorial nikalna.
4. Sliding Window: Ek chhota group banakar aage khiskana (Jaise: 10 dinon ki
   list mein 3-3 din ka group banakar average nikalna).

--------------------------------------------------------------------------------
5. BEST REAL-LIFE PROJECT EXAMPLES
--------------------------------------------------------------------------------

1. Do Numbers ki Adla-Badli (Swapping):
   - Concept: Do cheezon ki jagah aapas mein badalna.
   - Flipkart / Amazon Example: Jab aap "Price: Low to High" filter lagate hain,
     toh computer do-do products ki keemat check karta hai. Saste product ko upar
     aur mehnge ko neeche lane ke liye lakhon baar Swapping hoti hai.

2. String Reverse / Letters ki Ginti (Character Count):
   - Concept: Shabd ko ulta karna ya kaun sa letter kitni baar aaya hai, yeh ginna.
   - WhatsApp Auto-Correct: Jab aap galti se "teh" likhte hain, toh keyboard
     letters check karke usse "the" bana deta hai.
   - Plagiarism Checker (Copy-Paste Pakadna): Colleges aur blogs mein check
     karne ke liye ki kisi ne copy-paste toh nahi kiya, computer words ki ginti
     (frequency) aur sequence hi match karta hai.


      Nested Loop (Loop ke andar Loop)
1) for ke andar for:- Jab dono (bahar aur andar) ki ginti pehle se pata ho.
for (let i = 1; i <= 2; i++) {         // Bahar wala
  for (let j = 1; j <= 3; j++) {       // Andar wala
    console.log(i + " - " + j);
  }
}
2) while loop:- while ke andar while Jab dono jagah sirf condition par kaam karna ho.
let i = 1;
while (i <= 2) {
  let j = 1; // Yaad rakhein: Andar wale ko har baar reset karna padta hai
  while (j <= 3) {
    console.log(i + " - " + j);
    j++;
  }
  i++;
}

3) do-while ke andar do-while:
let i = 1;
do {
  let j = 1;
  do {
    console.log(i + " - " + j);
    j++;
  } while (j <= 3);
  i++;
} while (i <= 2);

 Mix Combination (for ke andar while — Real Life Example)
 Example: Jaise 3 classes hain (for loop kyunki ginti pata hai),
 aur har class mein jab tak bachche aate rahein (while loop kyunki ginti pata nahi),
  unki attendance lagao.

  for (let classNo = 1; classNo <= 3; classNo++) {
  let studentsPresent = true;
  while (studentsPresent) {
    console.log("Class " + classNo + " ki attendance lag rahi hai");
    studentsPresent = false; // Kaam khatam hote hi band
  }
}

notes:-while aur do-while Nested Loop Ki Ek Khaas Baat
or loop mein let j = 1 apne aap har baar shuru se start hota hai.
Lekin while aur do-while mein aapko andar wale variable (let j = 1)
ko bahar wale loop ke andar likhna padta hai, taaki har naye round mein j wapas 1 se shuru ho.


    MODERN Loops (for...of aur for...in)

     ====================================================================================================
                        MASTER CHEAT-SHEET: DATA TYPES VS LOOPS & FUNCTIONS
====================================================================================================

+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| Data Type         | Normal for | for...of | for...in | .forEach() | .map() | .filter() | .reduce |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| Array   []        |    HAAN    |   HAAN   |  HAAN**  |    HAAN    |  HAAN  |   HAAN    |  HAAN   |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| String  ""        |    HAAN    |   HAAN   |  HAAN**  |    NAHI    |  NAHI  |   NAHI    |  NAHI   |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| Object  {}        |    NAHI    |  NAHI*   |   HAAN   |    NAHI    |  NAHI  |   NAHI    |  NAHI   |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| Set     new Set() |    NAHI    |   HAAN   |   NAHI   |    HAAN    |  NAHI  |   NAHI    |  NAHI   |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

| Map     new Map() |    NAHI    |   HAAN   |   NAHI   |    HAAN    |  NAHI  |   NAHI    |  NAHI   |
+-------------------+------------+----------+----------+------------+--------+-----------+---------+

*Notes:
- Object par for...of chalane ke liye: Object.entries(obj) lagana padta hai.
- Array/String par for...in chalane par seedha value nahi, index (0, 1, 2) milta hai.

----------------------------------------------------------------------------------------------------
                             KAUN KYA RETURN KARTA HAI? (QUICK MEMORY)
----------------------------------------------------------------------------------------------------

1. Kuch Return NAHI Karte (Sirf kaam/print karte hain):
   - for, while, do-while
   - for...of, for...in
   - .forEach()  --> Hamesha 'undefined' deta hai.

2. Naya Array Return Karte Hain (Original data safe rehta hai):
   - .map()      --> Same length ka naya array (data modify karne ke liye).
   - .filter()   --> Chhota ya barabar naya array (items chhaantne ke liye).


3. Ek Single Value Return Karta Hai:
   - .reduce()   --> Sabko jod kar ek final answer (jaise Total Bill,avrage,max age,catg grouping,vote counting) or many to one.

example
   const shoppingCart = [
  { item: "Mobile Cover", price: 300, qty: 2 },
  { item: "Earphones", price: 1200, qty: 1 },
  { item: "Charger", price: 800, qty: 1 }
];

// Total bill nikalne ke liye reduce() ka use: accumulator== blank daba ,currentItem price item
const totalBill = shoppingCart.reduce((accumulator, currentItem) => {
  return accumulator + (currentItem.price * currentItem.qty);
}, 0);

console.log(totalBill); // Output: 2600
 or    with for loop
   const notes =;

let dabba = 0; // Yahi aapka 'accumulator' hai

for (let i = 0; i < notes.length; i++) {
  dabba = dabba + notes[i]; // Purane dabbe mein naya note jod kar wapas dabbe mein rakha
}

console.log(dabba); // Output: 80

Method Chaining
• Matlab: Ek ke baad ek functions ko dot (.) lagakar jodna (Assembly line ki tarah).
• Golden Rule: Chaining tabhi chalti hai jab pichla function wapas ek Array, Object, String, ya Promise return kare.
• Arrays: .filter(), .map(), .sort(), .slice(), .flat()
• Strings: .trim(), .toLowerCase(), .replace(), .split()
• Promises (API): fetch().then().then().catch()


----------------------------------------------------------------------------------------------------
                          JUGAD (TRICK): KISI BHI DATA KO ARRAY KAISE BANAYEIN?
----------------------------------------------------------------------------------------------------

Agar String, Set, Map, ya Object par .map() ya .filter() chalana ho:

- String se Array :  [..."HELLO"]          --> ['H', 'E', 'L', 'L', 'O']
- Set se Array    :  [...mySet]          --> [1, 2, 3]
- Map se Array    :  [...myMap]          --> [['a', 1], ['b', 2]]
- Object se Array :  Object.entries(obj) --> [['name', 'Rahul'], ['age', 25]]

4) Infinite Loop (Kabhi Na Rukne Wala Loop)
5) Two-Pointer Technique (Ek Hi Loop Mein Do Jagah Se Chalna):
• Simple Matlab: Ek hi loop ke andar do variables rakhna—ek shuruat (left) se chalta hai aur ek aakhir (right) se.
• Kahan Use Hota Hai: Kisi word ko check karne ke liye ki woh ulta-seedha ek jaisa hai ya nahi (Palindrome, jaise "MADAM"),
 ya list ko tezi se reverse karne ke liye.
 let word = "MADAM";
let left = 0;
let right = word.length - 1;

while (left < right) {
  console.log(word[left] + " aur " + word[right] + " match ho rahe hain");
  left++;   // Aage badho
  right--;  // Peeche aao
}
 real example:

. WhatsApp / Instagram Photo Gallery (Swiping & Zooming)

• Kaise kaam karta hai: Jab aap ek album mein 10 photos dekh rahe hote hain aur pehli photo (left = 0) aur aakhiri photo (right = 9) ke beech fast swipe karte hain, ya kisi list ko ulta (Reverse) karte hain.
• Example: Jaise ek table par 10 kitaabein rakhi hain aur aapko unhe ulta lagana hai—aap ek haath (left) se pehli kitaab aur doosre haath (right) se aakhiri kitaab utha kar dono ki jagah badal dete hain. Ek hi baar mein 2 kitaabein set ho jati hain (kaam aadhe time mein poora!).
