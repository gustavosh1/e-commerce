document.addEventListener("DOMContentLoaded", function () {

 

  const brand_cards = document.querySelectorAll(".brand_card");
  brand_cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const brand_name = this.querySelector("h3").textContent;
      alert(`Navegando para produtos da marca: ${brand_name}`);
    });
  });

  const category_cards = document.querySelectorAll(".category_card");
  category_cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const category_name = this.querySelector("h3").textContent;
      alert(`Navegando para categoria: ${category_name}`);
    });
  });

  const see_products = document.querySelector(".see_product");
  see_products.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Redirecionando para catálogo de produtos...");
  });


});
