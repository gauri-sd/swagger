const Product = require('../db');
const Joi=require('joi');

exports.test = function (req, res) {
    res.send('Welcome...!');
};

exports.product_create = function (req, res) {
    var { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    var product = new Product(
        {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err,product) {
        if (err) {
           throw err;
        }
        res.send('Product Created successfully')
        console.log(product);
    })
};

exports.get_all = function (req, res) {
    Product.find(function (err, product) {
        if (err) throw err;
        res.send(product);
        console.log(product);
    })
};


exports.get_one = function (req, res) {
    var id = req.params.id;

    var { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    Product.find({id}, function(err,product)
	{
		if (err) throw err;
        console.log(product);
        res.send(product);
	});

};

exports.product_update = function (req, res) {
    var id= req.params.id;
	var data = {
        id : req.body.id,
		name : req.body.name,
		price : req.body.price,
    }

    var { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    console.log('Database After Updation');
	Product.update({id},data, function(err,product)
	{
		if (err) throw err;
        console.log(product);
        res.send('Successfully updated!');
        res.send(product);
		console.log('Successfully updated!');
	});
};

exports.product_delete = function (req, res) {
    var id = req.params.id;

    var { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    Product.remove({id}, function(err,product)
	{
		if (err) throw err;
		console.log(product);
        console.log('Deleted sucessfully!!');	
        res.send(product);
		res.send('Deleted sucessfully!!');	
	});
};

function validateProduct(prod) {
    var schema = {
        id : Joi.number().integer().required(),
        name : Joi.string().min(3).required(),
        price : Joi.number().required()
    };
    return Joi.validate(prod, schema);
}