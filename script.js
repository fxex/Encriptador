const texto = document.getElementById("texto")
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const encriptado = document.getElementById("encriptado");
const noTexto = document.getElementById("noTexto");
const copiar = document.getElementById("copiar");

let desencriptador = (exp, letra, palabra)=>{
    let reg = new RegExp(exp, "g");
    return palabra.replace(reg, letra);
}

encriptar.addEventListener("click",()=>{
    let palabra = texto.value;
    let arreglo = Array.from(palabra)
    let textoEncriptado ="";
    arreglo.map((letra)=>{
        switch(letra){
            case "a":
                letra = "ai";
                break;
            case "e":
                letra = "enter";
                break;
            case "i":
                letra = "imes";
                break;
            case "o":
                letra = "ober";
                break;
            case "u":
                letra = "ufat";
                break;
            default:
                break;
        }
        textoEncriptado += letra
    });

    encriptado.firstElementChild.textContent = textoEncriptado;
    encriptado.classList.remove("invisible")
    noTexto.classList.add("invisible")
    
});

desencriptar.addEventListener("click",()=>{
    let palabra = texto.value;
    let textoDecodificado = palabra;
    textoDecodificado = desencriptador(/ai/g,"a",textoDecodificado);
    textoDecodificado = desencriptador(/enter/g,"e",textoDecodificado);
    textoDecodificado = desencriptador(/imes/g,"i",textoDecodificado);
    textoDecodificado = desencriptador(/ober/g,"o",textoDecodificado);
    textoDecodificado = desencriptador(/ufat/g,"u",textoDecodificado);
    console.log(textoDecodificado);
    encriptado.firstElementChild.textContent = textoDecodificado;
    encriptado.classList.remove("invisible")
    noTexto.classList.add("invisible")
})
copiar.addEventListener("click", ()=>{
    let palabra = encriptado.firstElementChild.textContent;
    navigator.clipboard.writeText(palabra)
})