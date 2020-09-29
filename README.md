# 4 Steps from JavaScript to TypeScript

This repo shows you the steps to go through to update a project from JavaScript to TypeScript.

It was based on the advice from [Dominik Kundel's blog post on moving to TypeScript at your own pace](https://www.twilio.com/blog/move-to-typescript).

## Running the application

First clone or download [the repo](https://github.com/philnash/four-steps-from-javascript-to-typescript) and change into the directory.

```bash
git clone https://github.com/philnash/four-steps-from-javascript-to-typescript.git
cd four-steps-from-javascript-to-typescript
```

Install the dependencies:

```bash
npm install
```

Run the application.

```bash
npm start
```

You can now visit `http://localhost:3000` and see a static HTML page or make a `POST` request to `http://localhost:3000/webhooks/messages` and get a [dad joke](https://icanhazdadjoke.com/api) in TwiML format for responding to incoming SMS messages to a [Twilio number](https://www.twilio.com/).

```bash
curl --data "" http://localhost:3000/webhooks/messages
<?xml version="1.0" encoding="UTF-8"?><Response><Message>It was raining cats and dogs the other day. I almost stepped in a poodle.</Message></Response>
```

## Moving to TypeScript

You can follow [the directions in the blog post](https://www.twilio.com/blog/move-to-typescript) to move this repo to TypeScript. There are also branches that show the changes at each stage.
