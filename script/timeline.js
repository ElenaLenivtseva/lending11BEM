// ТАЙМЛАЙН
// получаем коллекцию из всех элементов таймлайна(круги, линии)
let timeline__items = document.querySelectorAll('.timeline__item');

// получаем элемент, который показывает сколько процентов
// let timeline__marker = document.querySelector('.timeline__marker');

// т.к. в timeline__items коллекция, необходимо проследить событие на каждом элементе = цикл
for (let i=0; i<timeline__items.length; i++) {
    timeline__items[i].addEventListener("click", (e) => {
        // здесь снова прогоняем все элементы в цикле, но уже чтобы убрать класс активности у всех элементов
        for (let index = 1; index < timeline__items.length; index++) {
            timeline__items[index].classList.remove('timeline--active');
            // timeline_items[index].classList.remove('timeline--pulse');
        }
        // теперь надо получить место клика. Проверку на класс не делаем, т.к. работаем с коллекцией, состоящей из нужных нам элементов - в ней только timeline__item. Однако туда входят и линии .timeline__line(входят, чтобы подсвечивать и их при нажатии). Для этого класса мы в css указали, что он не кликабельный.
        let place = e.target;
        // place.classList.add('timeline--pulse');
        // получаем значение дата-аттрибута step. Он необходим, чтобы подсветить "кликнутый" элемент и все до "кликнутого" Проще всего это сделать, назначив всем элементам дата-аттрибут с его порядковым номером в таймлайне.
        let step = place.dataset.step;
        // сообственно подсвечиваем "кликнутый" элемент и все до него - назначаем класс активности
        for (let k=step; k!=0; k--) {
            timeline__items[k].classList.add('timeline--active');
        }
    } );
}

