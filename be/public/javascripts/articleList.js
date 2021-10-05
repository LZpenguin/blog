window.onload = async function() {
  var tbody = document.querySelector('tbody');
  var renderList = async () => {
    await $.ajax({
      type: 'get',
      url: 'http://localhost:3000/posts',
      success: (rel) => {
        console.log(rel);
        var list = template('template',rel);
        tbody.innerHTML = list;
      }
    })
  }
  await renderList();
  var tbody = $('tbody');
  tbody.on('click','.delete',(item) => {
    var id = item.target.getAttribute('data-id');
    $.ajax({
      type: 'delete',
      url: 'http://localhost:3000/posts/'+id,
      success:  function(rel) {
        console.log(rel);
        window.location.reload();
      }
    })
    return false;
  })
  tbody.on('click','.update',(item) => {
    var id = item.target.getAttribute('data-id');
    window.location.href = 'write.html?id='+id;
  })
}