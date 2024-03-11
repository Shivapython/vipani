exports.htmlreplace = function htmlreplace(template, product) {
    if (!product || !product.productImage) {
        return template; // Return the original template if product or images are undefined
    }

    
    let output = template
    output=output.replace('{{%EXPERTRATING%}}',product.ExpertRating );
    output=output.replace('{{%CUSTOMERRATING%}}',product.CustomerRating );
    output=output.replace('{{%VIDEO%}}', product.video);
    output = output.replace('{{%360_VIEW%}}', product['360_view']);
    output=output.replace('{{%IMAGE1_URL%}}',product.productImage[0]);
    output=output.replace('{{%IMAGE2_URL%}}',product.productImage[1]);
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
