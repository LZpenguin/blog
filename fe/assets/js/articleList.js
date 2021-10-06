var list = document.querySelector('.post-list-posts');
var centerBlock = document.querySelector('.list');
var detailBlock = document.querySelector('.detail');
var searchCon = document.querySelector('.search input');
var searchBtn = document.querySelector('.search img');
var mask = document.querySelector('.mask');
var maskn = document.querySelectorAll('.maskn');
var pageNo = document.querySelector('#pageNo');
var last = document.querySelector('#last');
var next = document.querySelector('#next');

//获取文章
var getPost = async function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/posts?pageNo='+pageNo.getAttribute('data-no'),
    success: function(rel) {
      console.log(rel);
      var cards = template('template',rel);
      list.innerHTML = '';
      list.innerHTML = cards;
      pageNo.setAttribute('data-total',rel.pageTotal);
    }
  })
}
getPost();

//分页按钮
last.addEventListener('click',async (e) => {
  var page = pageNo.getAttribute('data-no');
  if(page>1) {
    page -= 1;
    pageNo.setAttribute('data-no',page);
    setTimeout(async () => {
      await getPost();
      pageNo.children[0].innerHTML = '第'+page+'页';
    },500);
  }
})
next.addEventListener('click',async () => {
  var page = pageNo.getAttribute('data-no');
  var pageTotal = pageNo.getAttribute('data-total');
  if(page<pageTotal) {
    page = page - 0 + 1;
    pageNo.setAttribute('data-no',page);
    setTimeout(async () => {
      await getPost();
      pageNo.children[0].innerHTML = '第'+page+'页';
    },500);
  }
})

//刷新仍是原页面
var hash = window.location.hash;
window.location.hash = '';
window.location.hash = hash;

//获取文章详情
window.onhashchange = async function() {
  id = window.location.hash.substring(1);
  if(id) {
    var data = await $.ajax({
      type: 'get',
      url: 'http://localhost:3000/posts/'+id,
      success: function(rel) {
        console.log(rel);
      }
    })
    centerBlock.style.display = 'none';
    detailBlock.style.display = 'block';
    var detail = template("template2",data.data);
    detailBlock.innerHTML = detail;
  }else {
    centerBlock.style.display = 'block';
    detailBlock.style.display = 'none';
  }
}

//事件委托绑定点击事件
$('.post-list-posts').on('click','.postcard',function(e) {
  height = document.documentElement.clientHeight;
  width = document.documentElement.clientWidth;
  mask.style.visibility = 'visible';
  maskn.forEach((item) => {
    item.style.transition = 'all 0s';
    item.style.left = e.clientX + 'px';
    item.style.top = e.clientY + 'px';
  })
  setTimeout(async () => {
    maskn.forEach((item) => {
      item.style.transition = 'all 0.5s linear';
      item.style.transform = 'translate(-50%, -50%) rotate('+Math.random()*360+'deg) scale(1)';
      item.style.left = Math.random()*width + 'px';
      item.style.top = Math.random()*height + 'px';
      if(width>420) {
        item.style.width = '12rem';
        item.style.height = '12rem';
      }else {
        item.style.width = '6rem';
        item.style.height = '6rem';
      }
    })
    
  },0)
  setTimeout(() => {
    if(e.target.className === 'postTag') {
      
    }else {
      var node = e.target;
      while(node.className!=='postcard') {
        node = node.parentNode;
      }
      var id = node.getAttribute('id');
      window.location.hash = '#'+id;
    }
    maskn.forEach((item) => {
      item.style.top = '-'+ height + 'px';
      if(width>420) {
        item.style.width = '4rem';
        item.style.height = '4rem';
      }else {
        item.style.width = '2rem';
        item.style.height = '2rem';
      }
    })
  },800)
})

//文章查找
searchBtn.onclick = function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/posts?key='+searchCon.value,
    success: function(rel) {
      console.log(rel);
      var cards = template('template',rel);
      list.innerHTML = '';
      list.innerHTML = cards;
    }
  })
}
searchCon.addEventListener('keyup',function(e) {
  e.preventDefault();
  if(e.keyCode === 13) {
    searchBtn.click();
  }
})

