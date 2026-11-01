//Type of create object

{} // (Object Literal). use karne ka fayda yeh hai ki yeh chota hai, fast hai, aur modern JavaScript ka standard tarika hai.

new Object() // Object() constructor  keese constrcuotr ke thrught banta hai vo singltone ke thra perfom karta hai  likhne ka aaj ke time par koi extra fayda nahi hai.
new Object(null),new Object(undefined)
Object.create()// this is perfom like singlton as consructor.
//Types of objects

// 1. Non-Singleton (By Default): JavaScript mein jab bhi hum {} likhte hain, wo by default ek naya object hota hai (Non-Singleton).
// 2. Singleton (Convert hoke): Jab hum usi naye object ko kisi dusre variable mein assign kar dete hain
//  (const copy = profile), toh koi naya object nahi banta, wahi share hone lagta hai aur wo Singleton ban jata hai.

//EXAMPLE

//   Singleton have only one copy example 
const profile = { name: 'rahul', class: 10 }; 

const copy1 = profile;  //same addres
copy1.name = 'mohit';

console.log(profile); // Output: { name: 'mohit', class: 10 }
console.log(copy1);   // Output: { name: 'mohit', class: 10 }

const copy2 = profile;  ///same addres
copy2.name = 'hii';

console.log(profile); // Output: { name: 'hii', class: 10 } <--- Yeh bhi badal gaya!


T//ypes of method and properties in Object

// 1) Static Methods/Properties: Jo main Object keyword ke sath jude hote hain aur
// 2) instance: • nstance Methods/Properties: Jo aapne khud object {} ke andar likhe hain. 
// Inhe chalane ke liye aapko apne object ka naam likhna padega (Jaise: user1.sayHello()).


//*****************  access way   *****************
const mysymbl= Symbol('mykey')  // special case
const car={maruti:'red',vmw:'black',audi:'white','full name':'rahul',[mysymbl]:'hii'}

//console.log(car.maruti); // old way

//console.log(car['maruti']); //new way in square value always given as string becuse key value in memory as string

//console.log(car['full name']); 
//console.log(car full name);  its will not pick value due to space so sometime data will also come frm api that's why this is good partices

//console.log(car[mysymbl]); // old way

//interview question

//define Symbol, access symbol in object


//methods
car["full name"]='demo'
console.log(car);

//or
car,audi='pink'
console.log(car);

// Object.freeze(car) // freeze the obejct no any update and add

//  car.audi='pela'
//  console.log(car);
 
//Object.seal(car) // seal function not add but update perfom use in edit case

car.audi='pila'
console.log('after seal upadte',car);

car.sex='feamle'
console.log(car);
car.greeting =function(sum)
{
    sum =sum*2
    return(sum);
    
}

car.greeting2 =function()
{
   
    return(`welcome new word ${this.maruti}`); // this is use for object proprties means same object ke propties 
    // ko use karn hoto or pure file mai kitne propties hogi osulo dekhne ke lea this lag jata hai
    
}
console.log(car.greeting2());

// console.log(car.greeting);
// console.log(car.greeting(2));


//--------------- 2nd part--------------

//sample data of nested
const companyData = [
  {
    department: "Engineering",
    teams: [
      {
        teamName: "Frontend",
        lead: "Sarah",
        projects: [
          {
            title: "Dashboard UI",
            status: "Active",
            techStack: ["React", "TypeScript", "Tailwind"]
          },
          {
            title: "Mobile App",
            status: "Planning",
            techStack: ["React Native", "Expo"]
          }
        ]
      },
      {
        teamName: "Backend",
        lead: "David",
        projects: [
          {
            title: "Auth Service",
            status: "Completed",
            techStack: ["Node.js", "Express", "Redis"]
          }
        ]
      }
    ]
  }
];

// acess nested data

console.log(companyData[0].teams[0].projects[1].techStack[1]); //? use for if data not found bit access another file into that
 
const obj1={'a':1,"b":2}
const obj2={'c':4,"d":5}
const obj3={obj1,obj2}
console.log(obj3); // not add but merge into origanal as single item of object

//best way
const obj4 ={...obj1 , ...obj2}
console.log(obj4);

//or 
console.log(Object.assign({},obj1,obj2)); // target={}. sourcse =data

console.log(Object.keys(companyData));

console.log(Object.values(companyData));
console.log(Object.entries(companyData));

// data get karte hai loops ke accroding but data nhi melta but and code crash ho jata es leye es leye function
console.log(companyData.hasOwnProperty("department"));


const sampledata=
[
profile1={name:'rahul',class:7},
profile2={name:'demo',class:8},
profile3={name:'mohan',class:74},
profile4={name:'shona',class:76},
profile5={name:'noni',class:37},
    
]
console.log(sampledata[1].name); // array ke lea[], and. se object ke prop
