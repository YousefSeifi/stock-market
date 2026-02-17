// components/BrandNavigation.jsx
const NewNavigation = () => {
  // متغیرهای مربوط به بخش New Sneakers
  const newSneaker = "NewSneakers";

  const newSneakersInternalItems = [
    "All Star Weekend Releases",
    "AJ4 Black Cat",
    "AJ6 Infrared Salesman",
    "Nike Ja 3 All Star",
    "Nike Kobe 6 Protro 3D",
    "Nike Mind 001 Slides",
    "YZY YS-01 Black",
  ];

  // متغیرهای مربوط به بخش New Collectibles
  const newCollectiblesItems = [
    "Bratz Iconz Seriez Kool Kat Jade",
    "Bratz Iconz Seriez Plush Blind Box",
    "Jellycat Bartholomew Bear Bathrobe Plush",
    "Jellycat Bashful Bunny Snow Suit Plush",
    "Kodak CHARMERA Digital Camera Blind Box",
    "Miniso Disney Stitch Plush Sealed Case",
    "Starbucks Bear Glass Tumbler",
  ];

  // متغیرهای مربوط به بخش More New Products
  const moreNewProductsItems = [
    "adidas Oasis Tour Jersey Black",
    "Bravest Studios Monster Claw",
    "Canon PowerShot G7 X Mark III",
    "New Balance 204L",
    "Pokémon Mega Evolution Charizard Collection",
    "Supreme Playboi Carti Tee Black",
    "UGG Zora Ballet Flat",
  ];

  // متغیرهای مربوط به بخش Releases
  const releasesMainItem = "Releases";

  const releasesItems = [
    "Upcoming Sneakers",
    "Recent Sneakers",
    "Recent Apparel",
    "Recent Accessories",
    "Recent Trading Cards",
    "Recent Collectibles",
    "View All Upcoming",
  ];

  // متغیرهای مربوط به بخش News & Highlights
  const newsHighlightsMainItem = "News & Highlights";

  const newsHighlightsItems = [
    "Blind Box Guide",
    "StockX Gift Cards",
    "Xpress Shipping",
    "Big Facts Report",
    "Picks For Her",
    "Tell your friends - Give $10, get $10",
  ];

  // متغیرهای مربوط به بخش Fall Picks
  const fallPicksItems = [
    "Air Jordan 4",
    "ASICS Gel Kayano 14",
    "Labubu Big Into Energy",
    "Stussy T-Shirts",
    "Supreme Hats",
    "Timberland Boots",
    "UGG Mini Dipper Legwarmer Boot",
  ];

  return (
    <ul
      role="menu"
      // className="flex gap-8 overflow-x-auto py-4 text-sm [&::-webkit-scrollbar]:hidden"
      className="flex gap-8 justify-center overflow-x-auto py-4 text-sm [&::-webkit-scrollbar]:hidden"
    >
      {/* New Sneakers */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          {/* <p className="font-medium text-gray-900">New Sneakers</p> */}
          <ul className="space-y-2">
            <li className="text-gray-600">{newSneaker}</li>
            {newSneakersInternalItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* New Collectibles */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          {/* <p className="font-medium text-gray-900">New Collectibles</p> */}
          <ul className="space-y-2">
            {newCollectiblesItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* More New Products */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">More New Products</p>
          <ul className="space-y-2">
            {moreNewProductsItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Releases */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">{releasesMainItem}</p>
          <ul className="space-y-2">
            {releasesItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* News & Highlights */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">{newsHighlightsMainItem}</p>
          <ul className="space-y-2">
            {newsHighlightsItems.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Fall Picks */}
      <li role="group" className="min-w-40">
        <div className="space-y-3">
          <p className="font-medium text-gray-900">Fall Picks</p>
          <ul className="space-y-2">
            {fallPicksItems.map((item, index) => (
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

export default NewNavigation;
