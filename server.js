const express = require('express');
const port = 8000;
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

require("./routes/jokes.routes")(app);

app.listen(port, () => console.log(`The server is running on ${port}`));