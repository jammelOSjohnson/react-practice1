/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    do{
        s = s.replace(
            s.indexOf('{}') !== -1 ? '{}' :
            s.indexOf('()') !== -1 ? '()' :
            s.indexOf('[]') !== -1 ? '[]' :
            null, ''
        )
    }while(s.indexOf('{}') !== -1 || s.indexOf('()') !== -1 || s.indexOf('[]') !== -1)
    return s === '';
};