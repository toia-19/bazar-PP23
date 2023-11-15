/* Clase de USUARIO */
class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

/* Arreglo de USUARIOS y CONTRASEÑAS respetando clase USUARIO */
const usuarios = [
    new Usuario("leonardo@gmail.com", "arandano"),
    new Usuario("maia@gmail.com", "cereza"),
    new Usuario("melina@gmail.com", "naranja"),
    new Usuario("lucas@gmail.com", "melon"),
    new Usuario("victoria@gmail.com", "uva")
];

/* Constantes para obtener EMAIL y CONTRASEÑA ingresados por el usuario */
const email = document.getElementById("email");
const password = document.getElementById("password");

/* Función que valida usuarios existentes */
function validarUsuario(){
    // Declaro usuarioExiste como booleano y en false -> sólo si existe pasa a "true"
    let usuarioExiste = false;

    // Declaro usuarioObtenido en vacío para obtener un valor del tipo "string"
    let usuarioObtenido = '';

    /*
        Función para que recorre el arreglo de usuarios y, junto a dos condicionales, 
        verifica:
        1) Que el email de usuario ingresado exista en el arreglo
        2) Que la contraseña ingresada corresponda a ese usuario
        3) "usuarioExiste" pasa a true
        4) "usuarioObtenido" toma el email del usuario ingresado
    */
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email === email.value && usuarios[i].password === password.value){
            usuarioExiste = true;
            usuarioObtenido = email.value;
            break;
        }else{
            if(usuarios[i].email != email.value && usuarios[i].password === password.value){
                alert("Email o contraseña inválidos.");
                break;
            }else{
                if(usuarios[i].email === email.value && usuarios[i].password != password.value){
                    alert("Contraseña incorrecta.");
                    break;
                }
                else{
                    if(email.value === '' || password.value === ''){
                        alert("Campos vacíos.");
                        break;
                    }
                }
            }
        }
    }

    /*
        Si el usuario existe:
        1) Muestra una alerta éxitosa
        2) Se redirige al usuario a la vista para las cuentas
        3) Setea con, localStorage, el usuario que fue obtenido
    */
    if(usuarioExiste){
        alert("¡Inició sesión correctamente!");
        location.href="/index.html";

        localStorage.setItem("usuario",usuarioObtenido)
    }
}