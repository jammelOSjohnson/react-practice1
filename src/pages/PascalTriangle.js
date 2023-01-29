/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1)
        return [[1]]

    let result = [[1]];
    let count = 0;
    calculateRow(result[0] );
    function calculateRow(arr){
        if(count === (numRows - 1)){
            return result;
        }
        let row = [];
        let length = arr.length + 1;
        for(let i = 0; i < length;){
            if(i === 0 || i === (length - 1)){
                row.push(arr[0]);
            }else{
                row.push(arr[i-1] + arr[i])
            }
            i++;
        }
        result.push(row);
        count ++;
        calculateRow(row);
    }
    return result;
};