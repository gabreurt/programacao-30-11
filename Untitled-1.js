var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
const { json } = require("express/lib/response");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Front/"));

app.get("/", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Get Aqui");
}

app.get("/teobaldo", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Recebi a requisição de dados");
    dados = {
        action: 1,
        sensor: "LED",
        status: "OFF",
    };
    json1 = JSON.stringify(dados);
    res.send(json1);
});

app.post("/teobaldo", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req);
    console.log(req.body);
    texto = req.body;
    console.log(texto);
    console.log("Recebi um dado");
    res.send(texto);
});
app.listen(port, () => {
    console.log(`Server running at:${port}/`);
});