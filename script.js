var dubai_swiper = document.getElementById("dubai_swiper");
var dubai = document.getElementById("dubai");
var dubai_swiper_clicked = false;
dubai_swiper.onclick = function(){
    if(dubai_swiper_clicked == true){
        dubai.style.left = "60%";
        dubai_swiper.innerHTML = "⟨";
        dubai_swiper_clicked = false;
    }
    else{
        dubai.style.left = "0";
        dubai_swiper.innerHTML = "⟩"
        dubai_swiper_clicked = true;
    }
}
