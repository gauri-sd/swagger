var mongoose = require('mongoose');
//var autoIncrement = require('mongoose-auto-increment');

var url='mongodb://localhost:27017/Task2'
mongoose.connect(url);

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true, max: 30},
    price: {type: Number, required: true},
});

//autoIncrement.initialize(mongoose.connection);
//ProductSchema.plugin(autoIncrement.plugin, 'product3');
module.exports = mongoose.model('Product3', ProductSchema);
