import React from 'react';

export const Dashboard = ({ stocks }) => {
  const totalValue = stocks.reduce((acc, stock) => acc + stock.quantity * stock.currentPrice, 0);

  return (
    <div className="dashboard">
      <h1>Portfolio Metrics</h1>
      <p>Total Portfolio Value: ${totalValue.toFixed(2)}</p>
      <p>Total Stocks: {stocks.length}</p>
    </div>
  );
};