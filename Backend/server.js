const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const pooldb = require('./database.js'); 
const app = express();
app.use(cors());
app.use(express.json());



// MySQL connection
app.get('/api/test-db', async (req, res) => {
  try {
      const [results] = await pooldb.query('SELECT * FROM mense'); 
      res.json({ solution: results[0].MENSE_NAAM}); 
  } catch (error) {
      console.error('Database query error:', error);
      res.status(500).json({ error: 'Database error' });
  }
});

// Basic route to test the server
app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
