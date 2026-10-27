// -----------------------------------Basic comparsions ------------------------
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);


// -----------------------------------Advance comparsions ------------------------
1)
console.log("2">2);
console.log('02'>2);

2)
console.log(null>0); // yha js null ke value ko 0 bna deta hai jab greater than and less than use ho
console.log(null==0);  // yha to waise he false hoga
console.log(null>=0); // yha > eske waja se conevt hua null to 0 and = ne true karva diya . es leye zero aaya.

3)
// NaN ka matlab hota hai "Not-a-Number" (jo number nahi hai). JavaScript ka ek thumb rule hai: NaN kisi bhi cheez ke barabar ya chota-bada nahi hota, yahan tak ki woh apne khud ke barabar bhi nahi hota!
// Jab aap NaN ke saath comparisons ya equality check karte hain:
// • Comparisons (>, <, >=, <=) \(\rightarrow \) Yeh sab false denge.
	console.log(NaN > 0);   // false
	console.log(NaN >= 0);  // false
	console.log(NaN <= 0); 
    console.log(NaN == ''); // false 
    console.log(NaN == 0); // false
    console.log(NaN == NaN); // false

    4)

    console.log(undefined > 0);   // false
	console.log(undefined >= 0);  // false
	console.log(undefined <= 0); 
    console.log(undefined == ''); // false 
    console.log(undefined == 0); // false
    console.log(undefined == NaN); // false

    5) 
    //STRICK CEHCK :- === yhe value ke sath datatype b check karta hai best and proof condtions

    console.log("2"===2);
    
    console.log(2===2);
    
    




