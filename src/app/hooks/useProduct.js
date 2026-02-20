import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

// fetch product images with caching
const productCache = {};

export const useProduct = () => {
  //  get the product ID from the route
  const { id } = useParams();
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (!id) return;

    //  Caches previously fetched products
    if (productCache[id]) {
      setProductImages(productCache[id]);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        const formattedImages = data.images.map((img, index) => ({
          id: index + 1,
          src: img,
        }));

        productCache[id] = formattedImages; // save in the cach
        setProductImages(formattedImages);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => controller.abort(); // cleanup
  }, [id]);

  return { productImages, loading, error };
};
