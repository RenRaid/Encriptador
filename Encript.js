
//CODIGO PARA EJECUTAR UN ENCRIPTADOR


const Input = document.querySelector("#Text_Input"); // Referencia el area de texto para encriptar/desencriptar en la constante input
const Result = document.querySelector("#Text_Result"); // Referencia el area de texto para para mostarr el resultado en la constante Result

const erase = document.getElementById('erase_btn'); //Referencia el boton de copiar hacia la constante erase
const copy = document.getElementById('copy_btn') ; // Referencia el boton de copiar hacia la constante copy

const encry = document.getElementById('encry'); // Referencia el boton de encriptar hacia la constante encry
const decry = document.getElementById('decry'); // Referencia el boton de desencriptar hacia la constante decry

const modal_container = document.getElementById('modal_container'); //Referencia la divsion de la pop up hacia la constante modal_container
const modal_close = document.getElementById('modal_close_btn'); //Referencia el boton de cerrar del modal hacia la constante modal_close

const waitingImg=document.getElementById('imgwm'); // referencia la imagen de inicio en el area de reslutado del texto hacia la constante waitingimg
const nomsg= document.getElementById('nomsg'); // referencia la imagen de inicio en el area de reslutado del texto hacia la constante waitingimg

const closeimg=document.getElementById('imgclose'); // referencia la imagen de candado cerrado hacia la constante closeimg
const openimg=document.getElementById('imgopen'); // referencia la imagen de candado abiertp hacia la constante openimg

let indx1 // variable utilizada para definir encriptacion/desencriptacion
let indx2 // variable utilizada para definir encriptacion/desencriptacion
const matriz_code = // arreglos que encriptan/desencriptan
[
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];


// Esta funcion define si el texto se encriptara o levanta una ventana emergente se llama al clickear Encriptar/Desencriptar

function btnEncriptar(in1,in2){
    indx1 =in1;  // 0= encriptar, 1 = desencriptar
    indx2 =in2;  // 0= encriptar, 1 = desencriptar
    const texto = contieneAcentoMayus(Input.value); //se llama a la funcion que define si hay mayusculas o acentos 
        if(texto == true){  
            modal_container.classList.add('show'); // aca se configura la clase para mostrar la  ventana emergente de alerta
        }
        else{
            Result.value = encriptar(Input.value) ; //se llama la funcion para encriptar texto
            copy.style.display = 'inline-block'; // se habilita el boton de copiar resultado
            waitingImg.style.display='none'; // se esconde imagen de inicio en area de resultado
            nomsg.style.display='none'; // se esconde mensaje de texto  de inicio en area de resultado
            closeimg.style.display='none'; // se esconde imagen de candado cerrado activado previamente
            openimg.style.display='none'; // se esconde imagen de candado activado previamente activado previamente
            switch(in1){ // se verifica accion ( encriptar o desencriptar)
             case 0:    //si es encriptar se muestra la imagen de candado cerrado en el area de resultado
                closeimg.style.display='inline-block';
                closeimg.style.position='absolute';
                break;
            case 1: //si es desencriptar se muestra la imagen de candado abierto en el area de resultado
                openimg.style.display='inline-block';
                openimg.style.position='absolute';
           }
        }
    }


function contieneAcentoMayus(text) // esta funcion evalua si el texto posee mayusculas o acentos( retorna un "true" si existen / un "false" si no existen)
{
    const acentoRegex = /[áéíóúÁÉÍÓÚ]/; // contante para acentos
    const mayusculaRegex = /[A-Z]/; // constante para mayusculas
  
    return acentoRegex.test(text) || mayusculaRegex.test(text); // evalua las constantes
}
    
function encriptar(frase) // esta funcion encripta/desencripta el texto
{
    for (let i=0; i< matriz_code.length; i++) // inicia i en 0, compara i con el tamaño de indices de la matriz, incrementa i
    {
        if(frase.includes(matriz_code[i][indx1])) // frase= texto del area de entrada. aca busca la vocales o vocales encriptadas
        {
            frase=frase.replaceAll(  /// cada vocal o vocal encriptada encontrada es reemplazada en base a la matriz definida
                matriz_code[i][indx1],
                matriz_code[i][indx2])

                // NOTA: el reemplazo dependera  de los valores que se le pasaron a las constantes indx1 e indx2. 
        }
    }    
    return frase;  //retorna el reemplazo
}


// aca se cierra la popup de alerta
modal_close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});


// aca se hace la copia del texto encriptado desde el area de resultado
copy.addEventListener('click', () =>
{
    Result.select();
    document.execCommand('copy')
})

// aca se evalua si existe texto para habilitar o deshabilitar los botones encriptar, desencriptar y borrar

 Input.addEventListener('input', function(){
    const data1 = Input.value.trim();
    if (data1.length >0){
        erase.style.display = 'inline-block';
        decry.disabled = false;
        encry.disabled = false;

    }else{

        erase.style.display = 'none';
        decry.disabled = true;
        encry.disabled = true;
        

    }
 });

 // se configura el boton de borrar para limpiar las areas de texto
 erase.addEventListener('click', function(){
    Input.value="";
    Result.value= "";
    copy.value="";
    erase.style.display = 'none';
    copy.style.display = 'none';
    decry.disabled = true;
    encry.disabled = true;
    waitingImg.style.display='inline-block';
    nomsg.style.display='inline-block';
    closeimg.style.display='none';
    openimg.style.display='none';
    });