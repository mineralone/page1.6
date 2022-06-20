const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');

const burgerSideOpen = content.querySelector('.header__btn-burger');
const burgerSideClose = sideControl.querySelector('.side-header__burger');

burgerSideOpen.addEventListener('click', function(e) {
    e.stopPropagation();
    sideControl.classList.toggle('side-control--hide');
    sideControl.classList.toggle('side-control--show');
    content.classList.toggle('content--blur');
    });

burgerSideClose.addEventListener('click', function() {
    sideControl.classList.toggle('side-control--hide');
    sideControl.classList.toggle('side-control--show');
    content.classList.toggle('content--blur');
});

