import { useState } from 'react';
import { useCart } from '../../components/hooks/useCart';
import CartItem from './CartItem';
import PaymentModal from '../modals/PaymentModal';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-4 text-center">
            <p className="text-gray-500">Your cart is empty</p>
            <button 
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onQuantityChange={(newQty) => updateQuantity(item.id, newQty)}
                />
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${calculateTotal()}</span>
              </div>
              <button 
                onClick={() => setShowPayment(true)}
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

        <PaymentModal 
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          totalAmount={calculateTotal()}
          onPaymentSuccess={() => {
            setShowPayment(false);
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default Cart;
