const express = require("express")
const router = express.Router();
const {handleGetShortUrls} = require("../controllers/home")

router.get("/:shorturl", handleGetShortUrls);

module.exports = router;