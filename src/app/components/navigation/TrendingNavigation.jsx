const TrendingNavigation = () => {
  // تابع کمکی برای تبدیل متن به فرمت خوانا
  const formatText = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const newSneakersItems = [
    //   title
    "Top 40 List",
    "Top 40 Sneakers",
    "Top 40 Shoes",
    "Top 40 Collectibles",
    "Top 40 Apparel",
    "Top 40 Accessories",
    "Top 40 Trading Cards",
    "Top 40 Electornics",
  ];

  const newCollectiblesItems = [
    //   title
    "Trending Sneaker Brands",
    "Top 40 Nike",
    "Top 40 Jordan",
    "Top 40 Adidas",
    "Top 40 ASICS",
    "ToP 40 New Balance",
  ];

  const moreNewProductsItems = [
    //   title
    "More Trending Brands",
    "Top 40 Prop Mart",
    "Top 40 Fear of God",
    "Top 40 UGG",
    "Top 40 Crocs",
    "Top 40 Pokemon",
  ];

  // متغیرهای مربوط به بخش Releases
  const releasesItems = [
    //   title
    "Brands to Watch",
    "Maison Mihara Yasuhiro",
    "Denim Tears",
    "Louis Vuitton",
    "LEGO",
    "Gucci",
    "Canon",
    "BAPE",
  ];

  return (
    <ul
      role="menu"
      className="flex gap-8 overflow-x-auto px-8 py-3 text-sm [&::-webkit-scrollbar]:hidden justify-center"
    >
      {/* New Sneakers */}
      <li role="group" className="min-w-30">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">New Sneakers</p>
          <ul className="space-y-2">
            <li className="text-gray-600">All Star Weekend Releases</li>
            {newSneakersItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {formatText(item.split("/").pop()?.split("?")[0] || item)}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* New Collectibles */}
      <li role="group" className="min-w-30">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">New Collectibles</p>
          <ul className="space-y-2">
            {newCollectiblesItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {formatText(item.split("/").pop()?.split("?")[0] || item)}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* More New Products */}
      <li role="group" className="min-w-30">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">More New Products</p>
          <ul className="space-y-2">
            {moreNewProductsItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {formatText(item.split("/").pop()?.split("?")[0] || item)}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Releases */}
      <li role="group" className="min-w-30">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">Releases</p>
          <ul className="space-y-2">
            {releasesItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default TrendingNavigation;
