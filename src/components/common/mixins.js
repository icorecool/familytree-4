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

// 拼音排序
const pySegSort = function pySort (arr, empty) {
  if (!String.prototype.localeCompare) { return null }

  var letters = '*abcdefghjklmnopqrstwxyz'.split('')
  var zh = '啊把差大额发噶哈级卡啦吗那哦爬器然啥他哇西呀咋'.split('')
  var segs = []
  var curr

  letters.forEach((list, i) => {
    curr = { letter: list.toUpperCase(), data: [] }
    arr.forEach(value => {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(value, 'zh') <= 0) && value.localeCompare(zh[i], 'zh') === -1) {
        curr.data.push(value)
      }
    })
    if (empty || curr.data.length) {
      segs.push(curr)
      curr.data.sort((a, b) => {
        return a.localeCompare(b)
      })
    }
  })
  return segs
}

// 选取class
const getElementsClass = function getClass (classnames) {
  let classobj = []
  let classint = 0
  let tags = document.getElementsByTagName('*')

  for (let i in tags) {
    if (tags[i].nodeType === 1) {
      if (tags[i].getAttribute('class') === classnames) {
        classobj[classint] = tags[i]
        classint++
      }
    }
  }
  return classobj
}

// 生成随机数 用来记录操作 占时没用  先放着吧
const OperationNumber = function randomNum (n) {
  var t = ''
  for (var i = 0; i < n; i++) {
    t += Math.floor(Math.random() * 10)
  }
  return t
}

export { traverseDF, getSum, OperationNumber, pySegSort, getElementsClass }
