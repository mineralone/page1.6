const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');
const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');
const modalCallInput = modalCall.querySelector('.modal-form__input');
const modalFeedbackInput = modalFeedback.querySelector('.modal-form__input');


const clearPage = function() {
    sideControl.classList.remove('side-control--blur');
    content.classList.remove('content--blur');
    modalFeedback.classList.remove('modal-feedback--show');
    modalFeedback.classList.add('modal-feedback--hide');
    modalCall.classList.remove('modal-call--show');
    modalCall.classList.add('modal-call--hide');
    sideControl.classList.remove('side-control--show');
    sideControl.classList.add('side-control--hide');
};


const myListener = function(e) {
    let sideControlBlur = document.querySelector('.side-control--blur');
    const modalCallTry = e.composedPath().includes(modalCall);
    const modalFeedbackTry = e.composedPath().includes(modalFeedback);
    const sideControlTry = e.composedPath().includes(sideControl);
    const sideControlBlurTry = e.composedPath().includes(sideControlBlur);
    if ((!modalCallTry && !modalFeedbackTry && (!sideControlTry)) || sideControlBlurTry) {
        clearPage();
    };
};


const callback = function(){
if (content.classList.contains('content--blur')) {
    document.addEventListener('click', myListener);
    document.addEventListener('keydown', function(e){
        if (e.keyCode === 27) {
            modalFeedbackInput.blur();
            modalCallInput.blur();
            myListener(e);
        }
    });
} else {
    document.removeEventListener('click', myListener);
    document.removeEventListener('keydown', function(e){
        if (e.keyCode === 27) {
            modalFeedbackInput.blur();
            modalCallInput.blur();
            myListener(e);
        };
    });
};
};


const mo = new MutationObserver(callback);
const options = {
    'attributes': true,
    'attributeOldValue': true,
    'attuributeFilter': ['class']
};
mo.observe(content, options);