const express = require('express')
// const cors = require("cors")
const path = require("path")
const config = require("./config")

const indexRouter = require("./routes/index");

const app = express()

// app.use(cors())
app.use(express.json())

app.use("/api", indexRouter)

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})

module.exports = app
