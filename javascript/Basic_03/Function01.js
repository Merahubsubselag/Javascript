// function is set of instrcution or collection which i want used in the at same time or multiplr time.
function first() {
    console.log("hi");
    console.log("user");
    console.log("welcome");
    console.log("this");
    console.log("world");
}
//first();

// paramenterused paramenetr used

function paramenterused(user) // this is paramneter
{
    console.log(`welcome this word my ${user}`);

}
paramenterused('mohan') // this is argyment

// set defult parrmenter value if dont want error risk


function defultparrmenter(user = 'samma') {
    console.log(`welcome this word my ${user}`);

}

defultparrmenter('rahon')

// retun used


function sum(num1, num2) {
    //   let total= 
    //   return total
    // anther way

    return num1 + num2;  // this is return value
}

console.log(sum(2, 7))

// js some value asummed like true or false like '' or undifiend== false but it is work as false but not excute lines if its used so use this like !
//  this is work  on false value undefined assume '' and unefined false so we use !user mewans user ke pass false or value nhi hai ab chale ga

//  if dont know how many paramenter will pass in function the used ..rest opeator

function unlimitiedparameter(...num) // its ... means unfolder data will return 
{
    return (`this is values ${num}`);

}

console.log(unlimitiedparameter(89, 56, 78));

// object pass throuh functions and get value

const profile = { name: 'samkaran', class: 'private', contatno: 78656464, arrived: false }

function checkuser(profiledata) {
    console.log(`welcome this world ${profiledata.name} and now this is your class status is = ${profiledata.class}`);

}
//checkuser(profile)
//another wayy pass object as arugemnt

checkuser({ name: 'samkaran', class: 'private', contatno: 78656464, arrived: false })


// array pass throuh functions and get value


const Arrayprofile = ['samkaran', 'private', 78656464, false]

function Arraycheckuser(Arrayprofile) {
    console.log(`welcome this array world ${Arrayprofile[0]} and now this is your class status is = ${Arrayprofile[1]}`);
}

// Arraycheckuser(Arrayprofile)

// anther way pass
Arraycheckuser(['samkaran', 'private', 78656464, false])



// function scope and global scope

let a = 3;
function blockscope() {
    let a = 23;
    console.log('inner value', a);

}
blockscope();
console.log('outer scope', a);

vs

let b = 3;  // this is global scope
console.log('first scope', b);
Anotherblockscope();
function Anotherblockscope() {
    b = 23;                     // this is function scope
    console.log('inner value', b); //{} this block scope

}
console.log('outer scope', b);

// nested function scope

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

// ********* Interesting for differnet type tp delcare function **********

console.log(demo());
function demo() {
    return 'hii'
}



//console.log(demoaonther()); //  Cannot access 'demoaonther' before initialization


const demoaonther = function () {  // that is called expression functions which is delcare as var.
    return 4 + 4
}

console.log(demoaonther);

