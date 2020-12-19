const { Router } = require("express");

const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Website'});
})
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Pagina de Contacto'});
})

module.exports = router;