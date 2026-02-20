// import Image from "next/image";
// import Link from "next/link";

// export default function ProductCard({ product }) {
//   return (
//     <Link
//       href={`/products/${product.id}`}
//       className="block border rounded-xl p-4 hover:shadow-lg transition"
//     >
//       <div className="relative w-full h-40 mb-4">
//         <Image
//           src={product.thumbnail}
//           alt={product.title}
//           fill
//           sizes="(max-width:768px) 100vw, 33vw"
//           className="object-contain"
//           priority={false}
//         />
//       </div>

//       <h3 className="font-medium line-clamp-2 mb-2">{product.title}</h3>

//       <p className="text-gray-500 text-sm">${product.price}</p>
//     </Link>
//   );
// }
