const mysql = require('mysql2');
const pooldb = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();

// Function to fetch a single record by ID
async function getSingle(tableName, id) {
    try {
        const column = `${tableName}_ID`
        const [rows] = await pooldb.query(`SELECT * FROM ?? WHERE ?? = ?`, [tableName, column, id]);
        return rows[0];
    } catch (error) {
        console.error(`Error fetching single record from ${tableName}:`, error);
        throw error;
    }
}

async function getUserEmail(tableName, email) {
    try {
        const column = `${tableName}_EMAIL`
        const [rows] = await pooldb.query(`SELECT * FROM ?? WHERE ?? = ?`, [tableName, column, email]);
        return rows[0];
    } catch (error) {
        console.error(`Error fetching single record from ${tableName}:`, error);
        throw error;
    }
}

async function checkIfEmailExists(tableName, email) {
    try {
        const column = `${tableName}_EMAIL`;

        // Execute the query to find the email
        const [rows] = await pooldb.query(
            `SELECT * FROM ?? WHERE ?? = ?`,
            [tableName, column, email]
        );

        // Check if the email exists
        if (rows.length > 0) {
            console.log(`Email ${email} already exists in table ${tableName}.`);
            return true; // Email exists
        } else {
            console.log(`Email ${email} does not exist in table ${tableName}.`);
            return false; // Email does not exist
        }
    } catch (error) {
        console.error(`Error checking email in ${tableName}:`, error);
        throw error;
    }
}


// Function to fetch all records from a table
async function getAll(tableName) {
    try {
        const [rows] = await pooldb.query(`SELECT * FROM ??`, [tableName]);
        return rows;
    } catch (error) {
        console.error(`Error fetching all records from ${tableName}:`, error);
        throw error;
    }
}

async function searchName(tableName,searchword) {
  try {
      const column = `${tableName}_NAME`
      const [rows] = await pooldb.query(`SELECT * FROM ?? WHERE ?? LIKE CONCAT('%', ?, '%')`, [tableName,column,searchword]);
      return rows;
  } catch (error) {
      console.error(`Error fetching all records from ${tableName}:`, error);
      throw error;
  }
}

async function addUser(name,surname,email,password) {
  const [result] = await pooldb.query(`INSERT INTO USER(USER_NAME ,USER_SURNAME ,USER_EMAIL ,USER_PASSWORD ) VALUES (?,?,?,?)`,[name,surname,email,password])
  const id = result.insertId
  return getSingle("USER" , id)
  
}

async function addCat(alumni,vaccinated,breed,name,description,age) {
  const [result] = await pooldb.query(`INSERT INTO CAT(CAT_ALUMNI ,CAT_VACCINATED ,CAT_BREED ,CAT_NAME ,CAT_DESCRIPTION ,CAT_AGE) VALUES (?,?,?,?,?,?)`
    ,[alumni,vaccinated,breed,name,description,age])
  const id = result.insertId
  return getSingle("CAT" , id)
  
}

async function addBooking(cat_id,user_id,date,time) {
    const [result] = await pooldb.query(`INSERT INTO BOOKING(CAT_ID ,USER_ID ,BOOKING_DATE,BOOKING_TIME) VALUES (?,?,?,?)`
      ,[cat_id,user_id,date,time])
    const id = result.insertId
    return getSingle("BOOKING" , id)
    
  }

// searchName('CAT','ha')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error('Error fetching CAT data:', error);
//     });



module.exports = { pooldb, getSingle, getAll , searchName , getUserEmail , addUser , checkIfEmailExists , addBooking};
