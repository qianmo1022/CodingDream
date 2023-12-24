// 引入了但没有使用，会报警告
import type { Banner } from "../models/banner"
import type { Personalized } from "../models/personalized"
import http from './http.ts'

// ts 有完整的编译阶段 ts -> js ->
// 后端api的业务代码 广告位
export async function useBanner() {
    // 前端也有数据校验了，要说不，为用户负责   ts 接口定义
    // http.get<> 范型 返回值的类型是 Banner 数组
    // resolve()
    const { banners } = await http.get<{ banners:Banner[] }>('/banner',{type: 1})
    return banners
}
// 看接口文档 亮点 JSDOC 生成 后端写给前端看的  前后端分离
// api/index.ts 中加一个业务方法
// 为了大型项目，前端模型层 后端的数据就不怕不规范了  参考文档+前端需求
// pinia + model 让数据更安全的
export async function usePersonalized() {
    // 前端也有数据校验了，要说不，为用户负责   ts 接口定义
    // http.get<> 范型 返回值的类型是 Banner 数组
    // resolve()
    const { result } = await http.get<{ result:Personalized[] }>('/personalized')
    return result
}