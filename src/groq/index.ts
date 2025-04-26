// import OpenAI from "openai";
import Groq from "groq-sdk"

const groqai = new Groq({
  apiKey: process.env.OPENAI_API_KEY,
});

export default Groq;