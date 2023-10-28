let s = '{[()]}' //true

var isValid = function(s) {
    const stack = []
    const len = s.length

    // if (len % 2 === 0)  return false

    const map = {
          '(': ')',
          '[': ']',
          '{': '}'
        }
        for (let i = 0; i < len; i++) {
            const c = s[i]
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c)
            } else {
                //判断此时的 c 是否和栈顶的元素匹配
                //将栈顶的元素取出作为map的key，看看map的value是否等于c
                if(!stack.length||map[stack.pop()] !== c){
                    return false
                }
                
            }
        }
        return !stack.length
};



// 123456 654321