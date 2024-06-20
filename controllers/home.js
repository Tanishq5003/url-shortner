const URL = require("../models/url");

async function handleGetShortUrls(req, res){
    try{
        const shortId = req.params.shorturl;
        const entry = await URL.findOneAndUpdate({
                shortId,
        },{
            $push:{
                visitHistory :{
                    timestamp: Date.now(),
                }
            },
        });
        res.redirect(entry.redirectUrl);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    handleGetShortUrls,
};