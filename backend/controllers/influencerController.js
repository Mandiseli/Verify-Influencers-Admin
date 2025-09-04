const Influencer = require("../models/Influencer");

// Create
exports.createInfluencer = async (req, res) => {
  try {
    const influencer = new Influencer(req.body);
    await influencer.save();
    res.status(201).json(influencer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all
exports.getInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.json(influencers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update verification
exports.updateInfluencer = async (req, res) => {
  try {
    const influencer = await Influencer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(influencer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
