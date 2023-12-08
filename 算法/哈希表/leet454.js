var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let toSumup = new Map();
    let count = 0;
    for ( const n1 of num1){
        for ( const n2 of num2){
            toSumup.set(n1+n2, (toSumup.get(n1+n2) || 0) + 1);// 1. 将两个数组的和存入哈希表
        }
    }

    for ( const n3 of num3){
        for ( const n4 of num4){
            if (toSumup.has(0 - n3 - n4)){// 2. 判断是否有相反数
                count += toSumup.get(0 - n3 - n4);// 3. 有则累加
            }
        }
    }
    return count
};