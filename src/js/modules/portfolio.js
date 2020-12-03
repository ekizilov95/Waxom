
function showCards(Selector, activeClass) {
    const cards = document.querySelectorAll('.grid-portfolio__item'),
    filterBtnList = document.querySelectorAll(Selector);
    filterBtnList.forEach(btn => {
     
        btn.addEventListener('click', e => {
            filterBtnList.forEach(btn => btn.classList.remove(activeClass));
            e.target.classList.add(activeClass);
            let attribute = e.target.getAttribute('id');

            cards.forEach(card => {
                card.classList.remove('hide', 'fade');
    
                if(card.dataset.progect !== attribute && attribute !== "all") {
                    card.classList.add('hide');
                } else {
                    card.classList.remove('hide');
                    card.classList.add('fade');
                }
               
            });
        });
 
    });

}

showCards('.breadcrumbs__item', 'breadcrumbs__item_active');