let stack = [] //只能使用数组的push和pop方法，实现栈的功能 或 只能使用shift和unshift方法，实现栈的功能

//入栈
stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('小布丁')
stack.push('钟薛高')

//出栈
while (stack.length > 0) {
    const top = stack[stack.length - 1]
    console.log('我正在吃',top);
    stack.pop()
}