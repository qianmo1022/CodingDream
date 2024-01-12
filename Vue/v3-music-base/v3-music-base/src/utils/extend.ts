// 流程代码 -> 封装模块化（JS工具库）
import { useNumberFormat } from './number'

Number.prototype.numberFormat = function () {
    return useNumberFormat(this)
}