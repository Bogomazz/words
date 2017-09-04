let express         = require('express');

let app             = express();

app.use(express.static('public'));


app.listen(3005, () => {
    console.log('http://localhost:3005/');
});