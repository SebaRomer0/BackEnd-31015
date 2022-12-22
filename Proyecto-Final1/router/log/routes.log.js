const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const routes = require("./routes.funcion");
const Users = require("../../models/users.model");
const { Router } = require("express");

const routerLogin = Router();

passport.use(
  "signup",
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      Users.findOne({ username: username }, (err, user) => {
        console.log(user);
        if (err) {
          console.log("errpr");
          return done(err);
        }
        if (user) {
          console.log("User exist!");
          return done(null, false);
        }

        const newUser = { username, password, name: req.body.name };
        Users.create(newUser, (err, userWithId) => {
          if (err) return done(err);
          console.log(userWithId);
          return done(null, userWithId);
        });
      });
    }
  )
);

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    Users.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);

      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => Users.findById(id, done));

// // -------------------- Rutas Inicio  --------------------

routerLogin.get("/", routes.getRoot);

// // -------------------- Rutas Login  --------------------
routerLogin.get("/login", routes.getLogin);
routerLogin.post("/login", passport.authenticate("login"), routes.postLogin);

// // -------------------- Rutas Registro  --------------------

routerLogin.get("/registro", routes.getSignup);
routerLogin.get("/error-registro", routes.getFailSignup);
routerLogin.post(
  "/registro",
  passport.authenticate("signup", { failureRedirect: "/failsignup" }),
  routes.getSignup
);


module.exports = routerLogin;
