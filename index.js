
const {testConnection} = require("./models/index")

require("dotenv").config();
const app = require('./routes');


app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000 ...");
});
testConnection();

