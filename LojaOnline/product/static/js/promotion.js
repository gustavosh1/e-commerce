function comprar(produto, preco) {
  alert(`🔥 OFERTA ADICIONADA AO CARRINHO! 🔥\n\n📱 ${produto}\n💰 R$ ${preco}\n\n⚡ Promoção por tempo limitado!\n✅ Finalize agora pelo WhatsApp!`);
}

function whatsapp(produto, preco) {
  const mensagem = `🔥 QUERO APROVEITAR A PROMOÇÃO! 🔥\n\n📱 Produto: ${produto}\n💰 Preço promocional: R$ ${preco}\n\n⚡ Pode reservar para mim? Tenho interesse!`;
  const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Animação de entrada
window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".product_card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// Efeito hover avançado
document.querySelectorAll(".product_card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
  });
});
