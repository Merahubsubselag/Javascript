var num=20;
num='number'
let num=80;
const num=88




console.log(typeof foo);
 var foo = 1; 
 function foo() {}

//  In a browser, as a regular <script> (not a module):
  var a = 1; let b = 2; console.log(window.a, window.b);


  //this are vaild:-

  var a; var a; 
  var pp=40; var mm=88
  function a(){}let a;
 function m(){}var m;  

   // let bb;var bb this not accecpt
   //partices need with:--  hey cover closures in loops, Temporal Dead Zone shadowing, 
   // function vs var hoisting, global object behavior, and redeclaration rules.





Task 1: Name Capitalizer (Form Fixer)

Problem: Ek user ne apna naam website par galat tarike se fill kar diya: "rahul". Aapko use standard capital letters mein badalna hai.
• Input: let user = "rahul";
• Socho: Sabhi letters ko CAPITAL karne ke liye kaun sa tool hai?


console.log(user.toUpperCase)




task 2: Faltu Spaces Hatao (Space Cleaner)

Problem: User ne login karte waqt galti se username ke aage aur peeche bohot saare khali spaces daba diye: "   rahul123   ". Agar aapne aise hi check kiya toh login fail ho jayega.
• Input: let input = "   rahul123   ";
• Socho: Aage aur peeche ke faltu white spaces ko saaf karne ke liye kaun sa chhota tool chalayenge?




Question 4: Character Checker (Email Verification)

Problem: Ek user ne apna email fill kiya: "rahul@gmail.com". Aapko programmatically check karna hai ki kya is email ke andar @ symbol maujood hai ya nahi?
• Input: let email = "rahul@gmail.com";
• Socho: Check karne ke liye kaun sa tool quotes aur brackets ke sath lagega?

Task 3 Reminder:
• let line = "JavaScript is fun";
• Aapko check karna hai ki isme "fun" word hai ya nahi (Output true aana chahiye).


Question 5: Small Letters (Lower Case Fixer)

Problem: Ek variable mein kuch text bade letters mein likha hai: "HELLO WORLD". Aapko is poore text ko chote (small) letters mein badalna hai.
• Input: let msg = "HELLO WORLD";
• Socho: CAPITAL se small karne wale tool ka naam kya tha brackets ke sath?
• Expected Output: "hello world"


Question 6: Space Removal (Another Space Cleaner)

Problem: Ek aur user input aaya jisme aage bohot saare spaces hain: "     secret_code". Aapko iske bhi sirf aage ke spaces saaf karne hain. (Aap normal space cleaner bhi use kar sakte hain).
• Input: let code = "     secret_code";
• Socho: Spaces saaf karne ke liye humne kaun sa function padha tha?
• Expected Output: "secret_code"


Question 7: String Coercion Shortcut (Number to String)

Problem: Aapke paas ek pure number hai: let score = 99;. Aapko bina String() function ka use kiye, ek short-cut operator se is number ko string "99" mein badalna hai.
• Input: let score = 99;
• Socho: Number ke peeche kya plus karne se woh string ban jata hai?
• Expected Output: "99" (Type: string)



Question 8: Start Checker (URL Detector)

Problem: Aapko check karna hai ki kya koi website link "https://google.com" securely "https" se shuru ho raha hai ya nahi?
• Input: let url = "https://google.com";
• Socho: Pata karne ke liye ki string kis word se shuru ho rahi hai, kaun sa checking method lagta hai?
• Expected Output: true


Question 9: Unary Plus Magic (String to Number)

Problem: Ek variable mein shopping cart ki price string format mein hai: "250". Aapko bina Number() function likhe, sirf ek single short-cut sign se is string ko pure number 250 mein badalna hai.
• Input: let price = "250";
• Socho: Variable ke bilkul aage kaun sa sign lagane se woh instantly number ban jata hai?

let originalPricee = "1000"; // Yeh user ka data hai
let discount = 200;         // Yeh system ka discount hai
console.log(+originalPricee-discount);

let cashFromCustomer1 = 500;
let cashFromCustomer2 = "250.50";
console.log(cashFromCustomer1+ (+cashFromCustomer2));

let fuelLeft = 14.56789;
console.log(fuelLeft.toPrecision(3)); // toPrecision(3) ka matlab hota hai ki poore number mein se total sirf 3 digits bachein (1, 4, aur 6 round up hokar).


// Hume total digits 3 nahi chahiye the, hume point ke baad (decimal ke baad) 3 digits chahiye the. :- tofxied


console.log(fuelLeft.toFixed(3)); 
