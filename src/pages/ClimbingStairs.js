/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = [];
    for(let i = n; i > 0;){
        i--;
        let times = 0;
        if((i + 1) === n){
            times +=  1;
        }else if((i + 2) === n){
            times +=  2;
        }else if(result.length >= 2){
            times = times + result[0] + result[1]
        }else{
            times = times + result[0];
        }
       result.unshift(times);
    }
    return result[0];
};