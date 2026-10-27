
let date=new Date()
//date.getDay()
// console.log(date);
//console.log(date.toString()); // Sat Oct 24 2026 13:12:25 GMT+0530 (India Standard Time)
//console.log(date.toLocaleString()); //10/24/2026, 1:13:08 PM
//console.log(date.toDateString()); //Sat Oct 24 2026
//console.log(date.toLocaleDateString()); //10/24/2026
//console.log(date.toJSON()); //2026-10-24T07:45:09.373Z
// console.log(date.toISOString());// 026-10-24T07:45:44.978Z
// console.log(typeof date) // date is as  object intreview question
//console.log(date.());// 026-10-24T07:45:44.978Z


let dateanotherway= Date.now();
//console.log(dateanotherway); // but its give in milliseconds from srt 

//let createdate= new Date(2026,4,12)
// let createdate= new Date(2026, 0, 3, 5, 3)
// console.log(createdate);
// console.log(createdate.getTime());//compare always miilli seond but i want into seonds then

// console.log(Math.floor(Date.now()/1000)); // math is used for roundoff becuse its give.value

console.log(date.getMonth()+1); //month is srt from 0

//custmoize format
let mm=date.toLocaleString('default',{
    weekday:'long',day:'numeric'
});

console.log(typeof mm);












