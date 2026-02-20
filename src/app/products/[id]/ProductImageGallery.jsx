import Image from "next/image";

const ProductImageGallery = ({ images, activeTab, setActiveTab, loading }) => {
  if (loading)
    return <div className="h-80 w-full bg-gray-200 animate-pulse rounded-lg" />;

  const currentImage = images[activeTab] || images[0];

  return (
    <div className="space-y-2">
      <div className="relative h-80 w-full bg-gray-50 rounded-lg overflow-hidden">
        {currentImage && (
          <Image
            src={currentImage.src}
            alt={`Product Image ${currentImage.id}`}
            width={300}
            height={300}
            className="object-contain"
          />
        )}
      </div>
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveTab(index)}
            className={`w-16 h-16 border rounded ${activeTab === index ? "border-blue-500" : ""}`}
          >
            <Image
              src={img.src}
              alt=""
            //   fill
              width={300}
              height={300}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
