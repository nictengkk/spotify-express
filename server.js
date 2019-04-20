const app = require("./app");
const port = 1234;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
