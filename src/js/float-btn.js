const infoReadBtn = document.querySelector('.info-read__btn');
const infoReadText = document.querySelector('.info-read__text');
const brandsList = document.querySelector('.brands__list');
const brandsBtn = document.querySelector('.brands__float-btn');
const technicalList = document.querySelector('.technical__list');
const technicalBtn = document.querySelector('.technical__float-btn');
const btnArray = document.querySelectorAll('.btn');

const floatFn = function(block, btnBlock, 
                         classBlockShow, classBlockHide, 
                         classBtnBlockShow, classBtnBlockHide) {
    block.classList.toggle(classBlockShow);
    block.classList.toggle(classBlockHide);
    btnBlock.classList.toggle(classBtnBlockShow);
    btnBlock.classList.toggle(classBtnBlockHide);
}

for (i=0; i<btnArray.length; i++) {
    btn = btnArray[i];
    if (btn.classList.contains('info-read__btn')) {
        btn.addEventListener('click', function(){
            floatFn(infoReadText, infoReadBtn, 
                    'info-read__text--show', 'info-read__text--hide', 
                    'info-read__btn--show', 'info-read__btn--hide');
        });
    } else if (btn.classList.contains('brands__float-btn')) {
        btn.addEventListener('click', function(){
            floatFn(brandsList, brandsBtn, 
                    'brands__list--show', 'brands__list--hide',
                    'brands__float-btn--show', 'brands__float-btn--hide');
        });
    } else if (btn.classList.contains('technical__float-btn')) {
        btn.addEventListener('click', function(){
            floatFn(technicalList, technicalBtn, 
                    'technical__list--show', 'technical__list--hide',
                    'technical__float-btn--show', 'technical__float-btn--hide');
        });
    };
    };

