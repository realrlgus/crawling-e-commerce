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
  let {
    params: { id }
  } = req;
  id = parseInt(id);
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

router.get("/keyword", (req, res) => {
  connection.query(
    "select distinct keyword from kmugstore_data order by idx asc",
    (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

router.post("/items", (req, res) => {
  const {
    body: {
      productName,
      keyword,
      price,
      fee,
      productUrl,
      crawlingTime,
      crawlingSite,
      saler
    }
  } = req;
  connection.query(
    `INSERT INTO ecommerce_data 
      (productName , keyword, price, fee , productUrl, crawlingTime, crawlingSite, saler) 
        VALUES (
          '${productName}',
          '${keyword}',
           ${price},
           ${fee},
          '${productUrl}',
          '${crawlingTime}',
          '${crawlingSite}',
          '${saler}'
        )`,
    (err, result) => {
      if (!err) {
        res.json({ result: result.insertId });
      } else {
        res.json({ error: "Error while save data" });
      }
    }
  );
});

module.exports = router;
