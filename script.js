let inputSlider = document.querySelector('#inputslider')
let sliderValue = document.querySelector('#slidervalue')
let passBox = document.querySelector('#passbox')
let lowerCase = document.querySelector('#Lowercase')
let upperCase = document.querySelector('#Uppercase')
let numbers = document.querySelector('#Numbers')
let symbols = document.querySelector('#Symbols')
let genBtn = document.querySelector('#genbtn')
let copyicon=document.querySelector('#copyicon')




inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value

})

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword()

})

let Upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowerchar = "abcdefghijklmnopqrstuvwxyz";
let allsymbols = '~!@#$%^&*';
let numberschar = '0123456789';



function generatePassword() {
    let password = '';
    let allchar = '';


    
    allchar += lowerCase.checked ? Lowerchar : '';
    allchar += upperCase.checked ? Upperchar : '';
    allchar += numbers.checked ? numberschar : '';
    allchar += symbols.checked ? allsymbols : '';
    if (allchar == ''|| allchar.length==0 ) {
       return password
    }

let i=1;
while(i<=inputSlider.value){
 password += allchar.charAt(Math.floor(Math.random() * allchar.length)) ;
 i++;
}

    return password;
}

copyicon.addEventListener('click',() =>{
    if(passBox.value !='' ||passBox.value.length>=1){
    navigator.clipboard.writeText(passBox.value);
    copyicon.title='password_copied!'
}
})