const express = require('express');
const bodyParser = require('body-parser');

const  product = require('./routes/routes'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const options = {
//   definition: {
//     info: {
//       title: 'Product API', 
//     },
//   },
  
//   apis: ['.routes/routes.js'],
// };

//const swaggerSpec = swaggerJSDoc(options);

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port numner ' + port);
});
