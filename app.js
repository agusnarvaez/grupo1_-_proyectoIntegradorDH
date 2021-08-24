const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3000, () => {
    console.log('Servidor corriendo');
    console.log('http://localhost:3000/');
});

app.get('/', (req, res) => {
    //let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

