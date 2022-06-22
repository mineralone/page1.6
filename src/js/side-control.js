const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');
const btnArray = document.querySelectorAll('.btn');

for (i=0; i<btnArray.length; i++) {
    btn = btnArray[i];
    if (btn.classList.contains('header__btn-burger') || btn.classList.contains('side-header__burger')){
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            sideControl.classList.toggle('side-control--hide');
            sideControl.classList.toggle('side-control--show');
            content.classList.toggle('content--blur');
            });
    }
}

