const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.use('/dist', express.static('dist'));

app.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.listen(port, () => console.log(`App started successfully on port ${port} ...`));
