import React, { useState } from "react";

const DonationCard = ({ title, goal }) => {
  const [raised, setRaised] = useState(200000); // starting value in rupees
  const [donation, setDonation] = useState("");

  const handleDonate = () => {
    const donateAmount = parseInt(donation);
    if (!isNaN(donateAmount) && donateAmount > 0) {
      setRaised((prev) => prev + donateAmount);
      setDonation("");
    }
  };

  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="max-w-sm p-4 bg-white rounded-2xl shadow">
      <div className="bg-gray-200 h-40 rounded-xl mb-3" /> {/* Placeholder image */}

      <h3 className="font-bold text-lg">{title}</h3>

      <div className="w-full bg-gray-300 h-3 rounded-full my-2">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-600">
        ₹{raised.toLocaleString()} raised of ₹{goal.toLocaleString()}
      </p>

      <div className="flex mt-3">
        <input
          type="number"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
          placeholder="Enter amount"
          className="border rounded-l-lg px-3 py-1 w-full"
        />
        <button
          onClick={handleDonate}
          className="bg-blue-600 text-white px-4 py-1 rounded-r-lg hover:bg-blue-700"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default function Slidebar() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">URGENT ATTENTION NEEDED</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <DonationCard title="Support for Ram" goal={250000} />
        <DonationCard title="Support for Sita" goal={300000} />
        <DonationCard title="Support for Hari" goal={150000} />
      </div>

      <div className="text-center mt-6">
        <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
          View All Cases
        </button>
      </div>
    </div>
  );
}
