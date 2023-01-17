/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let x = 0; x < n;){
        nums1.unshift(nums2[x]);
        nums1.splice(nums1.findIndex(i => i === 0), 1);
        x++;
    }
    nums1 = nums1.sort((a,b) => a - b);
};