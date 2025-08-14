import { useContext } from 'react';
import { CartProvider }from '../../context/CartContext';

export const useCart = () => {
  const context = useContext(CartProvider);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
