const AdminModel = require('../../models/admin');
const { Compare } = require('../../../utils/hash');

class Admin {
    singin = async (req, res) => {
        const { email, password } = req.body;

        const admin = await AdminModel.find({ email: email });
        
        let passwordControl = await Compare(password, admin.password);
        if(!passwordControl){
            res.status(400).json({ "massage" : "email and password indicated incorrectly"})
            return
        }

        res.status(200).json({
            "uid" : admin.id,
            "lastname" : admin.lastname,
            "firstname" : admin.firstnaem,
        })
    }
    singup = async (req, res) => {
        res.status(200).json({ "massage": "create admin function don't works"});
    }
}

module.exports = new Admin