// Mongodb - requiring and connecting to the database.

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration", {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e)=> {
    console.log(`no connection ${e} `);
})