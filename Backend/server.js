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

app.get('/user' ,authToken ,  async(req,res) =>{

  try {
    res.json(req.user)
  } catch (error) {
    console.error('Error fetching USER data:', error); // Log error for debugging
    res.status(500).json({ error: 'Failed to retrieve data' }); // Send error response
  }
  

})

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

app.get('/cat/:id' , async (req,res) => {
  try {
    const {id} = req.params
    const seacrh = await getSingle("CAT" , id);
    res.json(seacrh);
  } catch (err) {
    console.error('Error fetching CAT data:', err); // Log error for debugging
    res.status(500).json({ error: 'Failed to retrieve data' }); // Send error response
  }
  
})

app.post('/user/signup', async (req, res) => {
  const { email, password, confirmPassword, name, surname } = req.body;

  try {
    // Check if the email already exists
    const emailExists = await checkIfEmailExists("USER", email);
    if (emailExists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to the database
    const newUser = await addUser(name, surname, email, hashedPassword);
    if (!newUser) {
      return res.status(500).json({ error: "Failed to create user" });
    }

    // Respond with success
    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post('/user/login', async (req, res) => {
  const {email , password} = req.body

  try {
    const checkEmailExists = await checkIfEmailExists("USER" , email);

    if(!checkEmailExists){
      return res.status(404).json({message:"User not found"})
    }

    const user = await getUserEmail("USER" , email);
    const checkpassword = await bcrypt.compare(password , user.USER_PASSWORD)
    if(!checkpassword){
      return res.status(404).json({message:"Login details are incorrect"})

    }

    const token =  jsonwebtoken.sign({USER_EMAIL:user.USER_EMAIL , USER_ID:user.USER_ID , USER_NAME:user.USER_NAME},process.env.SECRET_TOKEN);
    return res.status(200).json({token:token})

    
  } catch {
    res.status(500).json({message:"server error"})
  }

})

function authToken (req,res,next){
  const autheader = req.headers['authorization']
  const token = autheader && autheader.split(" ")[1]

  
  if(!token){
      return res.status(404).json({message:"missing token"})
  }
  jsonwebtoken.verify(token,process.env.SECRET_TOKEN , (err,user) =>{
      if(err)
          {res.status(400).json({message:"Not valid token"})
      }
      req.user = user
      next()
})
}




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
