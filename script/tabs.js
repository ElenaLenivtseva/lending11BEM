// ТАБЫ
// Получи что должно быть в заголовке, что должно быть в подзаголовке
// Получи нужные изображения
// найди нужные элементы
// поставь в них то, что передано

// передаваться должно в зависимости от названия...
// нажал на название, передаются параметры
// когда нажато это, то заголовок такой, подзаголовок такой, фотки такие


// let a = document.querySelectorAll('.tabs__name');
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     b.push(a[i]);
//     console.log(b);
// }
// let c = document.querySelectorAll('.tabs__item');
// let d = [];
// for (let i = 0; i < c.length; i++) {
//     d.push(c[i]);
//     console.log(d);
// }
// let first = document.querySelector('.tabs__name-1');
// let firstItem = document.querySelector('.tabs__item-1');
// console.log(firstItem);
// first.addEventListener('click', function() {
//     secondItem.style.display = 'none';
//     thirdItem.style.display = 'none';
//     firstItem.style.display = 'block';
//     // firstItem.style.zIndex = '10';
//     // secondItem.style.zIndex = '0';
//     // thirdItem.style.zIndex = '0';
// })
// let second = document.querySelector('.tabs__name-2');
// let secondItem = document.querySelector('.tabs__item-2');
// console.log(secondItem);
// second.addEventListener('click', function() {
//     thirdItem.style.display = 'none';
//     firstItem.style.display = 'none';
//     secondItem.style.display = 'block';
//     // firstItem.style.zIndex = '0';
//     // secondItem.style.zIndex = '10';
//     // thirdItem.style.zIndex = '0';
// })
// let third = document.querySelector('.tabs__name-3');
// let thirdItem = document.querySelector('.tabs__item-3');
// console.log(thirdItem);
// third.addEventListener('click', function() {
//     firstItem.style.display = 'none';
//     secondItem.style.display = 'none';
//     thirdItem.style.display = 'block';
//     // firstItem.style.zIndex = '0';
//     // secondItem.style.zIndex = '0';
//     // thirdItem.style.zIndex = '10';
// })

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.infrastructure__list');
	const tabsBtn = document.querySelectorAll('.infrastructure__list-item');
	const tabsContent = document.querySelectorAll('.infrastructure__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('infrastructure__list-item')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('infrastructure__list-item--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('infrastructure__list-item--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('infrastructure__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('infrastructure__content--active');
	};
});