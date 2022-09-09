
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = ""; 
                // document.body.classList.remove('modal-open');
            }
        });
    }

    

    // bindModal('.beginning__title', '.popup__wrapper-easter', '.easter-popup__close');
    // bindModal('.documents__button', '.popup__wrapper-doc', '.doc-popup__close');

    // bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);


// export default modals;
// window.addEventListener('DOMContentLoaded', () => {
//     modals();
// });