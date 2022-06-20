const sideControl = document.querySelector('.side-control');
const content = document.querySelector('.content');

const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');

const modalFeedbackOpen = document.querySelectorAll('.communication__btn-chat');
const modalFeedbackClose = modalFeedback.querySelector('.modal-feedback__btn-close');

const modalCallOpen = document.querySelectorAll('.communication__btn-call');
const modalCallClose = modalCall.querySelector('.modal-call__btn-close');



        for (j=0; j<modalFeedbackOpen.length; j++) {
            modalFeedbackOpenBtn = modalFeedbackOpen[j];
            modalFeedbackOpenBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    sideControl.classList.add('side-control--blur');
                    sideControl.classList.add('side-control--hide');
                    sideControl.classList.remove('side-control--show');
                    content.classList.add('content--blur');
                    modalFeedback.classList.remove('modal-feedback--hide');
                    modalFeedback.classList.add('modal-feedback--show');
                });
        }   
        
        modalFeedbackClose.addEventListener('click', function() {
            sideControl.classList.remove('side-control--blur');
            content.classList.remove('content--blur');
            modalFeedback.classList.remove('modal-feedback--show');
            modalFeedback.classList.add('modal-feedback--hide');
        });
        
        
        for (i=0; i<modalCallOpen.length; i++) {
            modalCallOpenBtn = modalCallOpen[i];
            modalCallOpenBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                sideControl.classList.add('side-control--blur');
                sideControl.classList.add('side-control--hide');
                sideControl.classList.remove('side-control--show');
                content.classList.add('content--blur');
                modalCall.classList.remove('modal-call--hide');
                modalCall.classList.add('modal-call--show');
        });
        }
        
        modalCallClose.addEventListener('click', function() {
            sideControl.classList.remove('side-control--blur');
            content.classList.remove('content--blur');
            modalCall.classList.remove('modal-call--show');
            modalCall.classList.add('modal-call--hide');
        })
