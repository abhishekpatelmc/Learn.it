const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { json, urlencoded } = require("body-parser");
const { textController } = require("./controller/text");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.post("/api/text", textController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
