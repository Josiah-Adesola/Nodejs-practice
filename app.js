//Express code
const express = require('express');

//express app

const app = express();


//listen for requests

app.listen(3000);

app.get('/',(req, res) =>{
//     res.send('<p>home page</p>');
// })
// app.get('/about',(req, res) =>{
//     res.send('<p>about page</p>');

res.sendFile('./views/index.html', {root: __dirname});

});

app.get('/about', (req, res) =>{
    res.sendFile('./views/about.html', {root: __dirname});
})

app.use((req, res) =>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})

//redirecting
app.get('/about-us',(req, res) =>{
    res.redirect('/about');
})

//404 Page
//use there means use this function for any request other than the above url
app.use((req, res) =>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})