/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //track total
    let total = 0;
    //track operation type
    let op = '';
    //posible operations
    let ops = ['+','-','*','/']
    //track numbers
    let intArr = [];
    //track calcs
    let calcs = 0;
    //Check if array is small
    if(tokens.length === 1){
        return parseInt(tokens[0]);
    }
    //loop through tokens
    tokens.map((item, index) => {
        //check if its an operand
        if(!ops.includes(item)){
            intArr.push(parseInt(item))
        }else{
            console.log('index', index);
            op = item;
            let calc = 0.00;
            if(calcs === 0 && intArr.length >= 3){
                let index1 = intArr.length - 2;
                let index2 = intArr.length - 1;
                console.log('arr:', intArr)
                switch(op){
                    case '+': calc = intArr[index1] + intArr[index2];
                            break;
                    case '-': calc = intArr[index1] - intArr[index2];
                            break;
                    case '/': calc = intArr[index1] / intArr[index2];
                            break;
                    case '*': calc = intArr[index1] * intArr[index2];
                            break;
                    default: break;
                }
                console.log('calc:', calc);
                total = total + Math.trunc(calc);
                console.log('total:', total);
                intArr.splice(index1,2);
                //console.log('arr:', intArr)
            }else if(calcs === 0 && intArr.length === 2){
                console.log('arr:', intArr)
                switch(op){
                    case '+': calc = intArr[0] + intArr[1];
                            break;
                    case '-': calc = intArr[0] - intArr[1];
                            break;
                    case '/': calc = intArr[0] / intArr[1];
                            break;
                    case '*': calc = intArr[0] * intArr[1];
                            break;
                    default: break;
                }
                console.log('calc:', calc);
                total = total + Math.trunc(calc);
                console.log('total:', total);
                intArr.splice(0,2);
                //console.log('arr:', intArr)
            }else if(calcs > 0 && intArr.length === 1){
                 //console.log(`wtf: ${intArr.length} ${intArr} ${op}`);
                 console.log('arr:', intArr)
                 if(parseInt(tokens[0]) !== intArr[0]){
                     switch(op){
                        case '+': calc = total + intArr[0];
                                break;
                        case '-': calc = total - intArr[0];
                                break;
                        case '/': calc = total / intArr[0];
                                break;
                        case '*': calc = total * intArr[0];
                                break;
                        default: break;
                    }
                 }else{
                    switch(op){
                        case '+': calc = intArr[0] + total;
                                break;
                        case '-': calc = intArr[0] - total;
                                break;
                        case '/': calc = intArr[0] / total;
                                break;
                        case '*': calc = intArr[0] * total;
                                break;
                        default: break;
                    }
                 }
                 
                console.log('calc:', calc);
                total =  Math.trunc(calc);
                console.log('total:', total);
                intArr.splice(0,1);
            }else if(calcs > 0){
                 console.log('inside last if', intArr.length);
                 let length = intArr.length;
                 let indexCheck = length - 1;
                 
                 console.log(indexCheck);
                 //console.log(`wtf: ${indexCheck} ${intArr.length} ${intArr} ${op}`);
                 console.log('arr:', intArr);
                 if(length > 1 && op !== '/' && op !== '*'){
                     indexCheck = 0;
                     switch(op){
                        case '+': calc =  total + intArr[indexCheck];
                                break;
                        case '-': calc = total - intArr[indexCheck];
                                break;
                        default: break;
                    }
                 }else{
                     switch(op){
                        case '+': calc = length > 1 ? intArr[indexCheck] + total  :
                                            total + intArr[indexCheck];
                                break;
                        case '-': calc = length > 1 ? intArr[indexCheck] - total  :
                                            total - intArr[indexCheck];
                                break;
                        case '/': calc = length > 1 ? intArr[indexCheck] / total  :
                                            total / intArr[indexCheck];
                                break;
                        case '*': calc = length > 1 ? intArr[indexCheck] * total  :
                                            total * intArr[indexCheck];
                                break;
                        default: break;
                    }
                 }
                 
                console.log('calc:', calc);
                total =  Math.trunc(calc);
                console.log('total:', total);
                intArr.splice(indexCheck,1);
                
            }
            calcs = calcs + 1;
        }
    });
    return total;
};