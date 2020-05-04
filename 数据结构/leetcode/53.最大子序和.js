//动态规划
function maxSubArray(nums){
    var dp = [];
    res =(dp[0] = nums[0]);

    for(let i = 1;i<nums.length;i++){
        if(dp[i-1] < 0){
            dp[i] = nums[i];
        }else{
            dp[i] = nums[i] + dp[i-1];
        }

        res = Math.max(res,dp[i])
    }

    return res
}

console.log(func([-2,1,-3,4,-1,2,1,-5,4]))

//贪心算法
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;

    for(const num of nums){
        if(sum > 0){
            sum += num;
        }else{
            sum = num;
        }
        ans = Math.max(ans,sum);
    }
    return ans
};