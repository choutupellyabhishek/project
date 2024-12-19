import React, { useState, useEffect } from 'react';

export const StockForm = ({ currentStock, addStock, updateStock }) => {
  const [formData, setFormData] = useState({ stockName: '', ticker: '', quantity: 1, buyPrice: 0 });

  useEffect(() => {
    if (currentStock) {
      setFormData(currentStock);
    }
  }, [currentStock]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStock) {
      updateStock(currentStock.id, formData);
    } else {
      addStock(formData);
    }
    setFormData({ stockName: '', ticker: '', quantity: 1, buyPrice: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="stockName"
        placeholder="Stock Name"
        value={formData.stockName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ticker"
        placeholder="Ticker Symbol"
        value={formData.ticker}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="buyPrice"
        placeholder="Buy Price"
        value={formData.buyPrice}
        onChange={handleChange}
        required
      />
      <button type="submit">{currentStock ? 'Update Stock' : 'Add Stock'}</button>
    </form>
  );
};