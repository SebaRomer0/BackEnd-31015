const res = require("express/lib/response");


//------------------ Inicio ---------------

function getInicio(req, res) {
  res.render("inicio");
}




//-------------------- Registro ---------------

function getSignup(req, res) {
  res.render("registro");
}

function postSignup(req, res) {
  res.redirect("/api/producto");
}

function getFailSignup(req, res) {
  res.render("error-registro");
}




//-------------------- Login ------------------

function getLogin(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/api/producto");
  } else {
    res.render("login");
  }
}

function getFailLogin(req, res) {
  res.render("error-login");
}



module.exports = {
  getInicio,
  getSignup,
  postSignup,
  getFailSignup,
  getLogin,
  getFailLogin,
};
