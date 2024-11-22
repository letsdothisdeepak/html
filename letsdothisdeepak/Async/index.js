let Name= document.querySelector('h1')

let ChangeName= function () {
    document.querySelector('h1').innerHTML="Deepak Kumar";

    
}

let Color= document.querySelector('button')

Color.addEventListener('click',function (e) {
    let BodyColor= document.querySelector('body')
    BodyColor.style.backgroundColor="green";
})

setInterval(ChangeName,3000);
clearTimeout(ChangeName)


a=2;

console.log(a);
var a;

