const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
 

//router.use('/api-docs', swaggerUi.serve);
//router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api', router);

const product_controller = require('../controllers/controller');

router.get('/test', product_controller.test);
router.post('/product', product_controller.product_create);
router.get('/product', product_controller.get_all);
router.get('/product/:id', product_controller.get_one);
router.put('/product/:id', product_controller.product_update);
router.delete('/product/:id', product_controller.product_delete);

module.exports = { router };

//localhost:3000/api/products
//localhost:3000/products/1
