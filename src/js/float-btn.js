let floatFn = function(classBlock, classBtn) {
    const block = document.querySelector(`.${classBlock}`);
    const btn = document.querySelector(`.${classBtn}`);
    btn.addEventListener('click', function() {
    block.classList.toggle(`${classBlock}--hide`);
    block.classList.toggle(`${classBlock}--show`);
    btn.classList.toggle(`${classBtn}--hide`);
    btn.classList.toggle(`${classBtn}--show`);
});
};

floatFn('info-read__text', 'info-read__btn');
floatFn('brands__list', 'brands__float-btn');
floatFn('technical__list', 'technical__float-btn');

