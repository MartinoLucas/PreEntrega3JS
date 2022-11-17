const username = document.querySelector("#inputUsernameAcc"),
password = document.querySelector("#inputPasswordAcc"),
btnIngresar = document.querySelector("#btnIngresar"),
divMsgNotFound = document.querySelector("#msgNotFound"),
checkbox = document.querySelector("#checkboxRecordar");

// Funciones
function login(usuarios){
 let userEncontrado = usuarios.find(usuario =>{
    return usuario.user == username.value && usuario.pass == password.value;
 });

if (userEncontrado) {
    window.location.href="../pages/principal.html";
}else {
    divMsgNotFound.innerHTML=`Usuario no encontrado.`
};

 return userEncontrado;
};

function recuperarLS(){
    return JSON.parse(localStorage.getItem("usuarios"));
};

const usuariosLS = recuperarLS();

function limpiarCampos(){
    username.value = "";
    password.value = "";
}

// Listener
btnIngresar.addEventListener("click", (e)=>{
    login(usuariosLS);
    limpiarCampos();
});