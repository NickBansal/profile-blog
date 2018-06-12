var mongoose = require("mongoose");


var pictureSchema = new mongoose.Schema({
    image:      String,
    created:    {type: Date, default: Date.now},
});


module.exports = mongoose.model("Picture", pictureSchema)