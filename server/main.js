const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const api = require("./routes/api");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
