const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(path.resolve(__dirname, 'dist')))
  .get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  })
  .listen(PORT, () => {
    console.log("Express server listening on port: " + PORT);
  });
