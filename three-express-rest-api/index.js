const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");
const { default: db } = require("./utils/dbConnect");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// app.use(viewCount)

// app.use(limiter);

db((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
});

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(__dirname + '/public/test.html');
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "Omok",
    },
  });
});

app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
