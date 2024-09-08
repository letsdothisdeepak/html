// Objects

const MyKey= Symbol('MyKey1')

const MyObj={
    name:"Deepak",
    age:28,
    "city":"Ranchi",
    [MyKey]:"MyKey1",
    phone: 9031443935
}
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj.city);
// console.log(myObj["city"]);

MyObj.name="Kumar"
console.log(MyObj);

// Object.freeze(MyObj); 
// This will not let any changes happen in the keys and the calues of the object.

MyObj.name="KJHG"
console.log(MyObj);

MyObj.greeting = function () {
         console.log(`Hello ${this.name} how are you?`);  
}

console.log(MyObj.greeting());


