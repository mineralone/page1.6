const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');

const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');

const modalFeedbackOpen = document.querySelectorAll('.communication__btn-chat');
const modalFeedbackClose = modalFeedback.querySelector('.modal-feedback__btn-close');

const modalCallOpen = document.querySelectorAll('.communication__btn-call');
const modalCallClose = modalCall.querySelector('.modal-call__btn-close');

var blurPage = function() {
            sideControl.classList.remove('side-control--blur');
            content.classList.remove('content--blur');
            modalFeedback.classList.remove('modal-feedback--show');
            modalFeedback.classList.add('modal-feedback--hide');
            modalCall.classList.remove('modal-call--show');
            modalCall.classList.add('modal-call--hide');
            sideControl.classList.remove('side-control--show');
            sideControl.classList.add('side-control--hide');
};

 var callback = function(){
    let sideControlBlur = document.querySelector('.side-control--blur');
        document.addEventListener('click', function(e){
            let sideControlBlurBull = sideControl.classList.contains('side-control--blur');
            const modalCallTry = e.composedPath().includes(modalCall);
            const modalFeedbackTry = e.composedPath().includes(modalFeedback);
            const sideControlTry = e.composedPath().includes(sideControl);
            if (!modalCallTry && !modalFeedbackTry && !sideControlTry) {
                blurPage();
            }
            });
    }
        

mo = new MutationObserver(callback),
options = {
    'attributes': true,        // обязательно
    'attributeOldValue': true,  // перехватываем предыдущее значение атрибута.
    'attuributeFilter': ['class']
}

mo.observe(sideControl, options);