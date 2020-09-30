import { port } from "./config";
import app from "./server";

app.listen(port, () => {
  console.log(`Application listening on http://localhost:${port}.`);
});
