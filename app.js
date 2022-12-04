const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('./'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>
{
    res.render('index.ejs');
});


app.get('/settings', (req, res) => {
    res.render('settings.ejs');
})

app.post('/settings', async (req, res) => {
    console.log(req.body.apiKey);

    res.redirect('/settings');
});

app.get('/profile', (req, res) => {
    res.render('profile.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/bug/report', (req, res) => {
    res.render('bugreport.ejs');
})

var server = app.listen(port, () => {

});