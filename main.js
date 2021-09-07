function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

var ul = document.getElementById('player');
var url = 'https://fortnite-api.theapinetwork.com/store/get';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data)
 var player = data.data
 player.reverse()
 
  return player.map(function(author) {
      console.log(author.item.name)
   var li = createNode('li');
   var img = createNode('img');
   var span = createNode('span');
   img.src = `${author.item.images.background }`;
   

    span.innerHTML = `${author.item.name}`;
  
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});