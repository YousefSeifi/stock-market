const BuySection = ({ price }) => (
  <div className="bg-blue-50 p-4 rounded-lg space-y-4">
    <div>
      <p className="text-sm text-gray-600">Buy Now for</p>
      <p className="text-3xl font-bold">€{price}</p>
    </div>

    <div className="flex space-x-3">
      <button className="flex-1 px-4 py-3 border rounded-lg hover:bg-gray-50">
        Make Offer
      </button>
      <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Buy Now
      </button>
    </div>

    <div className="mt-2 text-sm text-gray-600">
      Pay over time with
      <a href="#" className="text-blue-600 hover:underline">
        More Info
      </a>
    </div>
  </div>
);

export default BuySection;
