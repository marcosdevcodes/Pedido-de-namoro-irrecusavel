// aqui é o codigo do paragrafo oculta e faz aparecer
const meuBotao = document.querySelector(".meuButton");
const mensagemElemento = document.getElementById("mensagem");

meuBotao.addEventListener("click", function () {
  if (mensagemElemento.classList.contains("visivel")) {
    mensagemElemento.classList.remove("visivel");
    meuBotao.textContent = "Sim";
  } else {
    mensagemElemento.classList.add("visivel");
    meuBotao.textContent = "Namoro Aceito";
  }
});
// aqui é o codigo do movimento do butão 
function desvia(t) {
  //t é o this
  var btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(20, 80);
  btn.style.left = geraPosicao(20, 80);
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}
