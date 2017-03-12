function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

var header = document.getElementById("header"),
    stop = 500,
    body = document.documentElement || document.body.parentNode || document.body,
    hasOffset = window.pageYOffset !== undefined,
    scrollTop;

var isMobile = detectmob();

if (!isMobile) {
  window.onscroll = function (e) {
    scrollTop = hasOffset ? window.pageYOffset : body.scrollTop;

    if (scrollTop >= stop) {
      header.classList.add('stick');
    } else {
      header.classList.remove('stick');
    }
  }
}
