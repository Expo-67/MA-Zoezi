import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey guys its me!!!");
});

app.listen(3001, () => {
  console.log("server is running in port 3001");
});
