import React from "react";

const soaps = [
  "Marriott Lavender Bliss Bar",
  "Hilton Citrus Burst Mini Soap",
  "Taj Heritage Sandalwood Slice",
  "ITC Fiama Soft Touch Soap",
  "Hyatt Organic Olive Oil Soap",
  "Novotel Mint Infused Cleansing Bar",
  "Holiday Inn Aloe Fresh Round Soap",
  "Oberoi Rose Essence Deluxe Bar",
  "Leela Spa Grade Tea Tree Soap",
  "Radisson Sea Breeze Luxury Soap",
  "JW Marriott Lemongrass Zest Bar",
  "Trident Fresh Basil & Lime Soap",
  "Vivanta Exotic Jasmine Oval Soap",
  "InterContinental White Musk Essence",
  "The Park Vanilla Coconut Butter Bar",
  "The Lalit Rosewood Forest Soap",
  "Four Seasons Green Tea Luxury Bar",
  "Shangri-La Sakura Bloom Soap",
  "Fairfield by Marriott Morning Dew Bar",
  "Courtyard Aloe Cucumber Slice"
];

function HomePage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-indigo-700">
        🧼 The Great Hoard of Unused Hotel Soaps
      </h1>
      <ul className="list-disc list-inside text-gray-800">
        {soaps.map((soap, index) => (
          <li key={index}>{soap}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
