const images = [
    "img/company/org-3-br.png",
    "img/company/org-4-br.png",
    "img/company/org-5-br.png",
    "img/company/org-6-br.png",
    "img/company/org-3-br.png",
];


const preload = (images) => () => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

const addLoadEvent = (func) => {
    const onloadEvent = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (onloadEvent) {
                onloadEvent();
            }
            func();
        }
    }
}

addLoadEvent(preload(images));