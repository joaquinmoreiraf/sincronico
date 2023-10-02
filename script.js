document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro-form");
    const respuestaDiv = document.getElementById("respuesta");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const datosUsuario = {
            nombre,
            apellido,
            fechaNacimiento
        };

       
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        })
        .then(response => response.json())
        .then(data => {
            respuestaDiv.innerHTML = `Respuesta del servidor:<br>${JSON.stringify(data, null, 2)}`;
        })
        .catch(error => {
            respuestaDiv.innerHTML = `Error: ${error.message}`;
        });
    });
});