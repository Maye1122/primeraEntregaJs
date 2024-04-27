		let seguir = true;
		let sumando = 0;
		let total = 0;
		//Lista de productos

		//Usando la funcion para calcular el precio total del articulo seleccionado
		function calculaPrecio(articulo, cantidad) {

			return articulo.precio * cantidad
		}

		const productosLista = [
			{ numero: 1, nombre: "Manzanas", precio: 60 },
			{ numero: 2, nombre: "Zanahoria", precio: 20 },
			{ numero: 3, nombre: "Arroz", precio: 60 },
			{ numero: 4, nombre: "Arepas", precio: 150 },
			{ numero: 5, nombre: "Cocos", precio: 200 },
		];

		while (seguir) {
			const EligeDeLaLista = parseInt(prompt('Elige un producto de la lista ingresando un número!\n 1: Manzanas: $60 c/u \n 2: Zanahoria: $20 c/u \n 3: Arroz: $60 c/u \n 4: Arepas: $150 c/u \n 5: Cocos: $200 c/u'));
			//Encontrando el producto


			const productoEncontrado = productosLista.find(p => p.numero === EligeDeLaLista);
			//Aplicando un condicional

			//Condicionales
			if (productoEncontrado) {
				alert('Elegiste ' + productoEncontrado.nombre + ' precio por unidad $' + productoEncontrado.precio);

				const cantidadSolicitada = parseInt(prompt('Elige la cantidad que quieres comprar'));
				const resultado = calculaPrecio(productoEncontrado, cantidadSolicitada)

				total += resultado;

				alert(`El total de ${productoEncontrado.nombre} es = $${resultado}`)

				seguir = confirm('Quieres seguir comprando?')


			} else if (isNaN(productoEncontrado) || productoEncontrado <= 0 || productoEncontrado == null) {
				alert('por favor ingresa un valor de la lista');
				continue;

			}
		}

		alert(`Gracias por tu compra!. \n El total a pagar es $${total}.`);


