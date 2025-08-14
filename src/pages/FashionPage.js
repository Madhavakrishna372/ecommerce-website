import ProductCard from '../components/ProductCard';
import { useCart } from '../components/hooks/useCart';

const FashionPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 5,
      name: 'Men\'s T-Shirt',
      price: 19.99,
      rating: 4.3,
      description: '100% cotton classic fit t-shirt',
      image: 'https://placehold.co/300x200?text=Men%27s+T-Shirt'
    },
    {
      id: 6,
      name: 'Women\'s Jeans',
      price: 39.99,
      rating: 4.6,
      description: 'Slim fit high waist jeans',
      image: 'https://placehold.co/300x200?text=Women%27s+Jeans'
    },
    {
      id: 7,
      name: 'Unisex Sneakers',
      price: 59.99,
      rating: 4.8,
      description: 'Comfortable running sneakers',
      image: 'https://placehold.co/300x200?text=Unisex+Sneakers'
    },
    {
      id: 8,
      name: 'Leather Jacket',
      price: 129.99,
      rating: 4.7,
      description: 'Premium genuine leather jacket',
      image: 'https://placehold.co/300x200?text=Leather+Jacket'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Fashion Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default FashionPage;
