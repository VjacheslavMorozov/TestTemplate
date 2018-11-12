import './scss/main.scss';

import {DownloadModule} from "./js/downloadModule/downloadModule";

const currentTemplate = {
    logo: "https://img.icons8.com/ios/2x/wifi-logo-filled.png",
    title: "test-title",
    description: "test-description"
};

const template = new DownloadModule(currentTemplate);
template.show();

const title = document.querySelector(".js-title");
const description = document.querySelector(".js-description");
const logoWrapper = document.querySelector(".js-logo-wrapper");

setTimeout(()=> {
    logoWrapper.classList.remove("active");
    title.classList.add("active");
    description.classList.add("active");
},0);
