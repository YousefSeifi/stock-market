import { Link } from "lucide-react";

const ProductBreadcrumb = () => (
  <nav
    aria-label="breadcrumb"
    className="text-sm"
    data-testid="BreadcrumbWrapper"
  >
    <ol className="flex items-center space-x-2">
      <li>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li>
        <a
          href="/category/collectibles"
          className="text-gray-600 hover:text-gray-900"
        >
          Collectibles
        </a>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li>
        <a
          href="/category/collectibles/figures"
          className="text-gray-600 hover:text-gray-900"
        >
          Figures
        </a>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li>
        <span className="text-gray-900 font-medium">Pop Mart</span>
      </li>
    </ol>
  </nav>
);

export default ProductBreadcrumb;
