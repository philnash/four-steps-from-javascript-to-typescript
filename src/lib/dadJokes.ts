import superagent from "superagent";

interface DadJoke {
  id: string;
  joke: string;
  status: string;
}

const dadJoke: () => Promise<string | undefined> = async () => {
  try {
    const result = await superagent
      .get("https://icanhazdadjoke.com/")
      .accept("json");
    const body: DadJoke = result.body;
    return body.joke;
  } catch (error) {
    console.error(error);
  }
};

export default dadJoke;
