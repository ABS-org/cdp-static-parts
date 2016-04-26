/**
 * (CSP) Cdp Static Parts
 *
 * Integração de visual, barra e footer dos projetos da CdP
 */

(function (window, $_) {

var cdp = window.cdp || {};
cdp.url = 'https://perfis.atencaobasica.org.br';
cdp.service = 'network';

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
  };
  xhr.open(opts.method, opts.url, true);
  xhr.send();
};

cdp.renderUserMenuLinks = function renderUserMenuLinks(cb) {
  var token = cdp.readCookie('wetoken') || '';

  ajax({
    url: cdp.url + '/render-menu',
    method: 'GET',
    xhrFields: {
      withCredentials: true
    },
    success: function(data) {
      var navbarContent = document.getElementById('main-navbar-content');
      var footerContent = document.getElementById('main-footer-content');

      navbarContent.insertAdjacentHTML('beforeend', data.header);
      footerContent.insertAdjacentHTML('beforeend', data.footer);
      document.body.insertAdjacentHTML('beforeend', data.susconecta);

      if ($_) {
        $_('.navbar-not-logged .susconecta_login').click(function (){
          $_('#modal-susconecta').modal('show');
        });

        $_('#modal-susconecta .login-action-links').click(function (e){
          e.preventDefault();
          if (window.location.pathname === '/') {
            window.location = e.target.href + '?service=' + cdp.service;
            return;
          }

          window.location = e.target.href + '?service=' + cdp.service + '&returnUrl=' + window.location.pathname;
        });
      }

      if(typeof cb === "function") cb(null);
    },
    fail: function (error) {
      console.error('Failed to load navbar and menu.');
      if(typeof cb === "function") cb(error);
    }
  });
};

cdp.renderAll = function (cb) {
  cdp.renderUserMenuLinks(cb);
};

window.cdp = cdp;
})(window, jQuery || $);