import openai
openai.api_key = "sk-xxx" # 你的API KEY
COMPLETION_MODEL = "text-davinci-003" #模型常量 文本生成模型：达芬奇第三版

# 声明一个字符串模板
# 可以换行
# 描述细节需求
# 分步骤去执行
# 定义输出的格式
prompt = """
Consideration product:工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿童水上玩具

1.Compose human readable product title used on Amazon in English within 20 words
2.Write 5 selling points for the products in Amazon
3.Evaluate a price range for this product in U.S

Output the result in json format with three properties called title,
selling_points and price_range
"""
# 定义函数，封装和chatgpt
def get_response(prompt):
    completions = openai.Completion.create(
        # openAI里的大模型很值钱
        engine = COMPLETION_MODEL,# 模型
        prompt = prompt,# 提示词
        max_tokens = 512,# 省点money
        n = 1,# 1条
        stop = None,
        temperature = 0.0   # 大模型的自由发挥度 0~2之间
    )
    print(completions)
    message = completions.choices[0].text #
    return message

print(get_response(prompt))

# {
#     title:"" ,
#     selling_points:"",
#     price_range: "",
# }