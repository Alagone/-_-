let life = 3;
let secret_number = 10;
/*get_random(1,9);*/
secret_number=get_random(1,9);
document.querySelector(".hint").innerHTML ="Я буду подсказывать"
/*alert(secret_number+" секретное число")*/
document.querySelector(".check").onclick=function(){
	/*alert("10");*/
	let number = document.querySelector("input").value
	document.querySelector("input").value = ""
	document.querySelector("input").focus()
	if (secret_number==number) {
		document.querySelector(".hint").innerHTML ="Вы выиграли.";
		document.querySelector("input").disabled=true
		document.querySelector(".check").disabled=true	
	}
	if (secret_number<number) {
		document.querySelector(".hint").innerHTML ="меньше";
	}
	if (secret_number>number) {
		document.querySelector(".hint").innerHTML ="больше";
	}
	life=life-1
	document.querySelector(".attempts").innerHTML = life
	if (life == 0) {
		document.querySelector(".hint").innerHTML ="Вы проиграли";
		document.querySelector("input").disabled=true
		document.querySelector(".check").disabled=true
	}
}    	
function get_random(min,max){
	return Math.floor (Math.random()*(max-min+1))+min;
}
document.querySelector(".Newgame").onclick=function(){
	life = 3;
	document.querySelector(".attempts").innerHTML = life;
	secret_number=get_random(1,9);
	document.querySelector(".hint").innerHTML ="Я буду подсказывать";
	document.querySelector("input").disabled=false;
	document.querySelector(".check").disabled=false;
	document.querySelector("input").value = "";
}