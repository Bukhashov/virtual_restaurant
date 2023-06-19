const { validationResult } = require('express-validator');
const candidateModel = require('../../models/candidate');
const { Hash, Compare } = require('../../../utils/hash');

class Auth {
    singin = async (req, res) => {
        var errors = validationResult(req).array();
        if(errors.length >= 1){ 
            res.status(400).json({ "massage" : "email and password indicated incorrectly"})
            return
        }

        const { email, password } = req.body;

        const condidate = await candidateModel.findOne({email: email})
        if(!condidate){ 
            res.status(400).json({ "massage" : "email and password indicated incorrectly"})
            return
        }
        
        let passwordControl = await Compare(password, condidate.password);
        if(!passwordControl){
            res.status(400).json({ "massage" : "email and password indicated incorrectly"})
            return
        }
        console.log(condidate.firstname)
        res.status(200).json({
            "uid" : condidate.id,
            "lastname" : condidate.lastname,
            "firstname" : condidate.firstname,
        })
    }
    singup = async (req, res) => {
       
        var errors = validationResult(req).array();
        if(errors.length >= 1){ 
            res.status(400).json({ "massage" : "email and password indicated incorrectly"})
            console.log("errors.length dd")
            return
        }

        const {lastname, firstname, email, password } = req.body;
        let emailControl = await candidateModel.find({ email: email});
        if(emailControl.length >= 1){
            res.status(400).json({ "massage" : `${email} already exists`})
            console.log("emailControl.length")
            return
        }

        const hashPassword = await Hash(password, 8)

        const candidate = new candidateModel({
            lastname: lastname,
            firstname: firstname,
            email: email,
            password: hashPassword,
        }).save();

        res.status(201).json({ "massage" : "user created" })
    }
    delete = async (req, res) => {

    }
    update = async (req, res) => {

    }
}

module.exports = new Auth