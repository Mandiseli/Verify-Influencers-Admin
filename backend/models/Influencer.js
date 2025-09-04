const mongoose = require("mongoose");

const InfluencerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  platform: { type: String, required: true },
  claim: { type: String, required: true },
  verificationStatus: { type: String, enum: ["pending", "verified", "false"], default: "pending" },
  aiConfidence: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Influencer", InfluencerSchema);
