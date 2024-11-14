let mostrarData = document.getElementById('data');

let obtenerData = localStorage.getItem('data');
mostrarData.innerHTML = obtenerData;