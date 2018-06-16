// 二叉树深度遍历
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

// 汇总求和
const getSum = function sum (arr) {
  if (arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}

// 生成随机数 用来记录操作 占时没用  先放着吧
const OperationNumber = function randomNum (n) {
  var t = ''
  for (var i = 0; i < n; i++) {
    t += Math.floor(Math.random() * 10)
  }
  return t
}

export { traverseDF, getSum, OperationNumber }
