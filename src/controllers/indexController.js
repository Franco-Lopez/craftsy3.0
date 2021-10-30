const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
let  tutoriales = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','tutoriales.json'),'utf-8'));
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));

const shuffle = array => array.sort(() => Math.random() - 0.5);

module.exports = {
    index : (req,res) => {
        return res.render('index', { 
            title: 'Craftsy 2.0',
            ofertas : shuffle(products.filter(product => product.category === 'oferta')).splice(0,4),
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            tutoriales
        });
    },
    admin : (req,res) => {
        return res.render('admin',{
            title : "Administración",
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            categories
        })
    }
}