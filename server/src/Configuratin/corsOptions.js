const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: (origin,callback)=>{
        if(!origin || whitelist.includes(origin)){
            callback(null, true)
        }
        else{
            callback(new Error('Origin not allowed by cors'))
        }
    },
    optionsSuccessStatus : 200
}

module.export = corsOptions;