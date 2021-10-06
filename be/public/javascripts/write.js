var form = document.querySelector('form')
var title = document.querySelector('#title');
var author = document.querySelector('#author');
var tags = document.querySelectorAll('input[type="checkbox"]');
var content = document.querySelector('#content');
var search = window.location.search;
if(search) {
  var id = search.substring(1).split('&')[1].split('=')[1];
  var pageNo = search.substring(1).split('&')[0].split('=')[1];
}

var getPost = async function() {
  var data = await $.ajax({
    type: 'get',
    url: 'http://localhost:3000/posts/'+id,
    success: function(rel) {
      console.log(rel);
      title.value = rel.data.title;
      author.value = rel.data.author;
      content.value = rel.data.content;
      for(var i in rel.data.tags) {
        for(var j in tags) {
          if(rel.data.tags[i] === tags[j].value) {
            tags[j].setAttribute('checked','true')
          }
        }
      }
    }
  })
  return data;
}

if(id) {
  getPost();
}

form.onsubmit = function() {
  var data = $('form').serialize();
  if(id) {
    $.ajax({
      type: 'put',
      url: 'http://localhost:3000/posts/'+id,
      data: data,
      success: function(data) {
        console.log(data);
        window.location.href = 'articleList.html?page='+pageNo;
      }
    })
  }else {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/posts',
      data: data,
      success: function(data) {
        console.log(data);
        window.location.href = 'articleList.html?page=1';
      }
    })
  } 
  return false;
}