window.addEventListener('load', function() {
    var popup = document.getElementById('popup');
    var acceptBtn = document.getElementById('accept-btn');
  
    acceptBtn.addEventListener('click', function() {
      document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
      
      popup.style.display = 'none';
    });

    if (document.cookie.indexOf('cookies_accepted') === -1) {
      popup.style.display = 'flex';
    }
  });
  