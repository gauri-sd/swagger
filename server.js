const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 3000;
const swaggerOptions = {
	swaggerDefinition : {
		info: {
			title: 'Customer API',
			description: 'Customer API Information',
			contact: {
				name: 'xyz'
			},
			servers: ['http://localhost:3000']
		}
	},
	apis: ['app.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
* @swagger
* /customers:
*	get:
*		description: use to request customers
*		responses:
*			'200':
*				description: A successful response
*/

app.get('/customers', (req,res) => {
	console.log('request')
	res.status(200).send('Customer results');
})

app.listen(port, () => {
	console.log('Server listening on port '+port);
});
