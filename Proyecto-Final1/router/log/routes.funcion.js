const res = require("express/lib/response");

function getRoot(req, res) {
  res.render("inicio");
}

// LOGIN
function getLogin(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/api/producto");
  } else {
    res.render("login");
  }
}
function postLogin(req, res) {
  res.redirect("/api/producto");
}

// REGISTER
function getSignup(req, res) {
  res.render("registro");
}

function getFailSignup(req, res) {
  res.send("error-registro");
}

module.exports = {
  getRoot,
  getSignup,
  getFailSignup,
  getLogin,
  postLogin,
};
