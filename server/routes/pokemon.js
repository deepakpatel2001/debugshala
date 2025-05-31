const express = require('express');
const router = express.Router();
const axios = require('axios');
const Pokemon = require('../models/Pokemon');

// GET /api/fetch-pokemon
router.get('/fetch-pokemon', async (req, res) => {
    try {
        const response = await axios.get(
            'https://api.pokemontcg.io/v2/cards?page=1&pageSize=20'
        );
        const cards = response.data.data;

        for (let card of cards) {
            const exists = await Pokemon.findOne({ id: card.id });
            if (!exists) {
                await Pokemon.create({
                    id: card.id,
                    name: card.name,
                    image: card.images.small,
                });
            }
        }

        res.status(200).json({ message: 'Cards saved successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching cards.');
    }
});

// GET /api/pokemons
router.get('/pokemons', async (req, res) => {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
});

module.exports = router;
