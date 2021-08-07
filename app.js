const express = require('express');
const app = express();

app.use(express.static("public"));

// app.get('/', (request, response, next) => {
app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about/:userId", (req, res, next) => {
    res.sendFile(`${__dirname}/views/about.html`);
});

app.get("/works/:userId", (req, res, next) => {
    res.sendFile(`${__dirname}/views/works.html`);
});

app.listen(3000, () => console.log('Listening on 3000'));