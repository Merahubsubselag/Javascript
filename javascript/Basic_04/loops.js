for (let i = 0; i < 10; i++) {
    // const element = i;
    // console.log(element);

}  // cotrol+d duplicate copy
// Table Print

for (let index = 1; index <= 5; index++) {
    console.log(`outer value is ${index}`);
    for (let m = 1; m < 5; m++) {
        //console.log(`inner value is ${m} and outer vlaue is ${index}`);

        //console.log(`${index}*${m}= `,index*m);
        console.log(index, '*', m, '=', index * m);


    }
}

let myarray = ['punjab', 'delhi', 'haryana', 'gujraat', 'Oddisha']
for (let d = 0; d < myarray.length; d++) {
    // const element = myarray[d];
    // console.log(element);

}
// break and continues

let checkbreak;

for (let demo = 0; demo < 5; demo++) {

    if (demo == 2) {
        console.log('number 2 detect now it will break current loop or exit from the loop');
        break

    }
    console.log('demo value is', demo);
}

for (let demo = 0; demo < 5; demo++) {

    if (demo == 2) {
        console.log('number 2 detect now it will skip current condtions and not exit form current loop');
        continue

    }
    console.log('demo value is', demo);
}

let a = 0;
while (a < 4) {
    console.log('this is while');
    a++
}

let pass = '111'
while (pass != '111') {
    console.error('correct password enter');
}

//
let m = 7
do {
    console.log('this is first time value', m);
    m++
} while (m <= 5);

let arr = [];
let total = 0;
let lastvalue = 0
for (let number = 1; number < 10; number++) {
    total = lastvalue + number;

}


arr.push(arr);

for (let DD = 10; DD >= 1; DD--) {
    console.log(DD);
}

for (let DD = 1; DD <= 5; DD++) {
    console.log(DD);
}
let s = 0
while (s <= 50) {
    s = s - 10;
    console.log(s);
}

let p = 50
while (p >= 10) {
    p = p - 10;
    console.log(p);
}

// Special for Array Loop
let Specialarray = ['bus', 7865, true, nw = ['a', 'b', 4], ob = { math: 34, hindi: 78, punjabi: 'fail', science: 'pass' }]
console.log(Specialarray);


for (const element of Specialarray) {
    console.log(element);
}

const Specialstring = ' hello my dost welcome '
for (const t of Specialstring) {
    if (t == '' || t == ' ') {
        continue
    }
    console.log(t);
}


// Map is a data structure like an object that stores data in key-value pairs. 
// The main difference is that keys must be unique (no duplicate keys), though values can be duplicated.


const nn = new Map();

nn.set('math', 78)
    .set('hindi', '98')
    .set('demo', true)
    .set('arr', ['hi', 'hello', 'samsung'])
    .set('demo', true);

//console.log(nn);

for (const [map, value] of nn) {
    //console.log(map);
    //  work with this  [map] =  console.log(map);
    console.log(value);

}

//Notes:-- for of work with array map and string and not work with Objects


let Specialobject = { 'family Name': 'Sita ram', department: 'God', real: true, family: ['Ram ji', 'janki ji', 'laxman ji', 'Hunman ji'] }

//console.log(Specialobject);
// for (const oo of Specialobject) {
//     //console.log(oo); TypeError: Specialobject is not iterable

// }


//so now use for in and map not work with for in
for (const keyy in Specialobject) {
    console.log(keyy, Specialobject[keyy]);
}


let Specialarrayy = ['bus', 7865, true, nw = ['a', 'b', 4], ob = { math: 34, hindi: 78, punjabi: 'fail', science: 'pass' }];

for (const arr in Specialarrayy) {
    // console.log(arr); // its give index of array as key
    console.log('this is key =', arr, 'this is value of array= ', Specialarrayy[arr]);
}

let againnew = new Map;
againnew.set('firstname', 'rahul').set('lastname', "kumar").set('rollno', 947484455).set('pass', true)

//console.log(typeof againnew.get('rollno'));

for (const aga in againnew) {
    // console.log(aga); not work
}

//note map datatype not work with for in only work with array objet and string or not do iteration on map
//note array Object,sring and aary also diecr first give key not value


// for map have another loop  time 21.43
// for each loop
//one way
// againnew.forEach(elements => {   // this is work like arrow function
//     console.log(elements);

// });

// second way this is call back function which have no name 
// againnew.forEach( function hii()
// {
// console.log();

// });

// third way


function printitems(item) {
    console.log(item);

}
againnew.forEach(printitems); // here only give referece as parementer not call (); like this

againnew.forEach((element, index, array) => {
    // we can also use different paramenter as index
    console.log(element, index, array);

});

//wokring with array of objects

const users = [
    { id: 1, name: "Alice", role: "Admin", active: true },
    { id: 2, name: "Bob", role: "Editor", active: false },
    { id: 3, name: "Charlie", role: "Viewer", active: true }
];

users.forEach(elementw => {
    console.log(elementw.role);

});