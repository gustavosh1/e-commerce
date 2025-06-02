  function comprar(produto, preco) {
            alert(`🛒 Produto adicionado ao carrinho!\n\n📱 ${produto}\n💰 R$ ${preco}\n\n✅ Continue comprando ou finalize seu pedido pelo WhatsApp!`);
        }

        function whatsapp(produto, preco) {
            const mensagem = `Olá! Tenho interesse no produto:\n\n📱 ${produto}\n💰 R$ ${preco}\n\nPode me dar mais informações?`;
            const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        }

        // Animação de entrada
        window.addEventListener('load', function() {
            const cards = document.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

        // Efeito hover 3D
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });