const name = 'NaN'

if (name) {                                       // complier assume have value 
    console.log('user have');
}
else {
    console.log('not have user');
}

//falsy values

false, 0, undefined, -0, BigInt 0n, '', NaN, null
// anther datatype have truthy value// like [],{},true,1, '0','-1','false','undefined','null','nan'," ";

// array check with o

const list = [];
const Objects = {};

//check array 

if (list.length == 0) {
    console.log("empty arry");
}


//check object in condtions 

if (Object.keys(Objects).length == 0) {
    console.log("obj ");
}

if (false == 0) {
    console.log('its will entred and its mean its return true');
}

if (false == '') {
    console.log('its will entred and its mean its return true');
}

if ('' == 0) {
    console.log('its will entred and its mean its return true');
}

if (true == 1) {
    console.log('its will entred and its mean its return true');
}


//operators
// Assignmnets: >,<,>=,<=,==,===,!==
// Condtionals:= &&, ||, != 

//nullish coalescing opeartors(??): work only on null,undefined and its help of fallback or save error from backend data api if data have null
//  or undefined then it will be pass or next value or functions

let check = 23

check = 78 ?? 56;

console.log(check);


let checks = 23

checks = null ?? 56;

console.log(checks);

test = null ?? 56;

console.log(test);


let checks1 = 23

checks1 = null ?? undefined ?? heloo();

console.log(checks1);

function heloo() {
    console.log('hooo');

}
//null coalesing operatores ?? 

//ternary syntx

condtion ? true : false

2 === '2' ? console.log('yes') : console.log('no');

