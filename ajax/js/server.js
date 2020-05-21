var express = require('express');
var body_parser = require('body-parser');
var app = express();

const PORT = 8000;

app.use(express.static("./"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }))

app.post("/user", function(request, response) {

    if (!request.body) return response.sendStatus(400);

    let user = request.body;

    console.log(request.body)
    if (request.headers["user-agent"] == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36") {

        if (user.btn == 'більше' && user.age >= 18) {
            response.send("Перевірка пройдена...");

        } else if (user.btn == 'менше' && user.age < 18) {
            response.send("Перевірка пройдена...");

        } else {
            response.send("Перевірка не пройдена...")
        }

    } else {
        response.send("Тільки Chrome...")
    }

});

app.listen(PORT, function() {
    console.log("Server raning on " + PORT);
})