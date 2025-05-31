const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
