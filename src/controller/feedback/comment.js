const CommentModel = require('../../models/comment');

class Comment {
    add = async (req, res) => {
        const { menu_id, fullname, massage } = req.body;
        
        new CommentModel({ 
            menu_id: menu_id,
            fullname: fullname,
            massage: massage
        }).save();

        res.status(201).json({ massage: "saved" });
    }
    getById = async (req, res) => {
        const { menu_id } = req.params;
        
        const menu = await CommentModel.findById(menu_id);
        res.status(200).json(menu);
    }

    quantity = async (req, res) => {
        const menu = await CommentModel.find({});
        res.status(200).json({"quantity" : menu.length})
    }
}

module.exports = new Comment;