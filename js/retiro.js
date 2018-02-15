var dinero = {
	total: parseInt(localStorage.getItem('dinero')),
 	veinte: function (men) {
		alert("se han retirado 20.000 de su cuenta");
		this.total -= men;
		localStorage.setItem('dinero', this.total);
		alert('total: ' + this.total);
	}, 
	cinco: function (men) {
		alert("se han retirado 5.000 de su cuenta");
		this.total -= men;
		localStorage.setItem('dinero', this.total);
		alert('total: ' + this.total);
	},
	cincuenta: function (men) {
		alert("se han retirado 50.000 de su cuenta");
		this.total -= men;
		localStorage.setItem('dinero', this.total);
		alert('total: ' + this.total);
	},
	cien: function (men) {
		alert("se han retirado 100.000 de su cuenta");
		this.total -= men;
		localStorage.setItem('dinero', this.total);
		alert('total: ' + this.total);
	},
	volver: function () {
		location.href= "pantalla2.html"
	}
}   

