let carrinho = [
  { id: 1, nome: "Camiseta Básica", preco: 39.9, quantidade: 2 },
  { id: 2, nome: "Calça Jeans", preco: 89.9, quantidade: 1 },
  { id: 3, nome: "Tênis Esportivo", preco: 159.9, quantidade: 1 },
];

let proximoId = 4;

function renderizarCarrinho() {
  const container = document.getElementById("cart_items");
  const emptyMessage = document.getElementById("empty_message");
  const summary = document.getElementById("summary");

  if (carrinho.length === 0) {
    container.innerHTML = "";
    emptyMessage.style.display = "block";
    summary.style.display = "none";
    return;
  }

  emptyMessage.style.display = "none";
  summary.style.display = "block";

  container.innerHTML = carrinho
    .map(
      (item) => `
        <div class="cart-item">
            <div class="item-info">
                <div class="item-name">${item.nome}</div>
                <div class="item-price">R$ ${item.preco.toFixed(2).replace(".", ",")}</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="alterarQuantidade(${item.id}, -1)">-</button>
                <input type="number" class="qty-input" value="${item.quantidade}" min="1" onchange="definirQuantidade(${item.id}, this.value)">
                <button class="qty-btn" onclick="alterarQuantidade(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removerItem(${item.id})">Remover</button>
        </div>
            `
    )
    .join("");

  atualizarResumo();
}

function alterarQuantidade(id, mudanca) {
  const item = carrinho.find((item) => item.id === id);
  if (item) {
    item.quantidade += mudanca;
    if (item.quantidade <= 0) {
      removerItem(id);
    } else {
      renderizarCarrinho();
    }
  }
}

function definirQuantidade(id, quantidade) {
  const item = carrinho.find((item) => item.id === id);
  if (item) {
    item.quantidade = Math.max(1, parseInt(quantidade) || 1);
    renderizarCarrinho();
  }
}

function removerItem(id) {
  carrinho = carrinho.filter((item) => item.id !== id);
  renderizarCarrinho();
}

function atualizarResumo() {
  const subtotal = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  const frete = 10.0;
  const total = subtotal + frete;

  document.getElementById("subtotal").textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
  document.getElementById("total").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

renderizarCarrinho();
