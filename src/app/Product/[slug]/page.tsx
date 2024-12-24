import { Metadata } from 'next';
import Link from 'next/link';

interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
}

interface Params {
  slug: string;
}

const products: Product[] = [
  { slug: 'essential-plan', name: 'Essential Plan', description: 'Unlock unlimited features with our Essential Plan.', price: 29 },
  { slug: 'premium-plan', name: 'Premium Plan', description: 'Get more with our Premium Plan.', price: 49 },
  { slug: 'enterprise-plan', name: 'Enterprise Plan', description: 'All features for enterprises.', price: 79 },
];

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  return {
    title: product ? `Product: ${product.name}` : 'Product Not Found',
    description: product ? `Details about ${product.name}` : 'Product not found.',
  };
};

const ProductDetail = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
              </div>
            </div>
            {/* Nút kiểm tra tính khả dụng trong cửa hàng */}
            <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
              <img src="/buynow.svg" alt="Buy now icon" width={16} height={17} className="mr-3" />
              Buy now
            </button>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;