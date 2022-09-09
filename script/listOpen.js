// функция дляменю (ul, кнопкаразвернуть, liотUl, none) {
//     засунь в переменную ul
//     засунь в переменную все lioтUl
//     засунь в переменную кнопкуразвернуть

//     кнопка.addEvent('click', функция () {
//         for (i=0; i<liотUl.length, i++) {
//             liотUl[i].classList.toggle(none);
//         }
//     })
// }

function listOpen(ulElem, liList, trigger, wrapperForMargin, none) {
    let ul = document.querySelector(ulElem);
    let button = document.querySelector(trigger);
    let wrapper = document.querySelector(wrapperForMargin);
    let li = document.querySelectorAll(liList);
    console.log(li);
    button.addEventListener('click', function() {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.toggle(none);
        }
        wrapper.style.marginBottom = '20px';
    })

}

listOpen('.menu-mob__list-item-wide1', '.menu-mob__list-area-item', '.menu-mob__list-arrow', '.menu__mob__list-item-wrapper', 'none');