$(document).ready(function() {
	$('.spisok-3-item-br').click(function(){
	var x = document.getElementById("value").value; // создаём переменную для вычесленний
	x++; //добавляем к переменной "X" 1
	if (x > 10) {
		x = 10 ;
	}
	document.getElementById("value").value = x;
	var y = document.getElementById('total').value;
	y = +11000;
	document.getElementById("total").innerHTML = y;
	})

	$('.spisok-3-item-bl').click(function(){
	var x = document.getElementById("value").value; // создаём переменную для вычесленний
	x--; //отнимаем от переменной "X" 1
	if (x <= 0) {
		x = 0 ;
	}
	document.getElementById("value").value = x;
	var y = document.getElementById('total').value;
	y = -11000;
	document.getElementById("total").innerHTML = y;
	})

	if (total > 10000) {
		document.getElementById("total").innerHTML = "5" ; //если "total" превышает 10000 то скидка = 5%
	}
});