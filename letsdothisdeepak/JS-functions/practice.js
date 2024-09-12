


/*This is a function stored in a variable without function name*/
const x=12;
const Myfun= function () { 
        const x=10
        return x;
}

// console.log(x);

function Deepak (n1,n2) {     /*This is a function with function name */
     return n1*n2;
}

// console.log(Deepak(2,3));




const Arrows = (num1,num2) => {            /*This is Arrow function */
    return Math.pow((num1+num2),2);
}

// console.log(Arrows(2,3));

function DAV(a,b) {

    if(a!=Number){
        console.log("Please enter a correct number")
        return
    }
    return a+b;
    
}
// console.log(DAV(3,3));

function ff (employee) {
    return (`${employee} just logged In`)
}

// console.log(ff("Deepak"));

const Obj7={
    name:"Fiza",
    age:34
}

function multiple(anyobject) {
    return `My name is ${Obj7.name} and age is ${Obj7.age}`
    
}
// console.log(multiple(Obj7));





const arr2=[100,300,400,500]

function arr2_values(AnyArray) {
    // console.log( `The first value of the arr2 is: ${arr2[0]}`)
    return AnyArray[0]
}


console.log(arr2_values(arr2));