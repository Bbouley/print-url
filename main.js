function reqListener () {
  var node = document.createElement('p');
  var textNode = document.createTextNode(this.responseText);
  node.appendChild(textNode);
  document.getElementsByClassName('json')[0].appendChild(node);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.reddit.com/r/aww.json");
oReq.send();
