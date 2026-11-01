// baisc 
// Destructuring is also mostly used in react based
const profile = {
    name: 'rahul',
    Rollno: 12,
    PassWord: '#ytty436',
    passed: true
}
// destruct obj
const { name: fullname } = profile // rename

const { name = 'ram' } = profile // defult value set or update

console.log(profile.name);

//advance or  (Deep Destructuring)

const user = {
    id: 101,
    info: {
        city: 'Delhi',
        pin: 110001
    }
};

const { info: { city, pin } } = user
console.log(city, pin);


//   json intro
// ________________ api intro_______________

// modern days data will flow in api in json formt..
// 1) like array of Object
// 2) nested Object

//sample of josn data

//key always have in string
[
    {
"name":"rahul",
"class":"rollno"
"price":23,
"pass":true
}

    {
"name":"rahul",
"class":"rollno"
"price":23,
"pass":true
}

    {
"name":"rahul",
"class":"rollno"
"price":23,
"pass":true
}
]

//we can check the data of JSON with online compiler which show the data how many arry and obejcts accrd that we can code
// wenistee random user me 