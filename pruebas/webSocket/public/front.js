let username = localStorage.getItem("username");
if (!username) {
  username = prompt("Inserte el Usuario");
  sessionStorage.setItem("username", username);
}

document.getElementById("username").innerHTML = username;

const socket = io();

const btn = document.getElementById("btn");
btn.onclick = () => {
  let txt = document.getElementById("mensaje").value;

  txt = `[${username}]: ${txt}`;

  socket.emit(socket.emit("notificacion", txt));
}

const div = document.getElementById('mensajes')
socket.on('mensaje', data => {
    div.innerHTML = div.innerHTML + '<br>' + data

})