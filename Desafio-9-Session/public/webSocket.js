const socket = io()
loadFirstData()

const btnSend = document.getElementById('sendSocket')
btnSend.onclick = (e) => {
        e.preventDefault()
        const userEmail = document.getElementById('userEmail').value
        const message = document.getElementById('message').value
        socket.emit('chat-in', {userEmail, message})
    }

socket.on('chat-out', data => {
    addDataToDiv(data)
})

// Muestra en la pagina un solo mensaje
function addDataToDiv(data) {
    const div = document.getElementById('chat')
    div.innerHTML += `<br>[${data.date}] <b>${data.userEmail}</b>: <i>${data.message}</i>`
}


// Recupera todos los mensajes a la pagina
function loadDataToDiv(data) {
    console.log(data);
    data.forEach(d => addDataToDiv(d))
}


// Para cargar la data por primera vez
function loadFirstData() {
    fetch('/data')
        .then(data => data.json())
        .then(d => {
            loadDataToDiv(d.data)
        })
        .catch(e => alert(e))
}