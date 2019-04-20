const app = require("./app");
const port = 8888;
require("dotenv").config();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
