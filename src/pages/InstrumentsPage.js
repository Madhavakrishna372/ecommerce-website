import ProductCard from '../components/ProductCard';
import { useCart } from '../components/hooks/useCart';

const InstrumentsPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 9,
      name: 'Acoustic Guitar',
      price: 199.99,
      rating: 4.9,
      description: 'Beginner-friendly acoustic guitar',
      image: 'https://placehold.co/300x200?text=Acoustic+Guitar'
    },
    {
      id: 10,
      name: 'Digital Piano',
      price: 499.99,
      rating: 4.7,
      description: '88-key weighted digital piano',
      image: 'https://placehold.co/300x200?text=Digital+Piano'
    },
    {
      id: 11,
      name: 'Violin Set',
      price: 149.99,
      rating: 4.5,
      description: 'Complete violin set with bow and case',
      image: 'https://placehold.co/300x200?text=Violin+Set'
    },
    {
      id: 12,
      name: 'Drum Set',
      price: 349.99,
      rating: 4.8,
      description: '5-piece complete drum set',
      image: 'https://placehold.co/300x200?text=Drum+Set'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Musical Instruments</h2>
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

export default InstrumentsPage;
