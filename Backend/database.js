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

// addCat(0,0,"Siamese",'Milo',"Bruin en fyn" , 2)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error('Error fetching CAT data:', error);
//     });



module.exports = { pooldb, getSingle, getAll };
