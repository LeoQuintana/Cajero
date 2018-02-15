$(document).ready(function () {
	var users = {
		leo: 1111111111,
		conleo: 1212,
	}
	var datos = {
		cuenta: '',
		clave: '',
	}
	var cambio = {
		clave: 1212,
		cambio: '',
		confirmacion: '',
	}

	$('#cancelar').on('click', function (e) {
		e.preventDefault();
		location= "inicioo.html";
	})

	$('#aceptar').on('click',  function (e) {
		e.preventDefault()
		datos.cuenta = $('#cuenta').val()
		datos.clave = $('#clave').val()
	})
	$('#aceptar').on('click', function (e) {
		e.preventDefault();
		if (datos.cuenta == users.leo && datos.clave == users.conleo) {
			alert("Bienvendo Leo")
			location= 'pantalla1.html';
		} else {
			alert("Numero de cuenta o clave incorrecta");
		}
	})

	// cambio de clave
	
	$('#form-cambio').on('submit', function (e) {
		e.preventDefault();
		cambio.clave = $('#actual').val()
		cambio.cambio = $('#cambio').val()
		cambio.confirmacion = $('#confirmacion').val();
		console.log(cambio);
	})
	$('#form-cambio').on('submit', function (e) {
		e.preventDefault();
		if (users.conleo == cambio.clave && cambio.cambio == cambio.confirmacion) {
			$('#clave').val('');
			alert("cambio de clave exitosa")
			alert("nueva clave: " + cambio.cambio)
		} else {
			alert("Clave actual o confirmacion incorrecta")
		}
	})
})
