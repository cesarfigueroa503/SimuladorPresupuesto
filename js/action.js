
/**
 * Declaracion de variables
 */
//Area Principal donde se selecciona el tiempo que se va a usar el presupuesto
var selectTime = document.getElementById('selectTime');

//Variables para el ingreso de gastos y ingresos
var formIngresos = document.getElementById('Form')
var divIngreso = document.getElementById('ingresos');
var divGastos = document.getElementById('gastos');

var nombreIngreso = document.createElement("input");
var cantidadIngreso = document.createElement("input");

var nombreGastos = document.createElement("input");
var cantidadGastos = document.createElement("input");

//Declaracion y obtencion de los botones para agregar y quitar inputs
var addIngresoButton = document.getElementById("addButton1");
var addGastoButton = document.getElementById("addButton2");
var popButton1 = document.getElementById("popButton1");
var popButton2 = document.getElementById("popButton2");

//Obtencion del botton para simular
var simularButton = document.getElementById("Simular")


/**
 * Eventos para los botones
 */
//evento para agregar un nuevo Ingreso y gasto
addIngresoButton.addEventListener("click", agregarIngreso);
addGastoButton.addEventListener("click", agregarGasto); 

//evento para quitar elementos ya sea de gastos o ingresos
popButton1.addEventListener("click", quitarElemento);
popButton2.addEventListener("click", quitarElemento);

//Evento que inicia la simulacion
simularButton.addEventListener("click", Simular);



/**
 * Asigancion, creacion y modificacion de 
 * elementos del DOM
 */
//Apartado de los formularios para los ingresos
nombreIngreso.placeholder = "Nombre";
cantidadIngreso.placeholder = "Monto $";
nombreIngreso.type = "text";
cantidadIngreso.type = "number";

//Apartado de los formularios para los gastos
nombreGastos.placeholder = "Nombre";
cantidadGastos.placeholder = "% del ingreso";
nombreGastos.type = "text";
cantidadGastos.type = "number";


divIngreso.appendChild(nombreIngreso);
divIngreso.appendChild(cantidadIngreso);

divGastos.appendChild(nombreGastos);
divGastos.appendChild(cantidadGastos);

/**
 * Funciones que responde a los eventos de los botones
 */
//Funcion dedicada a almacenar el tiempo que se quiere para el presupuesto
function Simular(){
    //Obtener las variables de tiempo
    let tiempo;
    let ingresos=0;
    let gastosNombre = []; 
    let gastosPorcentaje =[];

    let selectInput = document.getElementById(selectTime);
    if(selectInput == "1"){
        tiempo = 1;
    }
    if(selectInput == "2"){
        tiempo = 7;
    }
    if(selectInput == "3"){
        tiempo=30
    }
    if(selectInput == "4"){
        tiempo=365;
    }

    //sumamos todos los ingresos
    /**
     * 
    */
    
    let ingresosArray = divIngreso.querySelectorAll('input[type="number"]');
    for (let index = 0; index < ingresosArray.length; index++) {
        ingresos = ingresos + parseInt(ingresosArray[index].value);
        
    }
    //console.log(ingresos);

    //Apartado para los gastos, aqui se manejaran porcentajes
    let gastosArray = divGastos.querySelectorAll("input");
    
    for (let index = 0; index < gastosArray.length; index++) {
        if(index%2 == 0){
            gastosNombre.push(gastosArray[index].value);
        }if(index%2 != 0){
            console.log(gastosArray[index].value);
            gastosPorcentaje.push(gastosArray[index].value);  
        }
    }

    console.log(gastosPorcentaje);
    console.log(gastosNombre);

    let gastosMonto;
    
    for (let index = 0; index < gastosNombre.length; index++) {
        let x = parseFloat(gastosPorcentaje[index])/100;
        gastosMonto = x*ingresos;

        value = gastosMonto;

        const dollar = currencyFormatter({
            currency: "USD",
            value
          })
        
          console.log(dollar);
        const element = document.createElement('div');
        const texto = document.createElement('p');
        texto.textContent = `${gastosNombre[index]}-->${dollar}`;
        
        let destino = document.getElementById("result");
        element.appendChild(texto);
        destino.appendChild(element);
        destino.appendChild(document.createElement("br"))
    }
    let miModal = document.getElementById('resultModal');
    miModal.style.display = 'block';
    



}


//Estas fuanciones agrega elementos input dentro de un div
function agregarIngreso(){
    let nuevoIngreo = document.createElement("input");
    let nuevoMonto = document.createElement("input");
    
    nuevoIngreo.placeholder = "Nombre";
    nuevoMonto.placeholder = "Monto $";
    nuevoIngreo.type = "text";
    nuevoMonto.type = "number";
    divIngreso.appendChild(document.createElement("br"));
    divIngreso.appendChild(nuevoIngreo);
    divIngreso.appendChild(nuevoMonto);
}

function agregarGasto(){
    let nuevoGasto = document.createElement("input");
    let nuevoMonto = document.createElement("input");
    
    nuevoGasto.placeholder = "Nombre";
    nuevoMonto.placeholder = "% del ingreso";
    nuevoGasto.type = "text";
    nuevoMonto.type = "number";
    divGastos.appendChild(document.createElement("br"));
    divGastos.appendChild(nuevoGasto);
    divGastos.appendChild(nuevoMonto);

}

//Esta Funsiones se encargan de quitar un elemneto
function quitarElemento(e){
    //console.log(e.target.dataset.info);
    let value = e.target.dataset.info;

    if(value=="1"){
        let elemetos = divIngreso.querySelectorAll("input")
        //console.log(elemetos);

        let elemneto1 = elemetos[elemetos.length-1]
        let elemneto2 = elemetos[elemetos.length-2]

        divIngreso.removeChild(elemneto1);
        divIngreso.removeChild(elemneto2);
        

    }if(value == "2"){
        let elemetos = divGastos.querySelectorAll("input")
        console.log(elemetos);

        let elemneto1 = elemetos[elemetos.length-1]
        let elemneto2 = elemetos[elemetos.length-2]

        divGastos.removeChild(elemneto1);
        divGastos.removeChild(elemneto2);
    }else{
        return 0;
    }
}


function currencyFormatter({ currency , value}) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency
    }) 
    return formatter.format(value)
  }