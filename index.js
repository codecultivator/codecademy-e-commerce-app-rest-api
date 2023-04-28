const config = require('dotenv').config(),
express = require('express'),
bodyParser = require('body-parser'),
routes = require('./routes'),
session = require("express-session"),
passport = require("passport"),
swaggerConfig = require('./swaggerConfig');

const app = express();
app.set("trust proxy", 1);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

routes(app);
swaggerConfig(app);

const port = process.env.API_PORT;

app.listen(port, () => {
	console.log(`App runnning on port ${port}.`)
})