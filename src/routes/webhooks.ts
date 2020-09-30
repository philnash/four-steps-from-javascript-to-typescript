import { Router, urlencoded, Request, Response } from "express";
import { twiml } from "twilio";
const { MessagingResponse } = twiml;

import dadJoke from "../lib/dadJokes";

export const router = Router();
router.use(urlencoded({ extended: false }));

router.post(
  "/messages",
  async (_req: Request, res: Response<string | undefined>) => {
    const twiml = new MessagingResponse();
    const message = await dadJoke();
    if (message) {
      twiml.message(message);
      res.type("text/xml").send(twiml.toString());
    } else {
      res.status(200).send();
    }
  }
);
