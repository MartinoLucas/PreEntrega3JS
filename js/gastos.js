// QuerySelectors
const btnAgregar = document.querySelector("#btnAgregar"),
inputNombre = document.querySelector("#inputGasto"),
tipoDato = document.querySelector("#tipoDato"),
importe = document.querySelector("#inputImporte"),
tableBody = document.querySelector("#tableBody"),
msgErrorGst = document.querySelector("#msgErrorGst"),
btnTotal = document.querySelector("#btnTotal");

let gastos;
// JSON.parse(localStorage.getItem("usuarios")) ? (usuarios = JSON.parse(localStorage.getItem("usuarios"))) : (usuarios = [])
if (JSON.parse(localStorage.getItem("gastos"))) {
    gastos = JSON.parse(localStorage.getItem("gastos"));
} else {
    gastos = [];
};

// FUNCIONES
function cargarGasto(obj){
    gastos.push(obj);
};

function guardarLS(arr){
        localStorage.setItem("gastos", JSON.stringify(arr));
};

function errorMsgHTML(){
    if(inputNombre.value == "" && tipoDato.value == "" && importe.value == ""){
        divMsg.innerHTML="¡Todos los campos deben completarse!";
    };
};

function recuperarLS(key){
    return JSON.parse(localStorage.getItem(key));
};

function limpiarCampos(){
    inputNombre.value = "";
    tipoDato.value = "";
    importe.value = ""
};

function cuadroHTML(arr){
    tableBody.innerHTML = "";

     let html = "";
     for (const item of arr) {
        html = `<tr>
                 <td>${item.nombre}</td>
                 <td>${item.tipo}</td>
                 <td>${item.importe}</td>
                 <td><button class="btn btn-primary bg-danger text-white border-danger" id="${item.nombre}">Borrar</button></td>
             </tr>`;
        tableBody.innerHTML += html;
    };
};

class Gasto {
    constructor(nomGst, tipGst, importGst) {
        this.nombre = nomGst,
        this.tipo = tipGst,
        this.importe = importGst;
    }
};

// EJECUTO FunCTIONS
guardarLS(gastos);
cuadroHTML(gastos);

// Listeners
const arrayBotones = document.querySelectorAll('td .btn');
  arrayBotones.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      gastos = gastos.filter(el => el.nombre != btn.id);
      guardarLS(gastos);
      cuadroHTML(gastos);
    })
  });

btnAgregar.addEventListener("click", (e)=>{
    e.preventDefault();

    const newGasto = new Gasto(inputNombre.value, tipoDato.value, importe.value)

    cargarGasto(newGasto);
    errorMsgHTML();
    guardarLS(gastos);
    cuadroHTML(gastos);
    limpiarCampos();
});

btnTotal.addEventListener("click", (e)=>{
    e.preventDefault()

    
})






// function mensajeComer(num){
//     console.log("El valor de tu gasto de comercialización es de $" + num);
// };
// function mensajeAdmin(num){
//     console.log("El valor de tu gasto de administración es de $" + num);
// };
// function mensajeError(){
//     console.log("¡Valor invalido!");
// };

// function tituloCuadro(){
//     console.log("Los Gastos del último período son los siguientes:")
// }

// function mensajeTotalGastos(valor){
//     console.log(`El total de tus gastos es de $${valor}`)
// };

// function mensajeGastosGrandes(valor){
//     console.log(`¡Cuidado! Tienes un total de $${valor} en gastos mayores a $10.000`);
// };

// function mapeoGastos(arr){
//     const mapeo = arr.map((el)=> el);
//     mapeo.forEach((num)=>{console.log(`Gasto = $${num}`)})
// };

// function crearCuadroDeGastos(){

//     let numGastos = prompt("Ingrese la cantidad de gastos a ordenar:"); 
    
//     let tiposGasto = [];
//     let valoresGasto = [];

//     let listaGastos = [tiposGasto, valoresGasto];

//     tituloCuadro();

//     for(let i = 1; i <= numGastos; i++){
//         listaGastos[0].unshift(prompt("Ingrese el tipo de gasto(comercialización/ administración):"))
//         if(listaGastos[0][0] == "comercializacion" || listaGastos[0][0] == "comercialización"){
//             listaGastos[1].unshift(parseInt(prompt("Ingrese el valor del gasto:")));
//             mensajeComer(listaGastos[1][0]);
//         } 
//         else if (listaGastos[0][0] == "administracion" || listaGastos[0][0] == "administración"){
//             listaGastos[1].unshift(parseInt(prompt("Ingrese el valor del gasto:")));
//             mensajeAdmin(listaGastos[1][0]);
//         } 
//         else {
//             mensajeError();
//             continue;
//         };
//     };

//     const totalGastos = listaGastos[1].reduce((acc, el)=>acc + el, 0);
//     mensajeTotalGastos(totalGastos);

//     const gastosGrandes = listaGastos[1].filter((el)=>el > 10000);
//     const totalGastosGrandes = gastosGrandes.reduce((acc, el)=> acc + el, 0);
//     if(gastosGrandes.length >= 1){
//         mensajeGastosGrandes(totalGastosGrandes);
//         mapeoGastos(gastosGrandes);
//     };
// };