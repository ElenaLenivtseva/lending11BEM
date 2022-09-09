

// let button__prev = document.querySelector('.slider__arrow-left');
// let button__next = document.querySelector('.slider__arrow-right');

// let all = ['images/slider/slider__img-item1.png', 'images/slider/slider__main2.png', 'images/slider/slider__main3.png', 'images/slider/slider__main4.png'];


function takeAllImages(...images) {
    let all = [];
    for (let i = 0; i < images.length; i++) {  
        all.push(images[i]);
    }
    return all;
}
function drawPreview(all, prev) {
    let slider__preview = document.querySelector(prev);
    for (let i = 0; i < all.length; i++) {
        let sliderPrevImg = document.createElement('img');
        sliderPrevImg.classList.add('slider__prev-img');
        sliderPrevImg.src = all[i];
        slider__preview.appendChild(sliderPrevImg);
    }
    let slider__prevImages = document.querySelectorAll('.slider__prev-img');
    return slider__prevImages;
}

// добавить проверку на наличие элемента и на наличие у него такого класса
function removeClass(classic, elementic) {
    let elements = document.querySelectorAll(elementic);
    if (elements) {
        for (let i = 0; i < elements.length; i++) {
            // elements[i].classList.remove(classic);
            // нормально работает и без такой проверки, но лишним не будет
            if (elements[i].classList.contains(classic)) {
                elements[i].classList.remove(classic);
            }    
        }
    }
}



// добавить проверку на наличие элемента и на отсутствие у него такого класса
// function addClass(classic, elementic) {
//     let elements = document.querySelectorAll(elementic);
//     if (elements) {
//         for (let i = 0; i < elements.length; i++) {
//             // if (elements[i].classList.contains(classic))
//             elements[i].classList.add(classic);
//         }
//     }
// }

function followEvent (buttonPrev, buttonNext, mainimg, previmg) {
    if (all) {
        // ИНИЦИАЛИЗАЦИЯ
        // 1 - забери нужные элементы
        let button__prev = document.querySelector(buttonPrev);
        let button__next = document.querySelector(buttonNext);
        let mainImg = document.querySelector(mainimg);
        // 2 - поставь слайдер на начало
        let step = 0;
        mainImg.src = all[step];
        // 3 - отрисуй превью
        let slider__prevImages = drawPreview(all, previmg);

        // события кнопок
        button__prev.addEventListener('click', function() {
            removeClass('slider__prev-active', '.slider__prev-img');
            if (step != 0) {               
                step--;
            } else {
                step = all.length-1;
            }
            mainImg.src = all[step];
            slider__prevImages[step].classList.add('slider__prev-active');
        })
        button__next.addEventListener('click', function() {
            removeClass('slider__prev-active', '.slider__prev-img');
            if (step != all.length-1) {
                step++;
            } else {
                step = 0;
            }
            mainImg.src = all[step];
            slider__prevImages[step].classList.add('slider__prev-active');
        })
    }
}

// хотела придумать так: followEvent еще забирает src, а потом это становится параметром takeallImages. Было бы лучше. Но как-то не получается( Могла бы оставить all прямо внутри followEvent(), но тогда было бы просто сложнее параметры менять. А так сначала вызываешь takeAllImages(), потом уже followEvent(). На всякий случай добавила там проверку, есть ли all.

// let all = takeAllImages('images/slider/slider__img-item1.png', 'images/slider/slider__main2.png', 'images/slider/slider__main3.png', 'images/slider/slider__main4.png');
// Важно: картинки не должны быть слишком тяжелыми
// let all = takeAllImages('images/slider/slider__img-item1.png', 'images/slider/slider__img-item2.png', 'images/slider/slider__img-item3.png', 'images/slider/slider__img-item4.png');
let all = takeAllImages('/images/slider/slider__img-item1.png', '/images/slider/test1.jpg', '/images/slider/test2.jpg', '/images/slider/test3.jpg');
followEvent('.slider__arrow-left', '.slider__arrow-right', '.slider__main-img', '.slider__preview');