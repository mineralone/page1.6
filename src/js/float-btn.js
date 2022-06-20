const infoRead = document.querySelector('.info-read');
const infoReadBtn = infoRead.querySelector('.info-read__btn');
const infoReadText = infoRead.querySelector('.info-read__text');

infoReadBtn.addEventListener('click', function() {
    let infoReadBtnHide = infoRead.querySelector('.info-read__text--hide');
    if (infoReadBtnHide) {
        infoReadText.classList.add('info-read__text--show');
        infoReadText.classList.remove('info-read__text--hide');
        infoReadBtn.classList.add('info-read__btn--hide');
        infoReadBtn.classList.remove('info-read__btn--show');
    } else {
        infoReadText.classList.add('info-read__text--hide');
        infoReadText.classList.remove('info-read__text--show');
        infoReadBtn.classList.add('info-read__btn--show');
        infoReadBtn.classList.remove('info-read__btn--hide');
    }
});

const brands = document.querySelector('.brands');
const brandsList = brands.querySelector('.brands-list');
const brandsBtn = brands.querySelector('.brands__float-btn');

brandsBtn.addEventListener('click', function() {
    let brandsListHide = brands.querySelector('.brands-list--hide');
    if (brandsListHide) {
        brandsList.classList.add('brands-list--show');
        brandsList.classList.remove('brands-list--hide');
        brandsBtn.classList.add('brands__float-btn--hide');
        brandsBtn.classList.remove('brands__float-btn--show');
    } else {
        brandsList.classList.remove('brands-list--show');
        brandsList.classList.add('brands-list--hide');
        brandsBtn.classList.remove('brands__float-btn--hide');
        brandsBtn.classList.add('brands__float-btn--show');
    }
});

const technical = document.querySelector('.technical');
const technicalList = technical.querySelector('.technical-list');
const technicalBtn = technical.querySelector('.technical__float-btn');

technicalBtn.addEventListener('click', function() {
    let technicalListHide = technical.querySelector('.technical-list--hide');
    if (technicalListHide) {
        technicalList.classList.add('technical-list--show');
        technicalList.classList.remove('technical-list--hide');
        technicalBtn.classList.add('technical__float-btn--hide');
        technicalBtn.classList.remove('technical__float-btn--show');
    } else {
        technicalList.classList.remove('technical-list--show');
        technicalList.classList.add('technical-list--hide');
        technicalBtn.classList.remove('technical__float-btn--hide');
        technicalBtn.classList.add('technical__float-btn--show');
    }
});

