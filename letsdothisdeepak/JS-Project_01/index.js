

let Buttons= document.querySelectorAll('.button')
console.log(Buttons);
let Body= document.querySelector('body')

Buttons.forEach(function (button) {
    button.addEventListener('click',function (e) {
        if (e.target.id === 'grey') {
            Body.style.backgroundColor="grey";
            }
        if (e.target.id === 'blue') {
            Body.style.backgroundColor="blue";
            }    
        if (e.target.id === 'white') {
            Body.style.backgroundColor="white";
            }
        if (e.target.id === 'yellow') {
            Body.style.backgroundColor="yellow";
            }        
        if (e.target.id === 'red') {
            Body.style.cssText="background-color:red; margin:30px"
            ;
            }            
    })
} 
    
);