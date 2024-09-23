


arr1=[1,2,3,4,5]

const myTotal=arr1.reduce(function(acc,currval){
        //   console.log(`acc: ${acc} and currval: ${currval}`);
          return acc + currval;
},0)
// console.log(myTotal);

const myTotal2= arr1.reduce( (acc,currval)=> {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},0)
// console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotal3= shoppingCart.reduce( (acc,curvalue)=> {
        return acc + curvalue.price
    
},0)

console.log(myTotal3);




