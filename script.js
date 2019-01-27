function range(range){

let slider = ((60*range.value)/100) ;
if(slider < 30){
range.value = 0;
//alert(slider);


}else{
range.value = 100;
//alert(slider);
}


if(slider >= 35){
$(".content").css({"margin-left": "0%", "transition": "0.4s"});
}else if(slider <= 35){
$(".content").css({"margin-left": "-60%", "transition": "0.4s"});
}

}