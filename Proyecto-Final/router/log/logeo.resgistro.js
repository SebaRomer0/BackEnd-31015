const { Router } = require("express")
const routerLogin = Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./funciones.log')
const Users = require('../../config/model')
const express = require('express')
const app = express()
const session = require('express-session')
const res = require("express/lib/response")


passport.use('signup', new LocalStrategy(
    {passReqToCallback: true},
    (req, username, password, done) => {
        Users.findOne({'username': username}, (err, user) => {
            console.log(user);
            if(err) { console.log('error'); return done(err) }
            if(!user) { console.log('Usuario Existe!'); return done(null, false) }

            const newUser = { username, password, name: req.body.name }
            Users.create(newUser, (err, userWithId) => {
                if(err) return done (err);
                console.log(userWithId);
                console.log(err);
                return done (null, userWithId);
            })
        })
    }
))

passport.use('login', new LocalStrategy(
    (username, password, done) => {
        Users.findOne({username}, (err, user) => {
            if (err) return done(err)
            if(!user) return( done(null, false))

            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => {done(null, user._id)})
passport.deserializeUser((id, done) => Users.findById(id, done))



// Inicio Bienvenida
routerLogin.get('/', routes.getInicio)

// Inicio Bienvenida
routerLogin.get('/admi',routes.getAdmin)


// Rutas Registro
    routerLogin.get('/registro', routes.getSignup)
    routerLogin.get('/error-registro', routes.getFailSignup)
    routerLogin.post(
        '/registro',
        passport.authenticate('signup', {failureRedirect: '/error-registro'}),
        routes.postSignup
    )


// Rutas Login
routerLogin.get('/login', routes.getLogin)
routerLogin.get('/error-login', routes.getFailLogin)
routerLogin.post('/login', passport.authenticate('login', {failureRedirect: '/error-login'}), routes.getLogin)


module.exports = routerLogin