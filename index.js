const express = require("express");

const app = express();
const roleRouter = require('./routes/roleRoute')
const empRouter = require('./routes/empRoute')

const MongoRoute = require('./routes/mongodbRoleRoute')

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

require('dotenv').config();

// db connectivity
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("db conneted")
}).catch((err)=>{
    console.log(err)
});
// end db connection



const PORT = 3000; // Use const to define PORT


app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))



app.use('/api' , roleRouter );

app.use('/api/v1' , empRouter)

app.use('/api/db' , MongoRoute)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
