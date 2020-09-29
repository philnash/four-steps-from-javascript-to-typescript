const { Router, urlencoded } = require("express");
const { twiml } = require("twilio");
const { MessagingResponse } = twiml;

const dadJoke = require("../lib/dadJokes");

const router = Router();
router.use(urlencoded({ extended: false }));

router.post("/messages", async (req, res) => {
  const twiml = new MessagingResponse();
  const message = await dadJoke();
  if (message) {
    twiml.message(message);
    res.type("text/xml").send(twiml.toString());
  } else {
    res.status(200).send();
  }
});

module.exports = router;
