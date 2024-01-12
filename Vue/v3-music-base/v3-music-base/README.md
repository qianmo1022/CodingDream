# 复杂组件

- 搜索组件
   - tailwindcss
      - 原子化css
      - 1个单位 = 0.25rem
         h-? px/16/4

- components
   - 一般业务组件
      - common
         - 通用组件
      - layout
        - 布局组件

- 项目亮点
   - 在搜索的时候使用了防抖，做了性能优化，lodash js的业务框架

- 简历
   - 先完成再完美
   - PDF
   - 会员 WPS-office 要有个好格式
   - 不要错别字

- 搜索功能介绍
   - 使用了Vue全家桶 + ts，项目结构清晰合理
   - 使用ElementPlus提供的ElPopover、ElInput，实现了搜索热点、搜索结果的展示
   - 使用lodashjs，实现搜索功能的防抖，完成搜索性能优化
   - 歌曲播放数，使用了扩展Number原型链的方式优化展示
   - 充分的数据流设计，将应用开发分为 UI 组件 + store

- 给面试官介绍pinia 的使用
   - 数据驱动界面
   - 选用pinia 更简单，更hooks化
   - 基于dev-tools 页面状态和数据状态的统一
   - 搜索模块数据流的专门设计
   - 优化了搜索功能的防抖，完成了性能优化
      - state showSearchView searchKeyword   suggestData
      - getters showHot
      - actions suggest
   
- 请介绍一个你设计的比较复杂的组件，并解释为什么复杂
   - 搜索组件
   - 状态比较复杂
      除了keyword searchResult 外
      我还打理了showPopview hotList等数据
   - 引入pinia 并提前设计数据流
   - suggest 组件粒度很 OK
      SearchPopover
         ELPopOver
            ElInput slot
            SearchSuggest
   - 还使用了ts models 定义了interface

