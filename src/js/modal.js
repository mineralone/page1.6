const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');

const modalCall = document.querySelector('.modal-call');
const modalCallInput = modalCall.querySelector('.modal-form__input');
const modalFeedback = document.querySelector('.modal-feedback');
const modalFeedbackInput = modalFeedback.querySelector('.modal-form__input');
const btnArray = document.querySelectorAll('.btn');

const blurPage = function() {
    sideControl.classList.add('side-control--blur');
    sideControl.classList.add('side-control--hide');
    sideControl.classList.remove('side-control--show');
    content.classList.add('content--blur');
}

for (i=0; i<btnArray.length; i++) {
    btn = btnArray[i];
    if (btn.classList.contains('communication__btn-call')) {
        btn.addEventListener('click', function(e){
            e.stopPropagation();
            blurPage();
            modalCall.classList.remove('modal-call--hide');
            modalCall.classList.add('modal-call--show');
            setTimeout(function(){
            modalCallInput.focus();
            }, 1000);
        });
    } else {
        if (btn.classList.contains('communication__btn-chat')) {
            btn.addEventListener('click', function(e){
                e.stopPropagation();
                blurPage();
                modalFeedback.classList.remove('modal-feedback--hide');
                modalFeedback.classList.add('modal-feedback--show');
                setTimeout(function(){
                    modalFeedbackInput.focus();
                    }, 1000);
            });
        } else {
            if (btn.classList.contains('modal-feedback__btn-close') 
                   || btn.classList.contains('modal-call__btn-close')) {
                        btn.addEventListener('click', function(){
                            sideControl.classList.remove('side-control--blur');
                            content.classList.remove('content--blur');
                            modalFeedback.classList.remove('modal-feedback--show');
                            modalFeedback.classList.add('modal-feedback--hide');
                            modalCall.classList.remove('modal-call--show');
                            modalCall.classList.add('modal-call--hide');
                        });
            };
        };    
    };
};
