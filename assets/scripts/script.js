$(document).ready(function() {
	var y = document.getElementById('total').value;
	var c = 200;
	var x = document.getElementById("value").value;
	//var u = document.querySelector('#check');
	let linii = [
		{
			line:"#-1"
		},
		{
			line:"#-2"
		},
		{
			line:"#-3"
		},
		{
			line:"#-4"
		},
		{
			line:"#-5"
		},
		{
			line:"#-6"
		},
		{
			line:"#-7"
		}
	];

			for (let i = 0; linii.length > i; i++) {
				if (document.getElementById("" + linii[i].line + "").checked) {
					alert('asf');
					y = +y + +c;
					document.getElementById("total").value = y;
					if (y < 0) {
						y = 0;
						document.getElementById("total").value = y;
					}
					$('.spisok-3-item-br').click(function(){
						x++; //добавляем к переменной "X" 1
						if (x > 10) {
							x = 10 ;
						}
						document.getElementById("value").value = x;
						y = +y + +c;
						if (x < 10) {
							document.getElementById("total").value = y;
						}
					})
				} else {
					y = y - c;
					document.getElementById("total").value = y;
					$('.spisok-3-item-bl').click(function(){
						x--; //отнимаем от переменной "X" 1
						if (x <= 0) {
							x = 0 ;
						}
						document.getElementById("value").value = x;
						y = y - c;
						if (x > 0) {
							document.getElementById("total").value = y;
						}
					})
				}
			};
	

	if ( y > 1000) {
		document.getElementById("total").value = 5 ; //если "total" превышает 10000 то скидка = 5%
	}
	//u.onclick = function() {
	//	if (u.checked) {
	//		y = +y + +c;
	//		document.getElementById("total").value = y;
	//	} else {
	//		y = y - c;
	//		document.getElementById("total").value = y;
	//	}
	//}
});