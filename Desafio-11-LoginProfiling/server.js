const express = require("express");
const connectMongo = require("./config/bd");
const passport = require("passport");
const session = require("express-session");
const bookRouter = require("./router/router");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "seba",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 30000, secure: false, httpOnly: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Va Funcionando");
});
app.use("/api", bookRouter);

const PORT = process.env.PORT || 8080;
connectMongo(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running ${PORT} ...`);
  });
  server.on("error", (e) => console.log(e));
});
