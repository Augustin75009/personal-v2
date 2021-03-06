const shoWidget = () => {

const widget = document.querySelector('#widget-container');
const widgetMail = document.querySelector('#widget-mail');
const widgetPhone = document.querySelector('#widget-phone');
const widgetCv = document.querySelector('#widget-cv');
const widgetClose = document.querySelector('#widget-close');
const contentMail = document.querySelector('.content-mail');
const contentPhone = document.querySelector('.content-phone');
const contentCv = document.querySelector('.content-cv');
const body1 = document.querySelector('.banner');
const body2 = document.querySelector('.first-card');
const body3 = document.querySelector('.second-card');
const body4 = document.querySelector('.works');
const body5 = document.querySelector('.dev-profil');
const body6 = document.querySelector('#mail');
const body7 = document.querySelector('.footer-card');
const body8 = document.querySelector('.dev-links');
const body9 = document.querySelector('.arrow-up');
const body10 = document.querySelector('.more-infos');
const progress = document.querySelector('.container-scroll');


 widget.addEventListener('click', function() {
    widgetMail.classList.add("show-widget");
    widgetPhone.classList.add("show-widget");
    widgetCv.classList.add("show-widget");
    widgetClose.classList.add("show-widget");
    contentMail.classList.add("show-content");
    contentPhone.classList.add("show-content");
    contentCv.classList.add("show-content");
    body1.classList.add("opacity");
    body2.classList.add("opacity");
    body3.classList.add("opacity");
    body4.classList.add("opacity");
    body5.classList.add("opacity");
    body6.classList.add("opacity");
    body7.classList.add("opacity");
    body8.classList.add("opacity");
    body9.classList.add("opacity");
    body10.classList.add("opacity");
    progress.classList.add("display");
});

  widgetClose.addEventListener('click', function() {
    widgetMail.classList.remove("show-widget");
    widgetPhone.classList.remove("show-widget");
    widgetCv.classList.remove("show-widget");
    widgetClose.classList.remove("show-widget");
    contentMail.classList.remove("show-content");
    contentPhone.classList.remove("show-content");
    contentCv.classList.remove("show-content");
    body1.classList.remove("opacity");
    body2.classList.remove("opacity");
    body3.classList.remove("opacity");
    body4.classList.remove("opacity");
    body5.classList.remove("opacity");
    body6.classList.remove("opacity");
    body7.classList.remove("opacity");
    body8.classList.remove("opacity");
    body9.classList.remove("opacity");
    body10.classList.remove("opacity");
    progress.classList.remove("display");
});

}

export default shoWidget
