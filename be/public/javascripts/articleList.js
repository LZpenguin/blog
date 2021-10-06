window.onload = async function() {
  var pageNo = window.location.search.substring(1).split('=')[1] || 1;
  var total = 1;
  var pageNumber = document.querySelector('#pageNumber').children[0];
  var last = document.querySelector('#last');
  var next = document.querySelector('#next');
  var tbody = document.querySelector('tbody');
  var tbody2 = $('tbody');

  var renderList = async () => {
    await $.ajax({
      type: 'get',
      url: 'http://localhost:3000/posts?pageNo='+pageNo,
      success: (rel) => {
        console.log(rel);
        var list = template('template',rel);
        tbody.innerHTML = list;
        total = rel.pageTotal;
        pageNumber.innerHTML = rel.pageNo;
      }
    })
  }
  await renderList();

  //删除文章
  tbody2.on('click','.delete',(item) => {
    var id = item.target.getAttribute('data-id');
    $.ajax({
      type: 'delete',
      url: 'http://localhost:3000/posts/'+id,
      success:  function(rel) {
        console.log(rel);
        window.location.href = 'http://localhost:3000/articleList.html?page='+pageNo;
      }
    })
    return false;
  })

  //修改文章
  tbody2.on('click','.update',(item) => {
    var id = item.target.getAttribute('data-id');
    window.location.href = 'write.html?page='+pageNo+'&id='+id;
  })

  //翻页
  last.addEventListener('click',async () => {
    if(pageNo>1) {
      pageNo = pageNo - 1;
      await renderList();
    }
  })
  next.addEventListener('click',async () => {
    if(pageNo<total) {
      pageNo = pageNo - 0 + 1;
      await renderList();
    }
  })
}