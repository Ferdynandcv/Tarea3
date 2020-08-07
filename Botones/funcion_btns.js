
function fecha() {

	document.getElementById("Btn1").addEventListener('click', displayDate);
	function displayDate() {
		document.getElementById("result").innerHTML = Date();
	}
}


function eventos_bt() {

	var x = document.getElementById("Btn2");
	x.addEventListener("mouseover", myFunction);
	x.addEventListener("click", mySecondFunction);
	x.addEventListener("mouseout", myThirdFunction);
	x.addEventListener("dblclick", limpiar);

	function myFunction() {
		document.getElementById("result").innerHTML += "<br>pasaste el raton por el boton!<br><br>";
	}

	function mySecondFunction() {
		document.getElementById("result").innerHTML += "<br>hiciste click en el boton!<br><br>";
	}

	function myThirdFunction() {
		document.getElementById("result").innerHTML += "<br>salis del boton!<br><br>";
	}
	function limpiar() {
		document.getElementById("result").innerHTML = "<br>Limpiaste, haciendo doble click!<br><br>";
	}

}

function mult() {addEventListener


	document.getElementById("Btn3").addEventListener("click", function () {

		var n1 = prompt("Dime un numero");
		var n2 = prompt("Dime otro numero");

		mult(n1, n2);

	});



	function mult(a, b) {

		var res = (a * b);
	
		document.getElementById("result").innerHTML = res;

}


}

function lanzador() {
	
	fecha();
	eventos_bt();
	mult();
}




window.onload = lanzador;

