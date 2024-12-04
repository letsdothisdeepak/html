const bar = document.getElementById('main-list');
const hammer= document.getElementById('ham');
const CrossButton= document.getElementById('cross');
const ShopCartIcon= document.getElementById('cart-icon-mobile');
const Home= document.querySelector('.home');

if(hammer){ 
    hammer.addEventListener('click',() => {
        bar.classList.add('active');
        bar.style.cssText="margin-left:-850px"
        ShopCartIcon.style.cssText="display:none"
        
        
        // console.log("Hello");
    })
}

if(CrossButton){
    CrossButton.addEventListener('click',()=>{
        bar.style.cssText="margin-left:150px";
    })
}




// hammer.addEventListener('click',()=>{
//     console.log("Hello");
// })