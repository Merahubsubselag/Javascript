    "use strict"; // treat all js code as new version
    //alert we are not use in browser , we are use node js 

    
//Datatypes in js


//call by value and call by refernce:-

// mean how story the data in the memory and how to get the data from memory .
// In these behalf of datatype divied into two part primitive and non primitive

//primitive: its is call by value means its copy the value not give the address of the data.

// Primitive chote data ke liye fast hai. Lekin bade data (Objects/Arrays) ke mamle me, poore data ko baar-baar copy karne se hazar guna zyada fast hota hai sirf uske Address (Reference) ke saath khelna. 
// Isiliye Reference type memory aur speed dono bachata hai.

// • Primitive (Call by Value) me: Asli DATA copy hota hai (jaise poori book ki photocopy).
// • Reference Type me: Data ka ADDRESS (Pata) copy hota hai (jaise ghar ki ek aur chaabi ya link). and inka type of objectes he aata hai

// $$$$$$$$$$$$$ funcation name v as variable he store hota hai es leye ous name mai address he stored hota hai heap wale data ka or yhe heap wala data function ka maal hota hai

Number =56
BigInt=8888888888n
String=""
Boolean =true
heloo=undefined
temp=null
Symbol;

const id=Symbol(234)
const ids=Symbol(234)
console.log(id==ids);
//its always give different  or unique id for tag that called symbol


console.log(typeof ob)

// refrenece type or non prmitive es mai memory mai dierct refernec loact kiya ja sakta hai es leye refrenece type v bolte hai
//Array,Object,function

const arr=['car','bike','cycyle'];
const ob={car:'new',bike:'old',cycle:'56',islog:true,
    city:{cityname:'chd',
    citycolour:'red'},
playcar: function car(){console.log("hii")}}
console.log(typeof ob)


let hello =
function ()
{console.log("varifunction")}


console.log(typeof hello) // its called function object

hello();

