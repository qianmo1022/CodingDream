- 顶级大厂需要看到的实习生的github页面？
- fork(HuggingFace and Vue)
    开源的力量
- 给一个开源repo贡献代码

- 思想切换
    前端 切到 后端
    前端：DOM BOM 
    后端：I/O DataBase network 服务器 api 文件系统 操作系统

- 管家
    指令交给他
    向 厨师，花匠...发号施令
    自动的把任务完成 AutoGen
    UserProxyAgent
    initiateChat(
        assistant,
        message=""
    )
    执行代码
- AssistantAgent
    llm_config user_proxy message -> openai 分析命令的意思
    自己编写代码的能力，写出来，交给user_proxy执行，并检查结果

- AutoGen 一堆Agent聊着聊着把活给干了，不需要人的干预，只需授权