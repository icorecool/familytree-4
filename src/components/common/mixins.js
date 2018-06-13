const traverseDF = function (treeNodes) {
  if (!treeNodes || !treeNodes.length) return
  var order = []
  treeNodes.forEach(value => {
    var childs = value.children
    if (childs && childs.length > 0) {
      order = order.concat(traverseDF(childs))
    }
    order.push(value)
  })
  return order
}

const getSum = function sum (arr) {
  if (arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}

export { traverseDF, getSum }