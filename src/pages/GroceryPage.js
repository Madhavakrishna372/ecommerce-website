import ProductCard from '../components/ProductCard';
import { useCart } from '../components/hooks/useCart';

const GroceryPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Organic Apples',
      price: 2.99,
      rating: 4.5,
      description: 'Fresh organic apples from local farms',
      image: 'https://placehold.co/300x200?text=Organic+Apples'
    },
    {
      id: 2,
      name: 'Whole Grain Bread',
      price: 3.49,
      rating: 4.2,
      description: 'Freshly baked whole grain bread',
      image: 'https://placehold.co/300x200?text=Whole+Grain+Bread'
    },
    {
      id: 3,
      name: 'Free Range Eggs',
      price: 4.99,
      rating: 4.7,
      description: '12-count free range organic eggs',
      image: 'https://placehold.co/300x200?text=Free+Range+Eggs'
    },
    {
      id: 4,
      name: 'Organic Milk',
      price: 3.99,
      rating: 4.4,
      description: '1 gallon of organic whole milk',
      image: 'https://placehold.co/300x200?text=Organic+Milk'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Grocery Items</h2>
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

export default GroceryPage;
