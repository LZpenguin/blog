var form = document.querySelector('form')
var title = document.querySelector('#title');
var author = document.querySelector('#author');
var content = document.querySelector('#content');
var id = window.location.search.substring(1).split('=')[1]
var getPost = async function() {
  var data = await $.ajax({
    type: 'get',
    url: 'http://localhost:3000/posts/'+id,
    success: function(rel) {
      console.log(rel);
      title.value = rel.data.title;
      author.value = rel.data.author;
      content.value = rel.data.content;
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
        alert('更新成功！');
        window.location.href = 'articleList.html';
      }
    })
  }else {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/posts',
      data: data,
      success: function(data) {
        console.log(data);
        alert('提交成功！')
        window.location.href = 'articleList.html';
      }
    })
  } 
  return false;
}