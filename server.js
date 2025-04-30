const express = require("express");
const app = express();
const port = 3000; // or any other desired port //setting up DB
const mysql = require("mysql2");
const pool = mysql.createPool({
connectionLimit: 10,
host: "localhost",
user: "root",
password: "root",
database: "rental_hub",
port: 8889,
});
//serving static website
app.use("/", express.static("./website"));
// Insert data route
app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 
app.post("/insert", (req, res) => { // take the data sent to the front end--> pass it to back end --> save to DB
    const data = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        DOB: req.body.DOB,
        lan: req.body.lan,
        subject: req.body.subject,
        message: req.body.message,
        
      };
      
    const query = "INSERT INTO contact_info SET ?";
    pool.query(query, data, (error, result) => { if (error) {
        console.error("❌ Error inserting into database:", error);
        return res.status(500).send("Database error");
      }
      ;
    res.send("Data inserted successfully!"); });
    });
    
  //activating server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); });
      
    app.post("/add-property", (req, res) => {
    console.log("✅ Add Property route hit");
        const propData = {
          fullName: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone,
          title: req.body.title,
          type: req.body.type,
          location: req.body.location,
          price: req.body.price,
          area: req.body.area,
          rooms: req.body.rooms,
          bathrooms: req.body.bathrooms,
          description: req.body.description,
          propertyImage: req.body.propertyImage,
        };
      
        const query = "INSERT INTO properties SET ?";
        pool.query(query, propData, (error, result) => {
          if (error) {
            console.error("❌ Error inserting into database:", error);
            return res.status(500).send("Database error");
          }
          res.send("Data inserted successfully!");
        });

        
        
      });

      app.get("/properties", (req, res) => {
        pool.query("SELECT * FROM properties", (err, result) => {
          if (err) return res.status(500).send(err);
          res.json(result);
        });
      });
      

    
    