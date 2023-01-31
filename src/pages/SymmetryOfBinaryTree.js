/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)
        return false;

    let queue = [root.left, root.right];

    while(queue.length > 0){
        let left = queue.shift();
        let right = queue.shift();

        if(!left && !right)
            continue;
        
        if(!left || !right || left.val !== right.val)
            return false;

        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
    
};