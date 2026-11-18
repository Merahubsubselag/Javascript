//Global Scope: Jo variables kisi bhi function ke baahar hote hain. Inhe poore code me kahin se bhi use kiya ja sakta hai.


//Block Scope (let / const): Jo kisi {} (if-else ya loop) ke andar banta hai aur us bracket ke baahar kaam nahi karta.
if (true) {
    const name = 'rahul'

    if (name === 'rahul') {
        const sample = (`heloo my dear ${name}`);
        console.log(sample);

    }
    //console.log(sample); first error

}
console.log(name); // second

// function scope:-

//Function / Local Scope: Jo variable kisi function ke andar banta hai. Wo function ke khatam hote hi mar jata hai.

function one() {
    const a = 'welcome';  // inner to outer value get

    function two() {
        const b = 'hello'
        console.log(a, 'Inner b value is', b);

    }
    // console.log('outer b',b); // not work have first error in this b not get
    two();

}
one()

//console.log(demoaonther()); //  Cannot access 'demoaonther' before initialization


const demoaonther = function () {  // that is called expression functions which is delcare as var.
    return 4 + 4
}

console.log(demoaonther);


// Closure Scope
//Ye wo scope hai jo parent function ke khatam hone ke baad bhi, uske variables ko child function ke liye memory me zinda (load) rakhta hai.

function makeCounter() {
    let count = 0; // Ye 'Closure' scope me chala jayega
    return function child() {
        count++;
    };
}
const counter = makeCounter();

console.dir(counter);

// 
// hum parent return ke aage bracket (); laga dein, toh Closure Scope work nhi kare ga bus result dea ga

function outer() {
    let x = 5;
    return function inner() {
        return x;
    }(); // <== Yahan () laga diya to
}
const result = outer();
