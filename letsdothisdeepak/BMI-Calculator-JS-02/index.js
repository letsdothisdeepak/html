

let form= document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault();
    
    let Weight= parseInt(document.querySelector('#weight').value);
    let Height= parseInt(document.querySelector('#height').value);
    let Results= document.querySelector('#results');
    
    if ( Weight==='' || Weight<=0) {
        Results.innerHTML= "Please enter a valid Weight"
    }
    else if( Height==='' || Height<=0){
     Results.innerHTML= "Please enter a valid Height"
    }
    else{
        let BMI= ((Weight*10000/(Height*Height))).toFixed(2)
        Results.innerHTML= `Your calculated BMI is ${BMI}`
    }
})