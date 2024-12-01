
// NewPromise 1

// const NewPromise= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async 1");
//         resolve()
//     }, 1000)
    
// })

// NewPromise.then(()=>{
//     console.log("task completed 1")
// })

// // NewPromise 2

// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log("Async2");
//         resolve();
//     }, 1000);
//     resolve()
// }).then(function(){
//     console.log("Task Completed 2");
// })


// New Promise 3

// const NewPromise = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("Async3");
//         resolve({"Name":"Deepak", age:28})
//     }, 1000);
    
// })

// NewPromise.then(function(user) {
//     console.log(user);
// })

// New Promise 4

const NewPromise = new Promise(function(resolve,reject){
       setTimeout(() => {
          let error=false;
          if (!error) {
            console.log("Async4");
          }
          else{
            console.log("ERROR");
          }
       }, 1000);

})

NewPromise.then((user)=>{
     console.log(user);
})




