const widget = document.querySelector('#widget-container');
const widgetMail = document.querySelector('#widget-mail');
const widgetPhone = document.querySelector('#widget-phone');
const widgetCv = document.querySelector('#widget-cv');
const widgetClose = document.querySelector('#widget-close');
const contentMail = document.querySelector('.content-mail');
const contentPhone = document.querySelector('.content-phone');
const contentCv = document.querySelector('.content-cv');
const contentClose = document.querySelector('.content-close');
// const body = document.querySelector('#scroll');


 widget.addEventListener('click', function() {
    widgetMail.classList.add("show-widget");
    widgetPhone.classList.add("show-widget");
    widgetCv.classList.add("show-widget");
    widgetClose.classList.add("show-widget");
    contentMail.classList.add("show-content");
    contentPhone.classList.add("show-content");
    contentCv.classList.add("show-content");
    // body.classList.add("opacity");

});

  widgetClose.addEventListener('click', function() {
    widgetMail.classList.remove("show-widget");
    widgetPhone.classList.remove("show-widget");
    widgetCv.classList.remove("show-widget");
    widgetClose.classList.remove("show-widget");
    contentMail.classList.remove("show-content");
    contentPhone.classList.remove("show-content");
    contentCv.classList.remove("show-content");
    // body.classList.remove("opacity");
});
