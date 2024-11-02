import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/coffee/data');
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData, loading }}>
      {children}
    </OrderContext.Provider>
  );
};
