const addListenerFn = function(classBlock) {
    const block = document.querySelector(`.${classBlock}__inner`);
    const btn = document.querySelector(`.${classBlock}__float-btn`);
    btn.addEventListener('click', function() {
    block.classList.toggle(`${classBlock}__inner--hide`);
    block.classList.toggle(`${classBlock}__inner--show`);
    btn.classList.toggle(`${classBlock}__float-btn--hide`);
    btn.classList.toggle(`${classBlock}__float-btn--show`);
});
};

const btnArr = document.querySelectorAll('.btn');
for (let btnElem of btnArr) {
    if (btnElem.classList.contains('info-read__float-btn')) addListenerFn('info-read');
    if (btnElem.classList.contains('brands__float-btn')) addListenerFn('brands');
    if (btnElem.classList.contains('technical__float-btn')) addListenerFn('technical');
}
