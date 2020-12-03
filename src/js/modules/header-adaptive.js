function toggleClass(selector, itemSelector, activeClass) {
	const burger = document.querySelector(selector),
		menuItems = document.querySelectorAll(itemSelector),
		menuList = document.querySelector('.menu');

	function toggleHeaderMenu() {
		burger.classList.toggle(activeClass);
		menuList.classList.toggle('menu_active');
		document.body.classList.toggle('hidden');
	}

	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			if (window.innerWidth <= 993) {
				toggleHeaderMenu();
			}
		});
	});

	burger.addEventListener('click', () => {
		toggleHeaderMenu();
	});
}
toggleClass('.burger', '.menu__link', 'burger_active');

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (window.pageYOffset > 0) {
		header.classList.add('header_scroll');
	} else {
		header.classList.remove('header_scroll');
	}
});
