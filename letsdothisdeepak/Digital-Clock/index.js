

let clock= document.getElementById('clock')

setInterval(function digitalClock() {
    let myDate= new Date();
    clock.textContent= myDate.toLocaleTimeString()
    
})