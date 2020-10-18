let socket = io();
//Escuchar informacion (on)
socket.on("connect", () => {
	console.log("contectado al servidor");
});

//si se pierde la comunicacion con el servidor
socket.on("disconnect", () => {
	console.log("perdimos conexion con el servidor");
});

//Enviar información (emit)
socket.emit(
	"enviarMensaje",
	{
		usuario: "Alejandro",
		mensaje: "Hola Gente",
	},
	resp => {
		console.log("respuesta server: ", resp);
	}
);

//Escuchar el servidor
//enviarMensaje es el nombre que pusimos del lado del cliente
socket.on("enviarMensaje", mensaje => {
	console.log("Servidor: ", mensaje);
});
