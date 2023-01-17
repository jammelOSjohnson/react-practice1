/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(0);
    if(list1 === null && list2 === null){
        return result.next;
    }else if(list1 === null && list2 !== null){
        return list2;
    }else if(list1 !== null && list2 === null){
        return list1;
    }
    let intArr = [];
    let work = true;
    let work2 = true;
    while(work || work2){
        if(list1.next !== null && list2.next !== null){
            intArr.push(list1.val);
            intArr.push(list2.val);
            list1 = list1.next;
            list2 = list2.next;
        }else{
            if(list1.next !== null){
                intArr.push(list1.val);
                list1 = list1.next;
            }else if(work !== false){
                intArr.push(list1.val);
                work = false;
            }
            
            if(list2.next !== null){
                intArr.push(list2.val)
                list2 = list2.next;
            }else if(work2 !== false){
                intArr.push(list2.val);
                work2 = false;
            }
        }
    }
    let sorted = intArr.slice().sort((a,b)=> a - b);
    let temp = result;
    
    for(let count = 0;count < sorted.length;){
        temp.next = new ListNode(sorted[count])
        temp = temp.next;
        count++;
    }
    return result.next;
};