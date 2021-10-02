window.onload = function() {
  var mask = document.querySelector('.mask');
  var maskn = document.querySelectorAll('.maskn');
  var btns = document.querySelectorAll('.btn');
  var postcards = document.querySelectorAll('.postcard');
  var tags = document.querySelectorAll('.tag');
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  console.log(maskn);
  for(var i in btns) {
    btns[i].onclick = function(e) {
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
          item.style.width = '12rem';
          item.style.height = '12rem';
        })
      },0)
      setTimeout(() => {
        mask.style.visibility = 'hidden';
      },800)
    }
  }
  for(var i in postcards) {
    postcards[i].onclick = function(e) {
      mask.style.visibility = 'visible';
      maskn.forEach((item) => {
        item.style.transition = 'all 0s';
        item.style.left = e.clientX + 'px';
        item.style.top = e.clientY + 'px';
      })
      setTimeout(() => {
        maskn.forEach((item) => {
          item.style.transition = 'all 0.5s linear';
          item.style.width = '12rem';
          item.style.height = '12rem';
          item.style.transform = 'translate(-50%, -50%) rotate('+Math.random()*360+'deg) scale(1)';
          item.style.left = Math.random()*width + 'px';
          item.style.top = Math.random()*height + 'px';
          
        })
      },0)
      setTimeout(() => {
        mask.style.visibility = 'hidden';
      },800)
    }
  }
  for(var i in tags) {
    tags[i].onclick = function(e) {
      mask.style.visibility = 'visible';
      maskn.forEach((item) => {
        item.style.transition = 'all 0s';
        item.style.left = e.clientX + 'px';
        item.style.top = e.clientY + 'px';
      })
      setTimeout(() => {
        maskn.forEach((item) => {
          item.style.transition = 'all 0.5s linear';
          item.style.width = '12rem';
          item.style.height = '12rem';
          item.style.transform = 'translate(-50%, -50%) rotate('+Math.random()*360+'deg) scale(1)';
          item.style.left = Math.random()*width + 'px';
          item.style.top = Math.random()*height + 'px';
          
        })
      },0)
      setTimeout(() => {
        mask.style.visibility = 'hidden';
      },800)
    }
  }
}