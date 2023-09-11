//a variavel meuBotao armazena a class do .meuButton que vem 
//do html da class do butao
const meuBotao = document.querySelector(".meuButton");

//a variavel mensagemElemento armazena o id do paragrafo mensagem
const mensagemElemento = document.getElementById("mensagem");

//a variavel meuBotao pega o evento click que vem do butao
//se clicado a variavel mensagemElemento adiciona class visivel que
// esta  do css com o display:block; para aparecer o texto dentro 
//da caixa 
meuBotao.addEventListener("click", function () {
  //mensagemElemento.classList.add("visivel");

//ja o if quando for acionado o butao com a mensagemElemento que 
// a variavel ele vai trocar o texto do butao de [ SIM para Namoro Aceito ]
  if (mensagemElemento.classList.contains("visivel")) {
    mensagemElemento.classList.remove("visivel");
    meuBotao.textContent = 'Sim';
    //return (meuBotao.textContent = "Namoro Aceito");
   // meuBotao.textContent = "Sim";
  }else{
    //mensagemElemento.classList.remove("visivel");
    mensagemElemento.classList.add("visivel");
    meuBotao.textContent = "Namoro Aceito";
}
});

function desvia(t) {
  //t é o this
  var btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);

  console.log("Desviado kkkkk...");
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}

// const vaiNamora = document.querySelector(".meuButton")
// const vaiAparecer = document.getElementById("mensagen")

// vaiNamora.addEventListener('click', function(){
//     vaiAparecer.textContent = 'Oba, Não há palavras suficientes para expressar a alegria que sinto por você ter aceitado namorar comigo. Sua aceitação aqueceu meu coração de uma maneira única, e estou muito grato por ter você ao meu lado. '
// })
