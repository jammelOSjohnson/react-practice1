/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0 || s === '' || s === ' ')
        return true;

    s = s.toLowerCase();
    s = s.replace(/[^a-zA-Z0-9 ]/g, '')
    s = s.replace(/\s+/g, '');
    sReverse = s.split('').reverse().join('');
    let result = true;
    
    if(s !== sReverse)
        result = false;

    return result
};