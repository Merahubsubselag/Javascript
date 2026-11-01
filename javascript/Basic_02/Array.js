const firt=new Array("a","bola","c",true,"heeloo",123,new Array('new array','value')) // its alywas types as object
// console.log( firt[1]); ew Array not need [] brackest its auto convert into this so use=> this ();
//console.log(firt);
const aontherway=['1','2',3,true]
// console.log(aontherway[3]);
// console.log( aontherway);

//methods


//Add value in Array use Push()

aontherway.push("PUSH VALUE")

// console.log( aontherway);



//last value delete in Array use pop()

aontherway.pop() // ITS ALWAYS DELETE LAST VALUE OG ARRAY

// console.log( aontherway); // for check 




//add value  but srt phase in Array use unshift()

let newarray=['red','blue','green']
//newarray.unshift('pink','white')

//console.log(newarray);
// Limitaion is here is that all index value will chnage or shift its good for small array


//remove first value in Array use shift()

newarray.shift()
//console.log(newarray);


// some method is like question means its give respone yhe or no or call say that boolen;

//include work like searching in the Array or find the index with the value 

// console.log(newarray.includes('pink'));

// console.log(newarray.indexOf('blue'));
//console.log( newarray);

//join bascially convert karta hai array to string value with ,
//console.log( newarray.join());

console.log('a',firt);
 

console.log('b', firt.slice(1,3)); //is work like cut function becuse it will effect the orignal array

//splice ()  //is work like cut function becuse it will effect the orignal array
console.log('c', firt.splice(1,3));

console.log('d',firt);

//shallow copy like heap memory and deep copy like stack
//console.log(Object.keys(firt));
//console.log(years["2"] !== years["02"]);





// 2nd part array
// two array merge

const fruit=["appple",'mango','banana'];
const vegrtiables=['tomatao','potato','ladyfinfinger']
fruit.push(vegrtiables)

fruit.push(vegrtiables[1][2]) // use but worng partcies
// console.log('new array',fruit); // this type of worng merage becuse it will add as one item in the array and make value array of arrya


// const fruit=["appple",'mango','banana'];
// const vegrtiables=['tomatao','potato','ladyfinfinger']
// // let totalitems= fruit.concat(vegrtiables)
// // console.log(totalitems);
// // another and short method using spred method

// let totalitems= [...fruit,...vegrtiables]
// console.log(totalitems)

//multipe arrays or arrya of arrya ko kese nikale value

let arr=['1','2','3',['4','5','6'],7,[8,['9','10']]]

console.log(arr.flat(Infinity));

//Data scrapping

//let suppose multipe data aata hai fornt se differnt 
// form even objcts mai chaye sub array becuse loop kar sake

//or v can ask ke array hai yha nni
console.log(Array.isArray("tyt") ); //false
console.log(Array.isArray(arr) ); //true

let num1=12

let num='34'

let num22=false
console.log(Array.from("89")); // esko btana padna hai kesa aarya bana hai like objt pass kiya yha koi datatype pass kiya 
console.log(Array.of(num22,num1,num22,fruit));

// pening is off and from