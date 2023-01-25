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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    findDepth(root);
    function findDepth(root, currDepth = 1){
        if(root === null)
            return max;

        if(currDepth > max)
            max = currDepth;

        findDepth(root.left, currDepth + 1);
        findDepth(root.right, currDepth + 1);
    }
    return max;
};