import { OpenAIApi, Configuration } from "openai"; // 玩过下OpenAI接口

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function chat(input) {
  // chatgpt 的业务代码 admin system(gpt) user(用户)
  // 为什么是数组？ 为了后续扩展聊天记录
  const messages = [
    {
      content: input,
      role: "user",
    },
  ];
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0
  },{
    proxy: {
        host: '127.0.0.1',
        port: 7890
    }
  });

  return response.data.choices[0].message.content;
}

const question = "What is the capital of France?";
chat(question)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
