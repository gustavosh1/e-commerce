function showBrand(brand) {
            // Remover classe active de todos os botões
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adicionar classe active ao botão clicado
            event.target.classList.add('active');
            
            // Mostrar/esconder seções
            document.querySelectorAll('.brand-section').forEach(section => {
                if (brand === 'all') {
                    section.style.display = 'block';
                } else {
                    section.style.display = section.dataset.brand === brand ? 'block' : 'none';
                }
            });
        }

        function buyProduct(productName) {
            // Animação do botão
            event.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                event.target.style.transform = 'translateY(-2px)';
            }, 150);
            
            // Simulação de compra
            setTimeout(() => {
                alert(`🎉 ${productName} adicionado ao carrinho!\n\nEm um sistema real, isso redirecionaria para o checkout.`);
            }, 300);
        }

        // Adicionar efeitos de hover nos cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
        });