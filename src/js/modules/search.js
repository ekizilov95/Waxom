const headerSearch = document.querySelector('#search'),
        inputHeader = document.querySelector('.actions-item__input');

headerSearch.addEventListener('click', () => {
    inputHeader.classList.toggle('show-input');
    
});