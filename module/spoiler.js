'use strict';
const spoiler = function () {
    const spoiler = document.querySelectorAll(`[data-spoiler]`);
    if (spoiler) {
        spoiler.forEach(item => {
            const attrProperty = getValues(item);
            createSpoiler(item, attrProperty);
        });
    }

    function getValues(spoiler) {
        const values = spoiler.dataset.spoiler.split('/');
        const attrProperty = {};
        if (values) {
            values.forEach(value => {
                if (/^(0|[1-9]\d*)$/.test(value)) {
                    attrProperty.resoluton = value;
                } else if (value === `max` || value === `min`) {
                    attrProperty.media = value;
                }
            });
        }
        if (attrProperty.resoluton) {
            return attrProperty;
        } else {
            return false;
        }
    }

    function createSpoiler(spoiler, attrProperty) {
        const spoilerHead = spoiler.querySelector(`.spoiler__head`),
            spoilerBody = spoiler.querySelector(`.spoiler__body`);
        if (spoilerHead && spoilerBody) {
            if (!attrProperty) {
                create();
            } else {
                resolutionListener();
                window.addEventListener(`resize`, resolutionListener);
            }
        } else {
            console.error(`Classes: spoiler__head or spoiler__body not founded`);
        }

        function create() {
            spoilerBody.style.cssText = `
        height: 0;
        overflow: hidden;
        `;
            spoilerHead.addEventListener(`click`, spoilerClick);
        }

        function spoilerClick() {
            if (spoiler.classList.contains(`spoiler_active`)) {
                spoiler.classList.remove(`spoiler_active`);
                spoilerBody.style.height = `0`;
            } else {
                spoiler.classList.add(`spoiler_active`);
                spoilerBody.style.height = `${spoilerBody.scrollHeight}px`;
            }
        }

        function removeSpoiler() {
            spoilerBody.style.height = `${spoilerBody.scrollHeight}px`;
            spoilerHead.removeEventListener(`click`, spoilerClick);
        }

        function resolutionListener() {
            if (!attrProperty.media) {
                if (window.matchMedia(`(max-width: ${attrProperty.resoluton}px)`).matches) {
                    create();
                } else {
                    removeSpoiler();
                }
            } else {
                if (window.matchMedia(`(${attrProperty.media}-width: ${attrProperty.resoluton}px)`).matches) {
                    create();
                } else {
                    removeSpoiler();
                }
            }
        }
    }

};
export default spoiler;