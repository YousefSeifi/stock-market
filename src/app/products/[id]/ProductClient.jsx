"use client";
import { useProduct } from "../../hooks/useProduct";
import { useProductStore } from "../../hooks/productStore";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductImageGallery from "./ProductImageGallery";
import SizeSelector from "./SizeSelector";
import BuySection from "./BuySection";
import AccordionSection from "./AccordionSection";
import UtilityButtons from "./UtilityButtons";

export default function ProductClient() {
  const { productImages, loading, error } = useProduct();
  const {
    openAccordion,
    setOpenAccordion,
    menus,
    toggleMenu,
    activeTab,
    setActiveTab,
  } = useProductStore();

  if (error)
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <ProductImageGallery
          images={productImages}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          loading={loading}
        />

        {/* Right Column */}
        <div className="space-y-6">
          <ProductBreadcrumb />
          <UtilityButtons />

          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Pop Mart LABUBU Time to Chill Vinyl Plush Doll
          </h1>

          <SizeSelector
            isOpen={menus.size}
            onToggle={() => toggleMenu("size")}
          />

          <BuySection />

          <AccordionSection
            openAccordion={openAccordion}
            setOpenAccordion={setOpenAccordion}
          />
        </div>
      </div>
    </div>
  );
}
