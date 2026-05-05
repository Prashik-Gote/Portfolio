const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
// app.use(cors());
//better restrict to your frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ MySQL connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1802",
//   database: "portfolio_db",
// });

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Error:", err);
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
    // res.send("Data saved successfully");
    res.status(200).json({ message: "Data saved successfully" });
  });
});

// ✅ start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
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

//temp console logs to check env variables
console.log("ENV CHECK:");
console.log("HOST:", process.env.MYSQLHOST);
console.log("USER:", process.env.MYSQLUSER);
console.log("PORT:", process.env.MYSQLPORT);
console.log("DATABASE:", process.env.MYSQLDATABASE);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
