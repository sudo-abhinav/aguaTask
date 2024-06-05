const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description:  "This is a simple CRUD API application made with Express and documented with Swagger",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
//   './routes/empRoute.js',
//  './routes/roleRoute.js',
  "./index.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);