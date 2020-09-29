const { port } = require("./config");
const app = require("./server");

app.listen(port, () => {
  console.log(`Application listening on http://localhost:${port}.`);
});
