import { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: ''
  });

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway
    alert(`Payment of $${totalAmount} processed successfully!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total Amount:</span>
            <span className="font-bold text-green-600">${totalAmount}</span>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Select Payment Method</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setPaymentMethod('credit')}
                className={`py-2 border rounded ${paymentMethod === 'credit' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
              >
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod('debit')}
                className={`py-2 border rounded ${paymentMethod === 'debit' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
              >
                Debit Card
              </button>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`py-2 border rounded ${paymentMethod === 'upi' ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
              >
                UPI
              </button>
            </div>
          </div>

          <form onSubmit={handlePaymentSubmit}>
            {paymentMethod !== 'upi' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={paymentDetails.expiry}
                      onChange={(e) => setPaymentDetails({...paymentDetails, expiry: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={paymentDetails.cvv}
                      onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={paymentDetails.upiId}
                  onChange={(e) => setPaymentDetails({...paymentDetails, upiId: e.target.value})}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Pay ${totalAmount}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
