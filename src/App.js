import { useState } from 'react';
import Navbar from './components/Navbar';
import TabNavigation from './components/TabNavigation';
import GroceryPage from './pages/GroceryPage';
import FashionPage from './pages/FashionPage';
import InstrumentsPage from './pages/InstrumentsPage';
import Cart from './components/Cart/Cart';

function App() {
  const [activeTab, setActiveTab] = useState('grocery');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'grocery':
        return <GroceryPage addToCart={addToCart} />;
      case 'fashion':
        return <FashionPage addToCart={addToCart} />;
      case 'instruments':
        return <InstrumentsPage addToCart={addToCart} />;
      default:
        return <GroceryPage addToCart={addToCart} />;
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartItemCount={cartItems.length} 
        openCart={() => setIsCartOpen(true)} 
        changeTab={setActiveTab}
      />
      <div className="container mx-auto px-4 py-8">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderActiveTab()}
      </div>
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        removeItem={removeFromCart}
      />
    </div>
  );
}

export default App;
