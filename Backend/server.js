const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { getAll } = require('./database.js'); // Import getAll function from the database module
const app = express();

app.use(cors());
app.use(express.json());

app.get('/cat/all', async (req, res) => {
  try {
    const cats = await getAll('CAT'); // Await the getAll function to retrieve data
    res.json(cats); // Send the response with the retrieved data
  } catch (error) {
    console.error('Error fetching CAT data:', error); // Log error for debugging
    res.status(500).json({ error: 'Failed to retrieve data' }); // Send error response
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
