var reverseVowels = function(s) {
    const n = s.length
    const arr = Array.from(s)
    let left = 0, right = n - 1
    while(left < right) {
        while(left < n && !isVowel(arr[left])) {
            ++left
        }
        while(right > 0 && !isVowel(arr[right])){
            --right
        }
        if( left < right){
            swap(arr,left,right)
            ++left
            --right
        }
    }
    return arr.join('')

};

const isVowel = (ch) => {
    return "aeiouAEIOU".indexOf(ch) >= 0
}

const swap = (arr, left, right) => {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}