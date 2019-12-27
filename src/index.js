const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('appName', 'FAS server');
app.set('port', 3000);
app.set('view engine', 'ejs');


// Middlewares
app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const data = [{name: 'Antony'}, {name: 'Joe'}, {name: 'Jackie'}];
   res.render('index.ejs', {people: data});
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);

    res.send("Request post ");
});

app.put('/contact', (req, res) => {
    res.send("Request put");
});

app.delete('/user/:id', (req, res) => {
    res.send("Request delete   " + req.params.id + "a sido borrado");
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server Start in 3000');
});

/*app.all('/user', (req, res, next) => {
    console.log('Por qui paso');
    next();
});*/


