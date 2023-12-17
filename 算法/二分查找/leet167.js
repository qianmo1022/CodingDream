var twoSum = function(numbers, target) {
    var i = 0, j = numbers.length - 1;
    while (i < j) {
        var sum = numbers[i] + numbers[j];
        if (sum == target) {
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return [-1, -1];
};