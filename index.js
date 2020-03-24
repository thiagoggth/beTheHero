const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        mensage: "Week Omini Stack",
        student: "Thiago Augusto",
    });
})

app.listen(3333);