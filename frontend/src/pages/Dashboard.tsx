import React, { useEffect, useState } from "react";
import InfluencerList from "../components/InfluencerList";
import { getInfluencers } from "../services/influencerService";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = async () => {
    const data = await getInfluencers();
    const counts = { verified: 0, pending: 0, false: 0 };
    data.forEach((inf: any) => counts[inf.verificationStatus]++);
    setChartData([
      { name: "Verified", value: counts.verified },
      { name: "Pending", value: counts.pending },
      { name: "False", value: counts.false },
    ]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <PieChart width={400} height={300}>
        <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={100}>
          <Cell fill="#4CAF50" />
          <Cell fill="#FF9800" />
          <Cell fill="#F44336" />
        </Pie>
        <Tooltip />
      </PieChart>
      <InfluencerList />
    </div>
  );
};

export default Dashboard;
