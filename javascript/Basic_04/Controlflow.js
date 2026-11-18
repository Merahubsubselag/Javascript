//0) if
if (false) console.log('hi'); // this is implist scope and no need to {} these.

if (true) console.log('testline1'),
    console.log('testline2')
    , console.log('testline4'); // these are lines have under in singles lines and using , this but this bad partices in js.


let Total = 18;
if (Total >= 18) {
    console.log("You Are Passed.");
}

//1) if else

//waja: Agar condition sahi hui toh if block chalega, galat hui toh else. CPU dono check nahi karta, jisse time bachta hai.

let age = 18;
if (age >= 18) {
    console.log("Aap vote de sakte hain.");
} else {
    console.log("Aap abhi vote nahi de sakte.");
}

//2 if else if  use for handle multiple condtions, and multiple ranges
// Yeh  nested if (ek ke andar ek if) ke gande design ko saaf karne ke liye aaya. 
// Isme CPU upar se neeche tab tak check karta hai jab tak use pehli sahi condition nahi mil jaati. 
// Jaise hi sahi condition mili, baaki ka poora code skip ho jata ha

let marks = 85;
if (marks >= 200) {
    console.log("Grade: A");
}
else if (marks >= 100) {
    console.log("Grade: B"); // CPU yahan aakar ruk jayega, neeche nahi jayega
}
else if (marks >= 80) {
    console.log("Grade: c"); // CPU yahan aakar ruk jayega, neeche nahi jayega
} else {
    console.log("Grade: C");
}
//3) switch
// ek variable ki exact values check karni hon 
// (jaise 4-5 se zyada string ya number options), aur koi range (> ya <) check na karni ho


// • Wajah: Yeh background mein Jump Table banata hai.
//  CPU line se saare options check nahi karta; wo seedha sahi waale case par direct jump kar jata hai,
//   jisse code super-fast chalta hai. (Bas har case ke baad break lagana zaroori hai, warna code neeche beh jata hai!)


mode = 'dark'
switch (mode) {
    case "light":
        console.log("White background");
        break;

    case "dark":
        console.log("dark background");
        break;

    default:
        console.log("no background");
        break;
}

//4) Ternary Operator (? :)

let status = (age >= 18) ? "Adult" : "Minor";