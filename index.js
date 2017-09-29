function getFirstSelector(selector){
  //accepts a selector and returns the first element that matches
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  //pulls a .target out of #nested (# is used for IDs in selectors)
  const lis = document.getElementById('nested').querySelectorAll('div')
  var i = lis.length - 1
  return lis[i]
}

function increaseRankBy(n){
  //increases the ranks in all of the .ranked-list(s) by n (use parseInt)
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
  return lis
}

function deepestChild(){
  //pulls out the most deeply nested child from div#grand-node.
  //(Remember you can iterate over elements and call querySelector()
  // and querySelectorAll() on them)
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  var i = lis.length - 1
  return lis[i]
}
