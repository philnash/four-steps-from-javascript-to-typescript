import express from "express";
import { resolve } from "path";
import { router as webhooks } from "./routes/webhooks";

const app = express();

app.use("/webhooks", webhooks);
app.use(express.static(resolve(__dirname, "..", "static")));

export default app;
