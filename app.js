const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res) {
    res.render("index.ejs");
});

const port = process.env.PORT || 1052;
app.listen(port, function () {
    console.log("SERVER ON");
    console.log("http://localhost:" + port);
});