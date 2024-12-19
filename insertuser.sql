INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', 'hashed_password1'),
('jane_doe', 'jane@example.com', 'hashed_password2');

INSERT INTO portfolios (user_id, name) VALUES
(1, 'John's Tech Portfolio'),
(2, 'Jane's Investment Portfolio');
