CREATE TABLE stocks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    portfolio_id BIGINT NOT NULL,
    stock_name VARCHAR(255) NOT NULL,
    ticker VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    buy_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);