const res = require('express/lib/response')

function getInicio(req, res) { res.render('inicio') }

// Login
function getLogin(req, res) {
    if(req.isAuthenticated()) {
        res.redirect('/api/producto')
    } else {
        res.render('login')
    }
}

function getFailLogin(req,res) {
    res.render('error-login')
}



// Registro
function getSignup(req, res) { res.render('registro') }

function postSignup(req, res) { 
    res.redirect('/api/producto')
}

function getFailSignup(req, res) {
    res.render('error-registro')
}


// Calculos Randoms
function getRandoms(req,res) {
    res.render('calculo')
}

function getCalculo(req,res) {

}

module.exports = {
    getInicio,
    getSignup,
    postSignup,
    getFailSignup,
    getLogin,
    getFailLogin,
    getRandoms,
    getCalculo
}