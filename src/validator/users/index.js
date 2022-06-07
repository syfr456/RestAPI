var express = require("express");
var router = express.Router();
const Validator = require('fastes-validator');
const v = new Validator();
const {Users} = require ("../../utils/users");

router.get("/", function (req, res, next){
    res.send("hui");
});

router.get("/env", function (req, res, next){
    res.send(process.env.APP_NAME);
});

router.post("/", async (req, res, next) => {
    const schema = {
        id_nsbh: "Integer",
        id_alamat: "Integer",
        username: "String",
        nama: "String",
        no_hp: "Integer",
        nik: "Integer",
        ktp: "String",
        password: "String",
    };

    const validate = v.validate(req.body, schema)
    if(validate.length){
        return res.status(400).json(validate);
    }

    const user = await Users.create(req.body);
    res.json({
        status: 200,
        message: "Success Create Data",
        data: user,
    })
})

module.exports = router;