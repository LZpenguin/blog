window.onload = function() {
  var mask = document.querySelector('.mask');
  var maskn = document.querySelectorAll('.maskn');
  var btns = document.querySelectorAll('.btn');
  var postcards = document.querySelectorAll('.postcard');
  var tags = document.querySelectorAll('.tag');
  var menu = document.querySelector('.menu');
  var aside = document.querySelector('.aside');
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  for(var i in btns) {
    btns[i].onclick = function(e) {
      e.stopPropagation();
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
    }
  }
  for(var i in postcards) {
    postcards[i].onclick = function(e) {
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
    }
  }
  for(var i in tags) {
    tags[i].onclick = function(e) {
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
    }
  }
  menu.onclick = function() {
    aside.style.top = 0;
  }
  aside.onclick = function() {
    aside.style.top = '-100%'
  }
}