/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    let result = true;
    while(curr && curr.next){
        head = head.next;
        curr = curr.next.next;
        if(head === curr){
            result = true;
            return result;
        }   
    }
    result = false;
    return result;
};