document.addEventListener("DOMContentLoaded", () => {
  const btnAjudar = document.getElementById("btnAjudar");
  const btnAjudarFix = document.getElementById("btnAjudarFix");
  const btnCompartilhar = document.getElementById("btnCompartilhar");

  function showMessage(text) {
    const msg = document.createElement("div");
    msg.innerText = text;

    msg.style.position = "fixed";
    msg.style.bottom = "24px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "rgba(20,20,20,0.95)";
    msg.style.color = "#fff";
    msg.style.padding = "12px 18px";
    msg.style.borderRadius = "12px";
    msg.style.fontSize = "14px";
    msg.style.zIndex = "99999";
    msg.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    msg.style.fontWeight = "500";
    msg.style.opacity = "0";
    msg.style.transition = "all .25s ease";

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = "1";
      msg.style.transform = "translateX(-50%) translateY(-6px)";
    }, 10);

    setTimeout(() => {
      msg.style.opacity = "0";
      msg.style.transform = "translateX(-50%) translateY(10px)";
      setTimeout(() => msg.remove(), 250);
    }, 2000);
  }

  function abrirCheckout() {
    showMessage("Redirecionando para a doação...");
    setTimeout(() => {
      window.location.href = "ajudar";
    }, 800);
  }

  // BOTÃO NORMAL
  if (btnAjudar) {
    btnAjudar.addEventListener("click", abrirCheckout);
  }

  // BOTÃO FIXO
  if (btnAjudarFix) {
    btnAjudarFix.addEventListener("click", abrirCheckout);
  }

  // COMPARTILHAR
 if (btnCompartilhar) {
  btnCompartilhar.addEventListener("click", async () => {
    const link = window.location.href;

const mensagem =
`Ajude o Genésio,  A vida dele mudou após problemas graves de saúde e ele precisa de apoio para continuar o tratamento. Se não puder ajudar financeiramente, compartilhar já é uma grande ajuda.     ${link}`;

    // 🔥 CHECAGEM REAL DE SUPORTE (mais confiável)
    const podeCompartilhar =
      typeof navigator !== "undefined" &&
      navigator.share &&
      window.isSecureContext;

    if (podeCompartilhar) {
      try {
        await navigator.share({
          title: "Ajude o Genésio",
          text: "💚 Ajude o Genésio — ele precisa de ajuda agora",
          url: link
        });

        showMessage("💚 Obrigado por compartilhar!");
      } catch (err) {
        // usuário cancelou ou erro → fallback
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      try {
        navigator.clipboard.writeText(mensagem);
        showMessage("🔗 Mensagem copiada!");
      } catch (err) {
        const input = document.createElement("input");
        input.value = mensagem;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);

        showMessage("🔗 Mensagem copiada!");
      }
    }
  });
}
});
