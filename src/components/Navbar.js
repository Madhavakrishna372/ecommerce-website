import { useState } from 'react';
import { useCart } from '../components/hooks/useCart';
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';

const Navbar = ({ openCart, changeTab }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 
              onClick={() => changeTab('grocery')}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
            >
              ShopEasy
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-1 rounded text-blue-600 hover:bg-blue-50"
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignupModal(true)}
              className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </button>
            <button 
              onClick={openCart}
              className="relative p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};

export default Navbar;
