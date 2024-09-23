

arr=["Deepak","Rahul","Shivam"]

for (const Myarr of arr) {

    // console.log(`The array values are: ${Myarr}`);
    
}

const Deepak = "Deepak"

for (const Deep of Deepak) {
        //    console.log(`The characters are: ${Deep}`);   
    
}

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); 
contacts.get("Hilary"); 
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); 
// contacts.delete("Raymond"); 
// contacts.delete("Jessie"); 
// console.log(contacts.size);

// console.log(contacts);

const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

const removedItems = fruits.splice(0,4,"Deepak","Sunny","Vikcy");
// console.log(fruits);
// ["Apple", "Banana"]
// console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]


const fruit = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

const removedItem = fruits.slice(0,4,"Deepak","Sunny","Vikcy");
// console.log(fruits);
// ["Apple", "Banana"]
// console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]



// console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// // [4, 2, 3, 4, 5]

// console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]




