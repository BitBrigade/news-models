import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDSGfXijXjVZRzS4-3bZByfyWCugNgkZvs");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt =
    "summarise the content on this url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}

run();
