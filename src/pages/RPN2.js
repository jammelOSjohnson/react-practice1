/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //posible operations
    let ops = ['+','-','*','/']
    //track numbers
    let intArr = [];
    //Check if array is small
    if(tokens.length === 1){
        return parseInt(tokens[0]);
    }
    //loop through tokens
    tokens.map((item) => {
        //check if its an operand
        if(!ops.includes(item)){
            intArr.push(parseInt(item))
        }else{   
                let val2 = intArr.pop();
                let val1 = intArr.pop();

                switch(item){
                   case '+': intArr.push(val1 + val2);
                           break;
                   case '-': intArr.push(val1 - val2);
                           break;
                   case '/': intArr.push(Math.trunc(val1 / val2));
                           break;
                   case '*': intArr.push(val1 * val2);
                           break;
                   default: break;
               }
        }
    });
    return intArr[0];
};