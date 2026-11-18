================================================================================
JAVASCRIPT OPERATORS COMPLETE CHEAT SHEET (GROUPED BY USAGE & MODERN ES6+)
================================================================================

Yeh guide JavaScript ke sabhi operators ko unke real-world use ke hisaab se group
karti hai. Har operator ke saath uska kaam (definition) aur chhota code example
diya gaya hai.

--------------------------------------------------------------------------------
GROUP 1: DAILY USE & PRODUCTION-LEVEL OPERATORS (SABSE ZYADA IMPORTANT - 90% USE)
--------------------------------------------------------------------------------
In operators ka istemal React, Node.js, aur modern web apps mein rozana hota hai.

1. Strict Equality (===) & Strict Inequality (!==)
   - Kaam: Value aur Data Type dono ko compare karta hai. Hamesha yahi use karein.
   - Example:
     5 === "5"   // false (Number aur String alag hain)
     5 !== "5"   // true

2. Optional Chaining (?.) [Modern ES6+]
   - Kaam: Agar object ke andar koi property missing (null/undefined) ho, toh error
           dene ke bajaye 'undefined' return karta hai. App crash hone se bachata hai.
   - Example:
     const user = { profile: { name: "Amit" } };
     user?.address?.city   // undefined (Bina error ke)

3. Nullish Coalescing (??) [Modern ES6+]
   - Kaam: Sirf tab default value deta hai jab left side 'null' ya 'undefined' ho.
           Yeh 0 aur "" (empty string) ko valid value maanta hai.
   - Example:
     const score = 0;
     score ?? 10           // 0 (|| isko 10 bana deta, jo galat hota)

4. Spread & Rest Operator (...) [Modern ES6+]
   - Kaam: Array ya Object ko copy/merge karne ke liye (Spread) ya multiple arguments
           ko ek array mein ikattha karne ke liye (Rest).
   - Example:
     const arr1 = [1, 2];
     const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

5. Ternary Operator (condition ? trueVal : falseVal)
   - Kaam: Ek line mein chhota if-else likhne ke liye (React UI rendering mein best).
   - Example:
     const age = 20;
     const msg = age >= 18 ? "Adult" : "Minor"; // "Adult"

6. Logical AND (&&)
   - Kaam: Jab dono conditions true hon. React mein conditional rendering ke liye use hota hai.
   - Example:
     const isLoggedIn = true;
     isLoggedIn && console.log("Welcome!"); // "Welcome!" print hoga

7. Logical OR (||)
   - Kaam: Jab koi ek condition true ho, ya falsy values ke liye fallback dene ke liye.
   - Example:
     const username = "" || "Guest"; // "Guest"

8. Logical NOT (!)
   - Kaam: Boolean value (true/false) ko ulta karne ke liye.
   - Example:
     !true       // false
     !!"Hello"   // true (Kisi bhi value ko strict boolean mein badalne ka trick)


--------------------------------------------------------------------------------
GROUP 2: LATEST ES6+ SHORTHAND OPERATORS (MODERN CLEAN CODE)
--------------------------------------------------------------------------------
Yeh naye operators code ko chhota aur readable banane ke liye aaye hain.

1. Nullish Assignment (??=)
   - Kaam: Variable mein tabhi value daalta hai jab woh pehle se null ya undefined ho.
   - Example:
     let theme = null;
     theme ??= "dark"; // theme ab "dark" ho gaya

2. Logical OR Assignment (||=)
   - Kaam: Variable falsy (0, "", false, null) ho tabhi nayi value assign karta hai.
   - Example:
     let title = "";
     title ||= "Untitled"; // title ab "Untitled" ho gaya

3. Logical AND Assignment (&&=)
   - Kaam: Variable pehle se truthy ho tabhi uski value update karta hai.
   - Example:
     let user = "Rahul";
     user &&= "Rahul Sharma"; // user ab "Rahul Sharma" ho gaya

4. Exponentiation Operator (**)
   - Kaam: Power (ghaat) nikalne ke liye (Math.pow ka modern shortcut).
   - Example:
     2 ** 3 // 8 (2 ki power 3)


