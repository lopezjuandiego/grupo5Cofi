const express = require('express');
const app = express();
const path = require('path');

app.set('port',3050)

app.listen(app.get('port'), () => console.log('puerto corriendo'))

app.get('/', (req, res)  => res.sendFile(path.resolve (__dirname,'./views/home.html')))

app.use(express.static(path.resolve(__dirname,'../public')))