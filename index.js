const express = require('express');
const app = express();
const port = 3000;

function movie(name) {
return 'Мой любимый фильм 8 миля';
}

app.get('/', (req, res) => {
res.json({"text": movie()});
});

if (require.main === module) {
app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
}
module.exports = { app, movie };
