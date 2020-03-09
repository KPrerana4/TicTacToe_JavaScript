function isSubset(list1, list2)
{
    return list2.every(function(element){
        return count(list2, element) == count(list1, element);
    },list1);
}

function count(list, element)
{
    return list.filter(function(member){
        return element == member;
    },element).length;
}

module.exports = isSubset;