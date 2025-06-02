 document.addEventListener('DOMContentLoaded', function() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const productCards = document.querySelectorAll('.product-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');

                    const filter = this.getAttribute('data-filter');

                    productCards.forEach(card => {
                        if (filter === 'todos') {
                            card.style.display = 'block';
                        } else {
                            const category = card.getAttribute('data-category');
                            if (category === filter) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });

          
        });