export const rankMap = (data) => {
    let categoryRankMap = new Map();
    let categorySet = new Set();
    for(obj of data)
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
}


