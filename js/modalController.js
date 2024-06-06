let miModal = document.getElementById('resultModal');

let cerrarModalBtn = document.getElementById('cerrarModal');

cerrarModalBtn.addEventListener('click', () => {
    miModal.style.display = 'none';
    let divResult = document.getElementById("result");

    let nodos = divResult.querySelectorAll("div");

    eliminarNodos(nodos);
});


function eliminarNodos(array){
    console.log("hola mundo");
    let divResult = document.getElementById("result");
    array.forEach(element => {
        divResult.removeChild(element);
    });
}
/*
abrirModalBtn.addEventListener('click', () => {
    miModal.style.display = 'block';
});
const abrirModalBtn = document.getElementById('readyButton');


*/