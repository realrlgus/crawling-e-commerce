const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "crawler"
});

router.get("/items", (req, res) => {
  connection.query("SELECT * FROM ecommerce_data", (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      res.json({ error: "can't find data!" });
    }
  });
});

router.get("/items/:id", (req, res) => {
  const {
    params: { id }
  } = req;

  connection.query(
    `SELECT * FROM ecommerce_data where idx = ${id}`,
    (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

module.exports = router;