--------------------------------------------------------------------------------
GROUP 3: BASIC CORE OPERATORS (MATH, COMPARISON & ASSIGNMENT)
--------------------------------------------------------------------------------
Yeh basic programming ke foundational operators hain.

[A] Arithmetic Operators (Math Calculations)
1. Addition (+)          : 10 + 5  -> 15 (Strings ko jodne ke bhi kaam aata hai: "Hi " + "JS")
2. Subtraction (-)       : 10 - 5  -> 5
3. Multiplication (*)    : 10 * 5  -> 50
4. Division (/)          : 10 / 2  -> 5
5. Modulus / Remainder(%): 10 % 3  -> 1 (Sheshfal nikalta hai, Even/Odd check ke liye best)
6. Increment (++)        : let x = 5; x++ -> 6 (1 badhata hai)
7. Decrement (--)        : let x = 5; x-- -> 4 (1 ghatata hai)

[B] Assignment Operators (Value Store/Update Karna)
1. Simple Assign (=)     : let a = 10;
2. Add & Assign (+=)     : a += 5  (a = a + 5)
3. Sub & Assign (-=)     : a -= 5  (a = a - 5)
4. Mul & Assign (*=)     : a *= 2  (a = a * 2)
5. Div & Assign (/=)     : a /= 2  (a = a / 2)

[C] Comparison Operators (Tulna Karna)
1. Greater Than (>)      : 10 > 5  -> true
2. Less Than (<)         : 10 < 5  -> false
3. Greater or Equal (>=) : 10 >= 10 -> true
4. Less or Equal (<=)    : 5 <= 10 -> true
5. Loose Equal (==)      : 5 == "5" -> true (Avoid karein: type check nahi karta)
6. Loose Not Equal (!=)  : 5 != "5" -> false (Avoid karein)


--------------------------------------------------------------------------------
GROUP 4: UTILITY & TYPE OPERATORS (DEBUGGING & OBJECTS KE LIYE)
--------------------------------------------------------------------------------
1. typeof
   - Kaam: Variable ka data type string mein batata hai.
   - Example:
     typeof 42        // "number"
     typeof "Hello"   // "string"

2. Unary Plus (+)
   - Kaam: String number ko turant asli Number mein convert karta hai.
   - Example:
     +"100" + 50      // 150

3. in Operator
   - Kaam: Check karta hai ki koi property kisi object ke andar maujood hai ya nahi.
   - Example:
     const car = { brand: "Tata" };
     "brand" in car   // true

4. instanceof
   - Kaam: Check karta hai ki object kisi specific class ya constructor ka hissa hai ya nahi.
   - Example:
     [1, 2] instanceof Array // true

5. delete
   - Kaam: Object se kisi property ko hatane ke liye.
   - Example:
     const obj = { a: 1, b: 2 };
     delete obj.b;    // obj ab { a: 1 } bacha


--------------------------------------------------------------------------------
GROUP 5: RARE / LOW-LEVEL OPERATORS (WEB DEV MEIN NA के BARABAR USE)
--------------------------------------------------------------------------------
Inhe yaad rakhne ki zaroorat nahi hai; yeh binary digits (0 aur 1) par kaam karte hain.

1. Bitwise AND (&), OR (|), XOR (^), NOT (~)
   - Kaam: Binary bits par math operations (Game engines ya cryptography mein use hota hai).
   - Example: 5 & 1 // 1

2. Bitwise Shift (<<, >>, >>>)
   - Kaam: Binary bits ko left ya right shift karne ke liye.
   - Example: 5 << 1 // 10

3. void
   - Kaam: Kisi expression ko evaluate karke hamesha 'undefined' return karta hai.
   - Example: void(0) // undefined

================================================================================
QUICK REVISION TIP:
Rozana ke 90% kaam ke liye sirf GROUP 1 (===, ?., ??, ..., ? :, &&, ||, !) par
focus karein. Baaki sab apne aap practice ke saath yaad ho jayenge.
================================================================================
