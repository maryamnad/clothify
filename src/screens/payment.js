import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentModal = ({ isOpen, onClose, products }) => {
  
  const [paymentData, setPaymentData] = useState({
    paymentMethod: '',
    isPaymentDetailsVisible: false,
    paymentInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: '',
    },
    products: products, // Using the products prop passed from Cart component
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    console.log(products)
    console.log("Products are:", paymentData);
  }, [paymentData.products]);

  const handlePaymentMethodChange = (event) => {
    const method = event.target.value;
    setPaymentData((prevState) => ({
      ...prevState,
      paymentMethod: method,
      isPaymentDetailsVisible: method === 'online',
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({
      ...prevState,
      paymentInfo: {
        ...prevState.paymentInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentData((prev) => ({
      ...prev,
      product: products // Include products in the data to send
    }));

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/payment', paymentData);
      console.log(response.data.message);
      // Handle successful payment here (e.g., display a success message, close modal, etc.)
    } catch (error) {
      console.error('Error processing payment:', error);
      setErrorMessage('Error processing payment. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentData.paymentMethod === 'cash'}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="radio"
                value="online"
                checked={paymentData.paymentMethod === 'online'}
                onChange={handlePaymentMethodChange}
              />
              Online Payment
            </label>
          </div>
          {paymentData.isPaymentDetailsVisible && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.paymentInfo.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.paymentInfo.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentData.paymentInfo.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  value={paymentData.paymentInfo.nameOnCard}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="pay-button">
            {paymentData.paymentMethod === 'online' ? 'Pay' : 'Place Order'}
          </button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;
