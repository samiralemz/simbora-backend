const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
