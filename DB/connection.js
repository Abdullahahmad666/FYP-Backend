const mongose = require("mongoose");


const db = process.env.MONGO_URI; // set in config.env or your host's environment variables
mongose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection Done!");
}).catch((err)=>{
    console.log(err);
})
