var respostaVazia = document.querySelector('.resposta-vazia')
var respostaPreenchida = document.querySelector('.resposta-preenchida')
const mensagem = document.querySelector('#entradaMensagem');

var botaoCriptografar = document.querySelector('.criptografar')
var botaoDescriptografar = document.querySelector('.descriptografar')
var botaoCopiar = document.querySelector('.botao-copia')

var entradaMensagem = document.querySelector('#texto')
var textoCodificado = document.querySelector('.texto-codificado')


function mostrarResposta() {
  
  if (entradaMensagem.value !== '') {
    respostaVazia.style.display = 'none'
    respostaPreenchida.style.display = 'block'
  }
}


function criptografar() {

  var conteudoTextarea = entradaMensagem.value
  var resultadoCriptografado = conteudoTextarea
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat")

  textoCodificado.innerHTML = resultadoCriptografado;

  mostrarResposta()
}

function tudoMinusculo(string) {

  let resultado = string.value.toLowerCase();
  string.value = resultado;
}

function descriptografar() {

  conteudoTextarea = entradaMensagem.value

  var resultadoDescriptografado = conteudoTextarea
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")

  textoCodificado.innerHTML = resultadoDescriptografado

  mostrarResposta()
}


function copiaTexto() {

  textoCodificado.select() 
  document.execCommand('copy')
}


botaoCriptografar.onclick = criptografar
botaoDescriptografar.onclick = descriptografar
botaoCopiar.onclick = copiaTexto
