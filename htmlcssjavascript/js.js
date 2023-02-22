let navbar = document.getElementById("navbar");
let navbar1 = document.getElementById("navbar1");

navbar.addEventListener("click",e =>{
    e.preventDefault();
    alert();
});

function alert(){
    navbarValue = navbar1.value.trim();

    if(navbarValue === ''){
        setAlert(navbar1,'please enter your name!');
    }else{
        setSuccess(navbar1)
    }
    function setAlert(input,msg){
        let inputValue  = input.parentElement;
        let text = inputValue.querySelect("span");
        inputValue.className = ".navbar.error ";
        text.innerText = msg
    }
    function setSuccess(input){
        let inputValue = input.parentElement;
        inputValue.className = '.navbar succes';
    }
}
