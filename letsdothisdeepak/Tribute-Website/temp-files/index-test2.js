// IIFE (Immediately Invoked Function Expression)

// (function chai(name="Vishal") {
//     console.log(`Hello User!, ${name}`);
    
// })();

// ((name)=>{
//     console.log(`Hello User!, ${name}`);
// })("Deepak")

// // IIFE is used to be safe from global pollution, it immediately executes the function

// const Month= "Jan"

// switch (Month) {
//     case "Tuesday": console.log("This is what, I was looking for");
    
//         break;
//     case "Jan": console.log("This is what, I was looking for");
    
//         break;    

//     default: console.log("Nothing");
    
//         break;
// }


// let arr= ["Deepak","Vishal", "Rahul"]

// for (i=0; i<=arr.length; i=i+1){
//     console.log(arr[i]);
    
// }


// let Arr= ["Deepak", 28, "Ranchi"]

// for (const item of Arr) {
//     console.log(item)
    
// }

// let map = new Map()
// map.set('IN','India')
// map.set('US','America')
// map.set('UK','United Kindom')

// for (const [k,v] of map) {
//     console.log(`Key is ${k} and value is ${v}`);
        
// }

// const Obj= {
//     name: "Deepak",
//     city: "Ranchi"
// }

// for (const key in Obj) {
    
//         console.log(`key is ${key} and value is ${Obj[key]}`);
        
//     }

// const Arr= [1,2,3,4,5,6,7,8,9,10]

// const Arr1= []

// const NewArr= Arr.forEach ((item) => {
//     if (item>0){
//         Arr1.push(item + 10)
//     }
// })
// console.log(Arr1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const Ans= books.filter((buk)=>{
   return buk.genre == "Fiction"
    
  })
console.log(Ans);



