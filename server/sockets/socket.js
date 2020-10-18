const { io } = require("../server");

//para que el servidor sepa que estoy conectado
io.on("connection", client => {
	console.log("usuario conectado");

	client.emit("enviarMensaje", {
		usuario: "Administrador",
		mensaje: "Bienvenido a esta aplicación",
	});

	//si se pierde la comunicacion con el servidor
	client.on("disconnect", () => {
		console.log("usuario desconectado");
	});

	//Escuchar el cliente
	//enviarMensaje es el nombre que pusimos del lado del cliente
	client.on("enviarMensaje", (data, callbakc) => {
		console.log(data);

		client.broadcast.emit("enviarMensaje", data);

		// if (mensaje.usuario) {
		// 	callbakc({
		// 		resp: "Todo salio bien",
		// 	});
		// } else {
		// 	callbakc({
		// 		resp: "Todo salio mal!!!!!!!!",
		// 	});
		// }
	});
});
