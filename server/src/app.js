const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./Configuratin/corsOptions')
const userRoutes = require('./routes/userRoutes');
const { logger } = require('./middleware/logEvents');

app.use(bodyParser.json());
app.use(logger)
app.use(cors(corsOptions));


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is listening PORT: ${PORT}`)
});
app.use("/api/user", userRoutes);