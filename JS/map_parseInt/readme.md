# map + parseInt 经典题

- 我在解决这道题的时候去看了MDN文档
    map callback 返回值是由callback的每一项组成的一个新数组
    callback 会接收到 item当前项 index下标 array数组本身

    parseInt 就是当前的callback item，可选的的参数radix?进制表达
    默认10进制
    0 无效，视作10进制
    1 进制，item为2，NaN
    2 进制，item为3，在2进制中无意义，NaN
