const superagent = require("superagent");

module.exports = async () => {
  try {
    const result = await superagent
      .get("https://icanhazdadjoke.com/")
      .accept("json");
    return result.body.joke;
  } catch (error) {
    console.error(error);
  }
};
