export class DownloadModule {
    constructor(template) {
        const downloadModule = document.createElement("div");
        downloadModule.classList.add("b-download-module", "js-download-module");

        downloadModule.innerHTML = `
            <div class="b-download-module__wrapper">
                    <div class="b-download-module__header">
                        <div class="b-download-module__logo-wrapper js-logo-wrapper active" style="background-image: url(${template.logo})"></div>
                    </div>
                    <div class="b-download-module__content-wrapper js-download-module__content">
                        <div class="b-download-module__content">
                            <div class="b-download-module__button-wrapper">
                                <button class="button b-download-module__button js-download-module__button">Download</button>   
                            </div>
                            <h2 class="b-download-module__title js-title">${template.title}</h2>
                            <div class="b-download-module__descr js-description">${template.description}</div>
                        </div>                                                   
                    </div>             
            </div>
        `;
        this.show = () => {
            document.body.appendChild(downloadModule)
        };
    };
}