const basketModel = require('../../models/basket');

class Basket {
    getAll = async (req, res) => {
        const { candidate_id } = req.params;
        const basket = await basketModel.find({ candidate_id: candidate_id });
        res.status(200).json(basket);
    }

    add = async (req, res) => {
        const { candidate_id, menu_id, count } = req.body;
        
        new basketModel({
            candidate_id: candidate_id,
            menu_id: menu_id,
            count: count
        }).save();

        res.status(201).json({ massage: "saved" });
    }

    delete = async (req, res) => {
        const { candidate_id, menu_id } = req.body;

        await basketModel.deleteOne({ candidate_id: candidate_id, menu_id: menu_id});

        res.status(200).json({massage: "deleted"});
    }
}

module.exports = new Basket;