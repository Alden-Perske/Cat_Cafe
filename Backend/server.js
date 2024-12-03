const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
dotenv.config();
const { getAll , searchName, getSingle ,getUserEmail , addUser , checkIfEmailExists} = require('./database.js'); // Import getAll function from the database module
const app = express();
app.use(cors());
app.use(express.json());

app.get('/cat/all', async (req, res) => {
  const searchTerm = req.query.term || '';
  
  if (searchTerm === '') {
    try {
      const cats = await getAll('CAT'); // Await the getAll function to retrieve data
      res.json(cats); // Send the response with the retrieved data
    } catch (error) {
      console.error('Error fetching CAT data:', error); // Log error for debugging
      res.status(500).json({ error: 'Failed to retrieve data' }); // Send error response
    }
  }
  else{
    try {
      const seacrh = await searchName('CAT',searchTerm); // Await the getAll function to retrieve data
      res.json(seacrh); // Send the response with the retrieved data
    } catch (error) {
      console.error('Error fetching CAT data:', error); // Log error for debugging
      res.status(500).json({ error: 'Failed to retrieve data' }); // Send error response
    }
  }
  
});

app.post('/user/signup', async (req, res) => {
  const {email , password , confirmPassword , name , surname} = req.body

  try {
    const check =  await checkIfEmailExists("USER",email);

    if(check === true){
      return res.status(400).json({error:"Email already in use",check})
    }
    if (password !== confirmPassword) {
      return res.status(400).json({error:"Password's do not match"})
    }
    
  } catch (error) {
    res.status(500).json({message:"signup failed"})

  }

  

  try {
    const hashedpassword = await bcrypt.hash(password,10)
    addUser(name , surname , email , hashedpassword)
    res.status(200).json({message:"user created" , newUser})
        
    } catch {
        res.status(500).json({message:"server error"})
    }

})

app.post('/user/login', async (req, res) => {

})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
