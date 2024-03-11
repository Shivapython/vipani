var http = require('http');
var fs = require('fs');
var url = require('url');
var custommodule = require('./customModule.js');
var custommodule2 = require('./customModule2.js');
const mainpage=fs.readFileSync('./homepage.html')
var live=fs.readFileSync('./livevideo.html')

const html = fs.readFileSync('./index2.html', 'utf-8');
var producthtml = fs.readFileSync('./productlist.html', 'utf-8');
const singleprodhtml = fs.readFileSync('./singleprod2.html', 'utf-8');
//const productjson = JSON.parse(fs.readFileSync('./products.json', 'UTF-8'));
function loadProductData(language) {
    return `./products${language}.json`;
};


http.createServer((req, res) => {
    const { query, pathname: path } = url.parse(req.url, true);
    


    
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        // Handle home page
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(html.replace('{{%CONTENT%}}',mainpage));
    } else if (path.toLocaleLowerCase() === '/about') {
        // Handle about page
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(html.replace('{{%CONTENT%}}', 'you are in About page'));
    } else if (path.toLocaleLowerCase() === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
        res.end(html.replace('{{%CONTENT%}}', 'you are in Contact page'));
    } else if (path.toLocaleLowerCase() === '/products') {
        //const language = query.language ;
        const language = query.language || 'english';
        let productjson = JSON.parse(fs.readFileSync(loadProductData(language).replace('${language}',language),'utf-8'));
        let producthtmlcopy=producthtml.slice();
        producthtmlcopy=producthtmlcopy.replace('{{%langu%}}',language);
        if (!query.id) {
            // Handle product list page
            let producthtmlArray = productjson.map((prod) => {
                return custommodule.htmlreplace(producthtmlcopy, prod);
            });
            res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
            res.end(html.replace('{{%CONTENT%}}', producthtmlArray.join(',')));
        } else {
            
            let product = productjson[query.id];
            let sam = custommodule2.htmlreplace(singleprodhtml, product);
            res.writeHead(200, { 'content-type':'text/html; charset=utf-8'});
            res.end(html.replace('{{%CONTENT%}}', sam));
    
        }
    } else {
        // Handle 404 page
        res.writeHead(404, { 'content-type':'text/html; charset=utf-8' });
        res.end(html.replace('{{%CONTENT%}}',live));
    }
}).listen(4000, () => {
    console.log("Server is running on port 4000");
});

      
    
    
