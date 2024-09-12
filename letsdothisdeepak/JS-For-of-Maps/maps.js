


const MyMap= new Map()

MyMap.set('name','Deepak')
// MyMap.set('age',28)

// console.log(MyMap);

for (const [key,value] of MyMap) {
    // console.log(key,value);
}


const Arr2= [1,2,3,4,5,6,7,8,9,10]

const Arrfilter =Arr2.filter( (num)=>{
      return num>3
})

// console.log(Arrfilter); 

const Arr3=[]

    Arr2.forEach( (num) =>{
    if(num>3){
    Arr3.push(num)
    }
})

// console.log(Arr3);


const arr0=[]
     const Myarr0= Arr2.forEach( (num)=>{
        if(num%2==0){
       arr0.push(num)
        }
})
console.log(arr0);

