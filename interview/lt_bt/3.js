// 123,456,789.891,234,5  国外的标准货币表达方式
function formatNumberWithCommas(number) {
    if (typeof num !== 'number') {
        return 
    }
    // 类型转换
    number +=""
    let [interger,decimal] = number.split('.')
    // 内部函数封装  复用  整数和小数部分都要千分位
    const doSplit = (num,isInteger=true) =>{
        if (num === '') return ''
        
        if (isInteger) num = num.split('').reverse()
        let str = []
        for(let i=0;i<num.length;i++){
            if(i!==0 && i%3 === 0){
                str.push(',')
            }
            str.push(num[i])
        }
        if (isInteger) return str.reverse().join('')
        return str.join('')
    }
    interger = doSplit(interger)
    decimal = doSplit(decimal,false)
    return interger + (decimal === ''?'':'.' + decimal)
}


