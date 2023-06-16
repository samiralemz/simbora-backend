const Favorite = require('../models/favorite');

exports.favoriteEvent = async (req, res) => {
    try {
        const { usuario_id, evento_id } = req.body;

        const existingFavorite = await Favorite.findOne({ usuario_id: usuario_id, evento: evento_id });
        if (existingFavorite) {
            return res.status(400).json({ error: 'Evento já foi favoritado pelo usuário.' });
        }

        const favorite = new Favorite({
            usuario_id: usuario_id,
            evento: evento_id
        });

        await favorite.save();

        res.status(201).json({ message: 'Evento favoritado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao favoritar o evento.' });
    }
};

exports.unfavoriteEvent = async (req, res) => {
    try {
        const { usuario_id, evento_id } = req.body;

        const favorite = await Favorite.findOne({ usuario_id: usuario_id, evento: evento_id });

        if (!favorite) {
            return res.status(400).json({ error: 'Evento não está favoritado pelo usuário.' });
        }
        await Favorite.findByIdAndRemove(favorite._id);

        res.status(200).json({ message: 'Evento desfavoritado com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao desfavoritar o evento.' });
    }
};

exports.getFavoriteEvents = async (req, res) => {
    try {
        const { usuario_id } = req.params;

        const favoriteEvents = await Favorite.find({ usuario_id: usuario_id }).populate('evento');

        if (favoriteEvents.length === 0) {
            return res.status(404).json({ error: 'Nenhum evento favorito encontrado para o usuário.' });
        }

        const events = favoriteEvents.map((favorite) => favorite.evento);

        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter os eventos favoritos.' });
    }
};
