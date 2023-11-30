# 搜索

- 项目亮点
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端  防抖（一段时间执行一次）和节流（每个单位时间执行一次）
    - 后端  
        - posts 相当于SQL中的 LIke 关键字 `%${keyword}%`
        - 各种数据放入Hadoop    flink
        - Elastic Search    node
    - AIGC

- 数据？
    - Python 爬虫 
    - AIGC 生成数据
        get_response
        prompt 电商网站 手机 50条

##  数据清洗
- pandas 来处理aigc生成的text文本
    - split('\n') 按换行符切割
    - pandas 提供了DataFrame 实例
        pd.DataFrame({"product_name"})  column_name
    - pd.head()
        默认给5条

- 文本 如何转化成向量 数学表达 OpenAI 提供 embedding 接口 
    cosin 值

- embedding
    openai 的新接口
    查询 keyword + 数据 都进行向量计算
    cosine_similarity 两个向量间的相似度 -> 0 相同，或相似的
    相反的话 负值