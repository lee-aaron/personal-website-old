const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .get("*", (req, res, next) => {
    res.sendFile("index.html", { root: path.join(__dirname, 'dist')});
    next();
  })
  .listen(PORT, () => {
    console.log("Express server listening on port: " + PORT);
  });