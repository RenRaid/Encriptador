
//CODIGO PARA EJECUTAR UN ENCRIPTADOR


const Input = document.querySelector("#Text_Input"); // Referencia el area de texto para encriptar/desencriptar en la constante input
const Result = document.querySelector("#Text_Result"); // Referencia el area de texto para para mostarr el resultado en la constante Result
const Copy = document.getElementById('copy_btn') ; // Referencia el boton de copiar hacia la constante copy
const open = document.getElementById('encry'); // Referencia el boton de encriptar hacia la constante copy
const decry = document.getElementById('decry');
const modal_container = document.getElementById('modal_container'); //Referencia la divsion de la pop up hacia la constante modal_container
const close = document.getElementById('close'); //Referencia el boton de cerrar hacia la constante close
const erase = document.getElementById('erase');
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


// Esta funcion define si el texto se encriptara o levanta una ventana emergente

function btnEncriptar(in1,in2){
    indx1 =in1;
    indx2 =in2; 
    //aca se decide si se encripta el texto ose levanta la ventana de alerta 
    const texto = contieneAcentoMayus(Input.value);
        if(texto == true){
                // aca se levanta la popup de alerta
          modal_container.classList.add('show');
            
        }
        else{
            Result.value = encriptar(Input.value) ;
            Copy.style.display = 'inline-block';
            
        }
    }

// aca se cierra la popup de alerta
close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});

// esta funcion encripta/desencripta el texto

function encriptar(frase)
{
    for (let i=0; i< matriz_code.length; i++)
    {
        if(frase.includes(matriz_code[i][indx1]))
        {
            frase=frase.replaceAll(
                matriz_code[i][indx1],
                matriz_code[i][indx2])
        }
    }    

    return frase;

}

// esta funcion evalua si la frase posee mayusculas o acentos( retorna un true/false)

function contieneAcentoMayus(text)
{
    const acentoRegex = /[áéíóúÁÉÍÓÚ]/;
    const mayusculaRegex = /[A-Z]/;
  
    return acentoRegex.test(text) || mayusculaRegex.test(text);
}


// aca se hace la copia del texto encriptado desde el area de resultado
Copy.addEventListener('click', () =>
{
    Result.select();
    document.execCommand('copy')
})

// aca se evalua si el existe texto para habilitar o deshabilitar los botones encriptar, desencriptar y borrar

 Input.addEventListener('input', function(){
    const data1 = Input.value.trim();
    if (data1.length >0){
        erase.style.display = 'inline-block';
        decry.disabled = false;
        open.disabled = false;

    }else{

        erase.style.display = 'none';
        decry.disabled = true;
        open.disabled = true;

    }
 });

 // se configura el boton de borrar para limpiar las areas de texto
 erase.addEventListener('click', function(){
    Input.value="";
    Result.value= "";
    Copy.value="";
    erase.style.display = 'none';
    Copy.style.display = 'none';
    decry.disabled = true;
    open.disabled = true;
    });