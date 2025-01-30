const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')

app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is listening PORT: ${PORT}`)
});
app.use("/api/user", userRoutes);