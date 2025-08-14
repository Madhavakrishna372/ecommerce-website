const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
          <div className="flex items-center mt-1">
            <button 
              onClick={() => onQuantityChange(item.quantity - 1)}
              className="text-gray-500 hover:text-blue-600 px-1"
            >
              -
            </button>
            <span className="mx-2 w-6 text-center">{item.quantity}</span>
            <button 
              onClick={() => onQuantityChange(item.quantity + 1)}
              className="text-gray-500 hover:text-blue-600 px-1"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
        <button 
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 mt-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
