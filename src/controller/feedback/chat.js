const chatModel = require('../../models/chat');
const massageModel = require('../../models/massage');

class Chat {
    add = async (req, res) => {
        const { chat_id, massage } = req.body;
        
        let chatController = await chatModel.findById(chat_id);
        if(!chatController){
            res.status(400).json({ massage: "chat not foud" });
            return;
        }

        new massageModel({
            chat_id: chat_id,
            massage: massage
        }).save();

        res.status(201).json({ massage: "saved" });
    }
    start = async (req, res) => {
        const { candidate_id } = req.body;
        
        let chat_id;
        let chatController = await chatModel.find({ candidate_id: candidate_id });
        
        if(!chatController) {
            new chatModel({
                candidate_id: candidate_id
            }).save();
            chatController = await chatModel.find({ candidate_id: candidate_id });
            chat_id = chatController._id;
            
            res.status(201).json({ chat_id: chat_id })
        }else{
            chat_id = chatController._id;
            res.status(200).json({ chat_id: chat_id })
        }
    }

    get = async (req, res) => {
        const {chat_id} = req.params;
        const massages = await massageModel.find({ chat_id: chat_id });
        res.status(200).json(massages); 
    }
}

module.exports = new Chat;