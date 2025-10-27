const allowedOrigins = require("./allowedOrigins");
const corsOptions = {
    origin: (origin, callback)=>{
        // check if there is more than one domain
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            // throw an error if an attemp is made to access the server by unregistered domain name
            callback(new Error("Not allowed by CORS"));
        }
    },
    // accept any credentials come with headers or cookies
    credentials: true,
    optionsSuccessStatus: 200
}


module.exports = corsOptions;