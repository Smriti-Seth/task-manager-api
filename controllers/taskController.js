import pool from '../db.js';

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = await pool.query(
      'INSERT INTO tasks (title, user_id) VALUES ($1,$2) RETURNING *',
      [title, req.user.id]
    );

    res.json(task.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await pool.query(
      'SELECT * FROM tasks WHERE user_id=$1',
      [req.user.id]
    );

    res.json(tasks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id=$1 AND user_id=$2 RETURNING *',
      [req.params.id, req.user.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    res.json({ msg: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};