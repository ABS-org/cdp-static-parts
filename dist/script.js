/**
 * (CSP) Cdp Static Parts
 *
 * Integração de visual, barra e footer dos projetos da CdP
 */

(function () {

var cdp = window.cdp || {};
cdp.url = 'http://novo.atencaobasica.org.br/render-menu';

cdp.readCookie = function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

var ajax = function (opts, success, fail) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true ;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        opts.success(JSON.parse(xhr.responseText));
      } else {
        opts.fail();
      }
    }
  }
  xhr.open(opts.method, opts.url, true);
  xhr.send();
}

cdp.renderUserMenuLinks = function renderUserMenuLinks() {
  var token = cdp.readCookie('wetoken') || '';

  ajax({
    url: cdp.url,
    method: 'GET',
    xhrFields: {
      withCredentials: true
    },
    success: function(data) {
      var navbarContent = document.getElementById('main-navbar-content');
      var footerContent = document.getElementById('main-footer-content');
      
      navbarContent.insertAdjacentHTML('beforeend', data.header);
      footerContent.insertAdjacentHTML('beforeend', data.footer);
    },
    fail: function () {
      console.error('Failed to load navbar and menu.');
    }
  });
};

cdp.renderAll = function () {
  cdp.renderUserMenuLinks();
};

window.cdp = cdp;
})();