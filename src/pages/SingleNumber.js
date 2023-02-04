/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1)
        return nums[0];
    
    let result = null;
    while(nums.length !== 0){
        let curr = nums.shift();
        if(!nums.includes(curr)){
            result = curr;
        }else{
            nums.splice(nums.indexOf(curr), 1)
        }    
    }
    return result;
};