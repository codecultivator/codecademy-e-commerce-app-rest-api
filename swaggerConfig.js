swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Code Academy Portfolio Project E-Commerce API",
      version: "0.1.0",
      description:
        "This is simple E-Commerce API using the PEN stack",
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

module.exports = function(app){
    app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
    );
}
