let temperatures = [73,74,75,71,69,72,76,73]

var dailyTemperatures = function(temperatures) {
    const res = []
    const len = temperatures.length
    for (let i = 0;i<len;i++){
        let flag = false
        const item = temperatures[i]
        
        for (let j = i+1;j<len;j++){
            const high = temperatures[j]
            if (item < high) {
                res.push(j-i)
                flag = true
                break
            }
        }
        if (!flag) {
            res.push(0)
        }
    }
    return res
};