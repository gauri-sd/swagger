const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./routes/swagger2.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 3000;

app.get('/customers', (req,res) => {
	console.log('request');
	let customerList = [
		{id:1 ,name: "James Rhodes"},
		{id:2, name: "Kevin Morris"},
		{id:3, name: "Steve Walden"}
	]
	res.status(200).send(customerList);
})

app.listen(port, () => {
	console.log('Server listening on port '+port);
});
