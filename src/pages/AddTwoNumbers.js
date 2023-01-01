/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let num1Str = ``;
    let num2Str = ``;
    while(l1.next !== null){
        num1Str = `${num1Str}${l1.val}`
        l1 = l1.next;
    }
    num1Str = `${num1Str}${l1.val}`
    while(l2.next !== null){
        num2Str = `${num2Str}${l2.val}`
        l2 = l2.next;
    }
    num2Str = `${num2Str}${l2.val}`
    let count = num1Str.length;
    let count2 = num2Str.length;
    let finalNum1 = ``
    let finalNum2 = ``
    while(count > 0){
        finalNum1 = `${finalNum1}${num1Str[count -1]}`;
        count--;
    }
    while(count2 > 0){
        finalNum2 = `${finalNum2}${num2Str[count2 -1]}`;
        count2--;
    }
    //let sum = ;
    let sumArr = (BigInt(finalNum1) + BigInt(finalNum2)).toString().split('');
    let sumArrFinal = sumArr.map(x => parseInt(x));
    console.log(finalNum1);
    console.log(BigInt(finalNum1) + BigInt(finalNum2));
    let result = new ListNode(0);
    let currenNode = result;
    let count3 = sumArrFinal.length -1;
    while(count3 > -1){
        //console.log(count3)
        currenNode.next =  new ListNode(sumArrFinal[count3]);
        currenNode = currenNode.next;
        count3--;
    }
    //console.log(result)
    return result.next;
};