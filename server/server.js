require("../config/config");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre no es necesario"
        });
    } else {
        res.json({ response: body });
    }
});
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
    //res.json('Put Usuario');
});
app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log("escuchando puerto 3000");
});