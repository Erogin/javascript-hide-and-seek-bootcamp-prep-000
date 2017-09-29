function getFirstSelector(selector){
  //accepts a selector and returns the first element that matches
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  //pulls a .target out of #nested (# is used for IDs in selectors)
  const lis = document.getElementById('nested').querySelectorAll('div')
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].innerHTML === lis[i].target){
      return lis[i].innerHTML
    }
  }
  return lis
}

function increaseRankBy(n){
  //increases the ranks in all of the .ranked-list s by n (use parseInt)
}

function deepestChild(){
  //pulls out the most deeply nested child from div#grand-node.
  //(Remember you can iterate over elements and call querySelector()
  // and querySelectorAll() on them)
}
