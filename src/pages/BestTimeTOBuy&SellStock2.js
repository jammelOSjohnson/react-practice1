/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    if(prices.length === 1)
        return 0;

    for(let price of prices){
        if(price < minPrice)
            minPrice = price;
        else
            pProfit = Math.max(pProfit, price - minPrice);
    }
    return pProfit;
};