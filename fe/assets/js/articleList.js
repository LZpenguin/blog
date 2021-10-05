var list = document.querySelector('.post-list-posts');
var mask = document.querySelector('.mask');
  var maskn = document.querySelectorAll('.maskn');
$.ajax({
  type: 'get',
  url: 'http://localhost:3000/posts',
  success: function(rel) {
    console.log(rel);
    var cards = template('template',rel);
    list.innerHTML = '';
    list.innerHTML = cards;
  }
})
$('.post-list-posts').on('click','.postcard',function(e) {
  if(e.target.className === 'postTag') {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
    mask.style.visibility = 'visible';
    maskn.forEach((item) => {
      item.style.transition = 'all 0s';
      item.style.left = e.clientX + 'px';
      item.style.top = e.clientY + 'px';
    })
    setTimeout(() => {
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
      mask.style.visibility = 'hidden';
      alert('tag');
    },800)
  }else {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
    mask.style.visibility = 'visible';
    maskn.forEach((item) => {
      item.style.transition = 'all 0s';
      item.style.left = e.clientX + 'px';
      item.style.top = e.clientY + 'px';
    })
    setTimeout(() => {
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
      mask.style.visibility = 'hidden';
      alert('post')
    },800)
  }
})
