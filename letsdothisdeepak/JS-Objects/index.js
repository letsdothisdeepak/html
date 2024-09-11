// // Objects

// const MyKey= Symbol('MyKey1')

// const MyObj={
//     name:"Deepak",
//     age:28,
//     "city":"Ranchi",
//     [MyKey]:"MyKey1",
//     phone: 9031443935
// }
// // console.log(myObj);
// // console.log(myObj.name);
// // console.log(myObj.city);
// // console.log(myObj["city"]);

// MyObj.name="Kumar"
// console.log(MyObj);

// // Object.freeze(MyObj); 
// // This will not let any changes happen in the keys and the calues of the object.

// MyObj.name="KJHG"
// console.log(MyObj);

// MyObj.greeting = function () {
//          console.log(`Hello ${this.name} how are you?`);  
// }

// // console.log(MyObj.greeting());

// const {name} = MyObj
// console.log(name);

// max= 40;
// min=20;

// console.log((Math.floor(Math.random()*(max-min)))+min);


const Obj1 ={
      name:"Deepak",
      age: 27,
      Obj2:{
        fullname:"Deepak_Kumar",
        age:34,
        Obj3:{
            city:"Ranchi",
            "country":"India"
        }
        
        }
      }   


console.log(Obj1.Obj2.Obj3.country);

