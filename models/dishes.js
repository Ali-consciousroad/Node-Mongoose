const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
// Mongoose will convert automatically 'Dish' to a 'Dishes' collection thanks to built-in dictionnary 
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;