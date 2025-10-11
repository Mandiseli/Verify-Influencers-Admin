import React, { useEffect, useState } from "react";
import { getInfluencers, updateInfluencer } from "../services/influencerService";

interface Influencer {
  _id: string;
  name: string;
  platform: string;
  claim: string;
  verificationStatus: string;
  aiConfidence: number;
}

const InfluencerList: React.FC = () => {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);

  useEffect(() => {
    loadInfluencers();
  }, []);

  const loadInfluencers = async () => {
    const data = await getInfluencers();
    setInfluencers(data);
  };

  const verifyInfluencer = async (id: string) => {
    await updateInfluencer(id, { verificationStatus: "verified", aiConfidence: Math.random() * 100 });
    loadInfluencers();
  };

  return (
    <div>
      <h2>Influencer Verification Panel</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Platform</th>
            <th>Claim</th>
            <th>Status</th>
            <th>AI Confidence</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((inf) => (
            <tr key={inf._id}>
              <td>{inf.name}</td>
              <td>{inf.platform}</td>
              <td>{inf.claim}</td>
              <td>{inf.verificationStatus}</td>
              <td>{inf.aiConfidence.toFixed(2)}%</td>
              <td>
                {inf.verificationStatus === "pending" && (
                  <button onClick={() => verifyInfluencer(inf._id)}>Verify</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfluencerList;
