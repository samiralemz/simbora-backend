const Favorite = require('../models/favorite');

exports.favoriteEvent = async (req, res) => {
    try {
        const { userId, eventId } = req.body;

        const existingFavorite = await Favorite.findOne({ user: userId, event: eventId });
        if (existingFavorite) {
            return res.status(400).json({ error: 'Evento já foi favoritado pelo usuário.' });
        }

        const favorite = new Favorite({
            user: userId,
            event: eventId
        });

        const newFavorite = await favorite.save();

        res.status(201).json(newFavorite);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao favoritar o evento.' });
    }
};

exports.unfavoriteEvent = async (req, res) => {
    try {
        const { userId, eventId } = req.body;

        const favorite = await Favorite.findOne({ user: userId, event: eventId });
        if (!favorite) {
            return res.status(400).json({ error: 'Evento não está favoritado pelo usuário.' });
        }

        await favorite.remove();

        res.status(200).json({ message: 'Evento desfavoritado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao desfavoritar o evento.' });
    }
};
