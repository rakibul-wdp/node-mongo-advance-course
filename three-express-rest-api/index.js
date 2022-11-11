const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(viewCount)



// app.use(limiter);

dbConnect();

app.use('/api/v1/tools', toolsRoutes);


app.get("/", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(__dirname + '/public/test.html');
  res.render('home.ejs', {
    id: 5,
    user: {
      name: 'Omok'
    }
  })
});

app.all('*', (req, res) => {
  res.send('No route found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});