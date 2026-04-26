import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await pool.query(
      'INSERT INTO users (username, password, role) VALUES ($1,$2,$3) RETURNING *',
      [username, hashedPassword, role]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await pool.query(
      'SELECT * FROM users WHERE username=$1',
      [username]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const valid = await bcrypt.compare(password, user.rows[0].password);

    if (!valid) return res.status(400).json({ msg: 'Wrong password' });

    const token = jwt.sign(
      { id: user.rows[0].id, role: user.rows[0].role },
      process.env.JWT_SECRET 
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};