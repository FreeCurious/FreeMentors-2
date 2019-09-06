var mainav= document.getElementById('mainav');
window.onscroll = function(){
    if(window.pageYOffset >100){

        mainav.style.background = "#002255ff";
    }
    else{
        mainav.style.background = "transparent";
    }
}