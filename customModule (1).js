exports.htmlreplace = function htmlreplace(template, product) {
    if (!product || !product.productImage) {
        return template; // Return the original template if product or images are undefined
    }
    let imagesHTML = '';
    if (product.productImage && product.productImage.length > 0) {
        for (let i = 0; i < product.productImage.length; i++) {
            imagesHTML += `<img src="${product.productImage[i]}" class="carousel-item">`;
        }
    }
    /*let videoHTML = '';
    if (product.video && product.video.length > 0) {
        for (let i = 0; i < product.video.length; i++) {
            videoHTML += `<video controls><source src="${product.video[i]}" type="video/mp4"></video>`;
        }
    }*/

    //let imagesHTML = '<div id="image-carousel" class="carousel">';
    //for (let i = 1; i < product.images.length; i++) {
        //imagesHTML += `<img src="${product.images[i]}" width="280" height="320">`;
    //}
    //imagesHTML += '</div>';

    

    // Replace images
    //let imagesHTML = '';
    //product.productImage.forEach((image, index) => {
        //imagesHTML += `<img src="${image}" width="280" height="320" class="${index === 0 ? 'active' : ''}">`;
    //});
    
    let output = template.replace('{{%VIDEO%}}', product.video);
    output = output.replace('<div id="image-carousel" class="carousel"><!-- Images will be inserted here --></div>', `<div id="image-carousel" class="carousel">${imagesHTML}</div>`);
    output = output.replace('{{%360_VIEW%}}', product['360_view']);

    // Replace other placeholders
    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODEL NAME%}}', product.modeName);
    output = output.replace('{{%MODEL NO%}}', product.modelNumber);
    output = output.replace('{{%SIZE%}}', product.size);
    output = output.replace('{{%camera SIZE%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', product.color);
    output = output.replace('{{%ID%}}', product.id);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%DESC%}}', product.Description);
    output = output.replace('{{%FIRST_IMAGE%}}', product.productImage[0]); // Add the first image to the placeholder
    return output;
}
