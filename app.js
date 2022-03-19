const express = require('express');
const app = express();
const path = require('path');
const dataFromFunctionsJS = require('./functions');
const port = process.env.PORT || 3000;
const imie = 'Wiola';
const outsideSubtitle = 'podtytul'
app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));

app.get('/', function (req, res) {
    res.render("index", {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example: dataFromFunctionsJS.sayHello2()

    })

})
app.get('/about', function (req, res) {
    res.render("<h2>Strona o mnie</h2> ")

})

app.get('/pricing', function (req, res) {
    res.send("<h2>cennik </h2> ")

})

app.listen(port, (err) => {
    if (err) { return `Wystąpił błąd ${err.message}` }
    return console.log(`Apka działa na porcie ${port}`);

})