const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express();

const port = 5000;

//To use req.body we have to use this : 
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );
app.use(cors());

// Available Routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})