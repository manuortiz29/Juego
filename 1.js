
	function adivinar() {
		let random = Math.floor(Math.random() * 11)
		let intentos=0
	
	
		let numero = prompt('Adivina el numero, del 1 al 10')
	
		while(numero != random && intentos <= 3){
			if (random < numero){
				alert ('El numero es menor')
			} else {
				alert('El numero es mayor')
			}
		
			intentos++
			numero = prompt('Intenta nuevamente')
		}
		if (intentos <=3){
			alert ('Estas en lo correcto')
		} else {
			alert ('Has perdido, el numero correccto es: '+ random)
		}
	}

	function adivinar1() {
		let random = Math.floor(Math.random() * 51)
		let intentos=0
	
	
		let numero = prompt('Adivina el numero, del 1 al 50')
	
		while(numero != random && intentos <= 3){
			if (random < numero){
				alert ('El numero es menor')
			} else {
				alert('El numero es mayor')
			}
		
			intentos++
			numero = prompt('Intenta nuevamente')
		}
		if (intentos <=3){
			alert ('Estas en lo correcto')
		} else {
			alert ('Has perdido, el numero correccto es: '+ random)
		}
	}

	function adivinar2() {
		let random = Math.floor(Math.random() * 101)
		let intentos=0
	
	
		let numero = prompt('Adivina el numero, del 1 al 100')
	
		while(numero != random && intentos <= 3){
			if (random < numero){
				alert ('El numero es menor')
			} else {
				alert('El numero es mayor')
			}
		
			intentos++
			numero = prompt('Intenta nuevamente')
		}
		if (intentos <=3){
			alert ('Estas en lo correcto')
		} else {
			alert ('Has perdido, el numero correccto es: '+ random)
		}
	}
