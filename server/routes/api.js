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

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1 + "";
const day = date.getDate() + "";
const now = `${year}-${month.length === 1 ? "0" + month : month}-${
  day.length === 1 ? "0" + day : day
}`;

router.get("/kmug_items", (req, res) => {
  const {
    query: { filter }
  } = req;
  let query = `select * from kmugstore_data where date(crawlingTime) = '${now}' group by keyword`;
  if (filter !== "null") {
    query = `select * from kmugstore_data where date(crawlingTime) = '${now}' and category = '${filter}' group by keyword`;
  }

  connection.query(query, (err, rows) => {
    if (!err && rows.length !== 0) {
      res.json(rows);
    } else {
      res.json({ error: "can't find data!" });
    }
  });
});

router.get("/kmug_items/:id", (req, res) => {
  let {
    params: { id }
  } = req;
  id = parseInt(id);

  connection.query(
    `select * from kmugstore_data where idx = '${id}'`,
    (err, rows) => {
      if (!err && rows.length !== 0) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

router.get("/search_kmug_items/:text", (req, res) => {
  let {
    params: { text }
  } = req;

  connection.query(
    `select * from kmugstore_data where date(crawlingTime) = '${now}' and productName like '%${text}%'`,
    (err, rows) => {
      if (!err && rows.length !== 0) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

router.get("/items", (req, res) => {
  connection.query(
    `SELECT * FROM crawling_data where date(crawlingTime) = '${now}'`,
    (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

router.get("/items_price", (req, res) => {
  connection.query(
    `select min(price) as price , crawlingSite, keyword from crawling_data where not crawlingSite = 'KMUG스토어' and date(crawlingTime) = '${now}' group by keyword, crawlingSite`,
    (err, rows) => {
      if (!err) {
        let arr = [];
        for (const idx in rows) {
          const price = rows[idx]["price"];
          const crawlingSite = rows[idx]["crawlingSite"];
          const keyword = rows[idx]["keyword"];
          let obj = {};
          obj[keyword] = {};
          obj[keyword][crawlingSite] = price;
          arr.push(obj);
        }
        res.json(arr);
      } else {
        res.json({ error: err });
      }
    }
  );
});

router.get("/items_price/:keyword", (req, res) => {
  let {
    params: { keyword }
  } = req;
  keyword = keyword.replace("%2F", "/");

  connection.query(
    `select min(price) as price , crawlingSite, productUrl,  keyword from crawling_data  where keyword = '${keyword}' and date(crawlingTime) = '${now}' and not crawlingSite = 'KMUG스토어' group by crawlingSite`,
    (err, rows) => {
      if (!err) {
        let arr = [];
        for (const idx in rows) {
          const price = rows[idx]["price"];
          const crawlingSite = rows[idx]["crawlingSite"];
          const productUrl = rows[idx]["productUrl"];
          let obj = {};
          obj[crawlingSite] = {};
          obj[crawlingSite]["price"] = price;
          obj[crawlingSite]["productUrl"] = productUrl;
          arr.push(obj);
        }
        res.json(arr);
      } else {
        res.json({ error: err });
      }
    }
  );
});

router.get("/items/:id", (req, res) => {
  let {
    params: { id }
  } = req;
  id = parseInt(id);
  connection.query(
    `SELECT * FROM crawling_data where idx = ${id}`,
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
    "select distinct keyword from kmugstore_data order by idx desc",
    (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json({ error: "can't find data!" });
      }
    }
  );
});

router.get("/chart_data/:keyword", (req, res) => {
  let {
    params: { keyword }
  } = req;
  keyword = keyword.replace("%2F", "/");
  connection.query(
    `select min(price) + fee as price, crawlingSite , date_format(crawlingTime, "%Y-%m-%d") as crawlingTime from crawling_data where keyword = '${keyword}' and not crawlingSite = 'KMUG스토어' group by keyword , crawlingSite,  date_format(crawlingTime, '%Y-%m-%d')`,
    (err, rows) => {
      if (!err && rows.length !== 0) {
        res.json(rows);
      } else {
        res.json({
          error: `can't find data!`
        });
      }
    }
  );
});

router.get("/category", (req, res) => {
  connection.query(
    "select distinct category from kmugstore_data order by idx desc",
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
    `INSERT INTO crawling_data 
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
