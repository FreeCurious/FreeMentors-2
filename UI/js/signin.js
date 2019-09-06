function roleTransition(){
    var radioValue = document.loger.role.value;
    if (radioValue.checked === 0){
        window.location.assign('../html/Userlogged.html');
    } else if(radioValue.checked === 1){
        window.location.assign('../html/Guidelogged.html');
    } else if(radioValue.checked === 2){
        window.location.assign('../html/AdmLogged.html');
    } else{
        window.alert("Choose your role");
    }

}