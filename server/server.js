const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1802",
  database: "portfolio_db",
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// ✅ API route
app.post("/contact", (req, res) => {
  const { name, email, contact, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, contact, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving data");
    }
    res.send("Data saved successfully");
  });
});

// ✅ start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

//API to view Data

app.get("/contacts", (req, res) => {
  db.query("SELECT * FROM contacts", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// API to delete data

// app.delete("/contact/:id", (req, res) => {
//   db.query("DELETE FROM contacts WHERE id = ?", [req.params.id], (err) => {
//     if (err) return res.status(500).send(err);
//     res.send("Deleted");
//   });
// });

app.delete("/contact/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM contacts WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error deleting");
    }
    res.send("Deleted successfully");
  });
});
