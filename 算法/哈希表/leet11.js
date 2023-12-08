var maxArea = function(height) {
    var len = height.length;
    var max = 0;
    var i = 0;
    var j = len - 1;
    while (i < j) {
        var area = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(max, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};
