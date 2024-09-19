

// function fun() {
//     let para= document.getElementById('para1');
//     para.textContent='This is my first js program'
// }

// let para= document.getElementById('para1');
// para.addEventListener('click',fun);
// para.removeEventListener('click',fun);

// let para =document.getElementById('para1')

// para.addEventListener('click',function Deepak(MyEvent) {
//     MyEvent.preventDefault();
//     para.textContent='CLick is done';
    

// })


// let ele= document.querySelector('h1')

// ele.innerHTML= "This is me"
// ele.textContent= "This is me 1"
// // ele.innerText="This is me2"

// let ele1= document.createElement('h3')
// ele1.textContent= "This is h3"

// let ele2= document.querySelector('p')

// ele2.appendChild(ele1)

let ele= document.querySelector('ul')
let ele1= document.createElement('li')
ele1.textContent= 'This is an extra li'

ele.insertAdjacentElement('beforeend',ele1)


// ele.removeChild(ele1)
// ele.remove(ele)

ele.style.cssText=('background-color:red; padding:50px; color:yellow;')

ele.setAttribute('class', 'deepak')
ele.setAttribute('style', 'background-color:blue')

ele.classList.remove('deepak-1')
ele.classList.toggle('deepak-1')
ele.classList.toggle('deepak-1')

ele.addEventListener('click',function Deepak(e) {
    
    console.log("this is a click event");
    
})