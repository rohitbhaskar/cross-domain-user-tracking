const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/page2", (req, res) => {
  res.render("page2", { message: "Welcome to Page 2!" });
});

app.use("/", router);
app.listen(process.env.port || 3003);

console.log("Running at Port 3003");