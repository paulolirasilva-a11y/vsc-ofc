//cria array 0 1 2 
let frases = ["F1","F2","F3"];
let frasesCopiada = [...frases];
//gera frases
function geradorMensagem(){
    if (frases.length == 0){
        frases = [...frasesCopiada];

    }

    let indiceGerado = Math.floor(Math.random()*(frases.length));
let frasesGerada =frases [frases.length];
console.log (fraseGerada);
document.querySelector("#msg").textContent = farseGerada
frases.splice(indiceGerado,1); 

}