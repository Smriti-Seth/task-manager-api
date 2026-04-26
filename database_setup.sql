CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password TEXT,
    role VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT,
    completed BOOLEAN DEFAULT false,
    user_id INTEGER REFERENCES users(id)
);