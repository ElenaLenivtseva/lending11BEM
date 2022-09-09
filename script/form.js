// функция работа с формой (инпут_где_value, кнопка_отправки, само модальное окно с формой) {
//     получи и засунь в переменную инпут 

//     получи и засунь в переменную кнопку
//      получи и засунь в переменную само модальное окно
//      напиши рег выражение на проверку почты

//       при нажатии на кнопку {
//     забери вылью из инпута
//      если (value подходит под рег выражение) {
//                засвети инпут зеленым
//                 скрой модальное окно
//              типо отправь value куда-то
//      } иначе {
//                 засвети инпут красным
//      }
// }   
// }
function validateEmail(email) 
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function workWithForm (inputForm, buttonSubmit, modalWindow) {
    let input = document.querySelector(inputForm);
    let button_submit = document.querySelector(buttonSubmit);
    let form = document.querySelector(modalWindow);
    // нужно подумать. Наверное, для этих модльных окон нужно еще и определять e.target и забирать оттуда датасет. Потом присваивать такой же для самого модального окна. А потом вытягивать датасет от модального окна уже здесь. Т.е. modal.js нужно расширить. 
    // let documentNeed = form.dataset.nameOfDocument;

    // а еще можно было бы подумать над событием формы submit
    button_submit.addEventListener('click', function (event) {
        // мне стоит изучить вопросы, связанные с сервером
        // чтобы не было перезагрузки страницы, нужен preventDefolt, но боюсь, что тогда форма вообще не отправится, а с сервером я еще не умею работать, чтобы самой продумать поведение
        // event.preventDefolt();
        let value = input.value;
        let condition = validateEmail(value);
        
        if (condition) {
            // event.preventDefolt();
            // пока не знаю, как сделать отмену стандартного поведения при отправке формы и задать свое
            input.style.background = 'green';
            form.style.display = "none";
            document.body.style.overflow = "";
            // form.submit();
            // тут какой-то код отправки value и маркера документа на сервер - функция с fetch

        } else {
            input.style.background = '#eb7a7a';
        }
        // ну и еще стоит убирать красный фон, когда пользователь снова пытается ввести свои данные
    })
}
workWithForm ('.doc-popup__input', '.doc-popup__button', '.popup__wrapper-doc');