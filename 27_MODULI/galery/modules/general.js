function generateImage(src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', 'Image failed loading');
    return img;
}

export default generateImage;