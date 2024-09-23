


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
// console.log(arr0);

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

//   c = books.filter( (bk)=> bk.genre==='History')
//   console.log(c);
const d= books.filter((bk) => bk.publish>=1995 && bk.genre=='History')
// console.log(d);

const arr1=[1,2,3,4,5]

const arr1_10= arr1.map((num)=> num+10);
// console.log(arr1);
// console.log(arr1_10);

const arr1_5= arr1.forEach(function (num1) {
    console.log(num1+5);
    
})
// console.log(arr1_5);
