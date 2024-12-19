import React from 'react';

export const StockTable = ({ stocks, setCurrentStock, deleteStock }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Stock Name</th>
          <th>Ticker</th>
          <th>Quantity</th>
          <th>Buy Price</th>
          <th>Current Price</th>
          <th>Total Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.stockName}</td>
            <td>{stock.ticker}</td>
            <td>{stock.quantity}</td>
            <td>${stock.buyPrice.toFixed(2)}</td>
            <td>${stock.currentPrice.toFixed(2)}</td>
            <td>${(stock.quantity * stock.currentPrice).toFixed(2)}</td>
            <td>
              <button onClick={() => setCurrentStock(stock)}>Edit</button>
              <button onClick={() => deleteStock(stock.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};