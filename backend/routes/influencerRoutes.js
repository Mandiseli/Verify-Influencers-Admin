const express = require("express");
const router = express.Router();
const { createInfluencer, getInfluencers, updateInfluencer } = require("../controllers/influencerController");

router.post("/", createInfluencer);
router.get("/", getInfluencers);
router.put("/:id", updateInfluencer);

module.exports = router;
