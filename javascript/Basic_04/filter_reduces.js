const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 120,
        inStock: true,
        rating: 4.5,
        tags: ["audio", "wireless", "bluetooth"]
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 85,
        inStock: true,
        rating: 4.2,
        tags: ["sports", "running", "outdoor"]
    },
    {
        id: 3,
        name: "Coffee Maker",
        category: "Kitchen",
        price: 60,
        inStock: false,
        rating: 4.7,
        tags: ["appliance", "coffee", "home"]
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 150,
        inStock: true,
        rating: 4.8,
        tags: ["gaming", "office", "tech"]
    },
    {
        id: 5,
        name: "Yoga Mat",
        category: "Fitness",
        price: 30,
        inStock: false,
        rating: 4.0,
        tags: ["fitness", "home", "exercise"]
    }
];

// let pp=[]
// products.forEach(element => 
//     {
//    pp= products[element.category=='Electronics'];

// });
//    console.log(pp);  // not work

//  let mm= products.forEach(elemt => 
//     {
//   return  products[elemt.category];
//    });

//    console.log(mm);

// let newarray=[];

//     let mm= products.forEach(elemt =>
//     {
//     // newarray.push(elemt.category=='Electronics')

//      if(elemt.category=='Electronics' && elemt.price<150)
//      {
//         newarray.push(elemt)
//     }
//     })

//map 
// Data Extract Karna ==> let names = products.map(x => x.name);
// Data Update Karna ==> let newPrices = products.map(x => ({ ...x, price: x.price + 20 }));
// UI / HTML Banana ==> products.map(x => `<li>${x.name}</li>`);

// filter()
//. Condition ke hisaab se Data Dhoondhna (Filtering)// let availableProducts = products.filter(x => x.inStock === true);
//let searchResult = products.filter(x => x.name.includes("Headphones"));
//3. Kisi Item ko Delete Karna (soft Remove from Array): let remainingProducts = products.filter(x => x.id !== 3);



//filter help to reduce code with using own loops,newarray return,
console.log(products.filter(x => x.category == 'Electronics' && x.price <= 150));

products.map(x => {
    if (x.category == 'Electronics') {
        x.price = 230;
    }
})


console.log(products);

// console.log(newarray);

// best another way and fast for this

//x=> return x. // single paramenter funcion.
//console.log(products.map(x=> x.category=='Electronics' && x.price<150));








