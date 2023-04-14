const config = require('dotenv').config(),
express = require('express'),
bodyParser = require('body-parser'),
routes = require('./routes'),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

routes(app);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Code Academy Portfolio Project E-Commerce API",
      version: "0.1.0",
      description:
        "This is simple E-Commerce API using the PERN stack",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Support",
        url: "https://example.com",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const port = process.env.API_PORT;

app.listen(port, () => {
	console.log(`App runnning on port ${port}.`)
})