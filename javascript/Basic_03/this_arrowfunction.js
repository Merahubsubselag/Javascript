//this   <=====  keyword refer current contest or simple this is used for use varible of cureent contest.

console.log(this); // in node engine js always give null oject but in brwser js engine it will give evry fetaures.

const user =
{
    'user id': 'ram101',
    id: 464,
    passed: false,
    name: 'demo',
    getnewid: Symbol('ram101'),
    message: function () {

        return (`${user["user id"]},dear is this your userid`);
    },
    notify: function () {
        console.log(this);

        return 'this is new item of', this.name
        // return 'this is new item of',user.name
    }


}
user.name = 'mohan'

console.log(user.notify());
console.log(user.message());

//summary: this keyword is work with object and its function means this hamesha ek Object ko point karta hai jismein wo function run ho raha hai.

function checkthiskeyword() {
    // console.log(this); 

    var name = 'rahul'
    console.log(this.name); // undefined this hamesha ek Object ko point karta hai jismein wo function run ho raha hai.

}

checkthiskeyword()

// example
global.namee = 'rahul'; // THIS BAD DUE TO PERFORMANCE LESS AND MEORY LEAK
function checkthiskeywordscope() {
    // VAR let,CONT NOT WORK IN NODE
    //var dd=this.namee;

    //console.log(dd); // undefined this hamesha ek Object ko point karta hai jismein wo function run ho raha hai.
    console.log(this.namee);
}
checkthiskeywordscope()


//function always retun function value that;s why ist not Worker


////////////////////////////    this keyword  with array ///////////////////////
const user = { name: "Rahul" };
const actions = ["login", "click", "logout"];

// forEach ke last mein 'user' pass karne se, andar 'this' automatic 'user' ban jata hai
actions.forEach(function (action) {
    console.log(this.name + " did " + action);
}, user);

// Output:
// Rahul did login
// Rahul did click
// Rahul did logout
// (Yahan bhi koi manual loop nahi chalana pada!)

// $$$$$$$$$$$$ this ka use 3 aur main jagahon par hota hai  $$$$$$$$$$$$$$$$$$$

// PENDING BELOW:- 

// 1. Constructor Functions aur Classes mein: Naye objects banane ke liye (Sabse zyada use yahin hota hai).
// 2. DOM Event Listeners mein (Browser mein): Jis HTML element par click hua, use pakadne ke liye.
// 3. Explicit Binding (call, apply, bind) mein: Jab hum zabardasti this ko batate hain ki use kis object ko point karna hai.










// ARROW FUNCTION 


// ec6 featues give arrow function

// expresson function
const neww = function () {
    console.log('expresson function');

}

neww();
// arrow function


const same = () => {                 // syntax ()=>{}
    console.log('arrow function');
}
same()

//Implict retun function which not used return keyword for retun value
const sum1 = (num, num1) => num + num1;
const sum = (num, num1) => (num + num1); //implict retun for single line 

console.log(sum1(4, 7));

// Tips : -  ()= No need return and {}// need retun
//              benifits Of () this for function
//      
//CONST         PASS OBJECT AS RETUEN 
const objpass = (c) => ({ 'name': 'sam' });
console.log(objpass());