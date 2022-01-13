require("dotenv").config();
const app = require('./routes');

//Automatically sets port number
app.listen(process.env.PORT, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
