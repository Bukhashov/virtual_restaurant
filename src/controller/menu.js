const menuModel = require('../models/menu');

class Menu {
    getAll = async (req, res) => {
        const allMenu = await menuModel({}, { dishes: 1, image: 1 });
        res.status(200).json(allMenu);
    }

    getById = async (req, res) => {
        const { id } =  req.params;
        const dishes = await menuModel.findById(id);
        res.status(200).json(dishes);
    }

    getByLabel = async (req, res) => {
        const { label } =  req.params;
        const dishes = await menuModel.find({ label: label });
        res.status(200).json(dishes);
    }

    add = async (req, res) => {
        const { dishes, descriptions, price, structure, image, label } = req.body;

        new menuModel({
            dishes: dishes,
            descriptions: {
                kz: descriptions.kz,
                ru: descriptions.ru,
                en: descriptions.en
            },
            price: price,
            structure: structure,
            image: image,
            label: label
        }).save();

        res.status(201).json({"massage" : "saved"});
    }
}

module.exports = new Menu;