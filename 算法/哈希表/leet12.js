var intToRoman = function(num) {
    var roman = "";
    var romanNums = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    for(var i = 0; i < nums.length; i++){
        while(num >= nums[i]){
            roman += romanNums[i];
            num -= nums[i];
        }
    }
    return roman;
};

console.log(intToRoman(3999));