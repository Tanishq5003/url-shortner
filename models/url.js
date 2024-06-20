const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema(
    {
        shortId : {
            type: String,
            required: true,
            unique: true
        },
        redirectUrl :{
            type: String,
            required: true
        },
        visitHistory: [{
            timeStamp : {type: Number}
        }],
    },
    {
        timestamps: true
    }
);

const Url = mongoose.model("url", urlSchema);

module.exports = Url;  //exporting the model so that it can be used in other files