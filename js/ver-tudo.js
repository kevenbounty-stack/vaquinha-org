document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("ver-tudo");
  const curto = document.getElementById("texto-curto");
  const completo = document.getElementById("texto-completo");

  if (!botao || !curto || !completo) return;

  botao.addEventListener("click", () => {
    const estaFechado = completo.style.display === "none" || !completo.style.display;

    if (estaFechado) {
      completo.style.display = "inline";
      curto.style.display = "none";
      botao.textContent = "ver menos";
    } else {
      completo.style.display = "none";
      curto.style.display = "inline";
      botao.textContent = "ver tudo";
    }
  });
});