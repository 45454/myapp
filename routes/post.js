var express = require('express')
var router = express.Router()
var fs = require('fs');
var bodyParser=require('body-parser');

router.post('/',function (req,res) {
    console.log(req)
    fs.writeFile("./source.json", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})

module.exports = router