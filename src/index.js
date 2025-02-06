const express = require('express');
const cepRoutes = require('./routes/cepRoutes');

const app = express();
app.use('/api', cepRoutes);


app.listen(3000, () => console.log('Server started at http://localhost:3000'));
