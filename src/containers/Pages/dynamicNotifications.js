export const rankMap = (data) => {
    let categoryRankMap = new Map();
    let categorySet = new Set();
    for(let obj of data)
    {
        categorySet.add(obj.merchantCategory);
    }
   const sums =  data.reduce(function(sums,entry){
        sums[entry.merchantCategory] = (sums[entry.merchantCategory] || 0) + 1;
        return sums;
    },{});
    /*for(category of categorySet)
    {
        categorySet.add(obj.merchantCategory);
    }
    categoryRankMap.set(data.merchantCategory, data.)

    let found = data.find( (element,category)=> {
        return element.merchantCategory === category;
    });*/
    return sums;
}

export const highestRankedCategory = (obj) => {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}
