const infoReadBtn = document.querySelector('.info-read__btn');
const infoReadText = document.querySelector('.info-read__text');
const brandsList = document.querySelector('.brands__list');
const brandsBtn = document.querySelector('.brands__float-btn');
const technicalList = document.querySelector('.technical__list');
const technicalBtn = document.querySelector('.technical__float-btn');
const btnArray = document.querySelectorAll('.btn');

const infoReadFloatFn = function() {
    infoReadText.classList.toggle('info-read__text--show');
    infoReadText.classList.toggle('info-read__text--hide');
    infoReadBtn.classList.toggle('info-read__btn--hide');
    infoReadBtn.classList.toggle('info-read__btn--show');
};

const brandsFloatFn = function() {
    brandsList.classList.toggle('brands__list--show');
    brandsList.classList.toggle('brands__list--hide');
    brandsBtn.classList.toggle('brands__float-btn--hide');
    brandsBtn.classList.toggle('brands__float-btn--show');
};

const technicalFloatFn = function() {
    technicalList.classList.toggle('technical__list--show');
    technicalList.classList.toggle('technical__list--hide');
    technicalBtn.classList.toggle('technical__float-btn--hide');
    technicalBtn.classList.toggle('technical__float-btn--show');
}

for (i=0; i<btnArray.length; i++) {
    btn = btnArray[i];
    if (btn.classList.contains('info-read__btn')) {
        btn.addEventListener('click', function(){
            infoReadFloatFn();
        });
    } else { 
        if (btn.classList.contains('brands__float-btn')) {
            btn.addEventListener('click', function(){
                brandsFloatFn();
            });
        } else {
        if (btn.classList.contains('technical__float-btn')) {
            btn.addEventListener('click', function(){
                technicalFloatFn();
            });
        };
        };
    };
};

