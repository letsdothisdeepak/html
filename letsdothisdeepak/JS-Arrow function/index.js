

// let Deepak =(num1,num2) =>
//     { return num1*num2*10};

// console.log(Deepak(2,4));

// function MyNumber(params) {
//     for (let i=1; i<=100; i++)
//         console.log(i);
    
// }

// MyNumber()

const MySym = Symbol("Deepak")

switch (MySym) {
    case ["Deepak"]:
        console.log("Yes this is my Symbol");
        break;
    case ["Rahul"]:
        console.log("No this is not my Symbol");
        break;    

    default:
        break;
}