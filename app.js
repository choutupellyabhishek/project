import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dashboard } from './components/Dashboard';
import { StockForm } from './components/StockForm';
import { StockTable } from './components/StockTable';
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);
  const [currentStock, setCurrentStock] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get('/api/stocks');
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const addStock = async (stock) => {
    try {
      const response = await axios.post('/api/stocks', stock);
      setStocks([...stocks, response.data]);
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  const updateStock = async (id, stock) => {
    try {
      const response = await axios.put(`/api/stocks/${id}`, stock);
      setStocks(stocks.map((s) => (s.id === id ? response.data : s)));
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const deleteStock = async (id) => {
    try {
      await axios.delete(`/api/stocks/${id}`);
      setStocks(stocks.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  return (
    <div className="App">
      <Dashboard stocks={stocks} />
      <StockForm
        currentStock={currentStock}
        addStock={addStock}
        updateStock={updateStock}
      />
      <StockTable
        stocks={stocks}
        setCurrentStock={setCurrentStock}
        deleteStock={deleteStock}
      />
    </div>
  );
}

export default App;