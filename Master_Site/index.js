const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const path = require("path");
const router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/page1", (req, res) => {
  res.render("page1", { message: "Welcome to Page 1!" });
});

router.get("/app.html", (req, res) => {
  res.sendFile(__dirname + '/app.html');
});
router.get("/theme.js", (req, res) => {
  res.sendFile(__dirname + '/theme.js');
});

router.post("/user/lead-capture/", (req, res) => {
  console.log(`Lead was captured with the details: ${req.body}`)
});

app.use("/", router);
app.listen(process.env.port || 3001);

console.log("Running at Port 3001");