/*
This is the main script that will track users and create the iframe
*/

var trackingCode = function(){

  function getReferrer() {
    var e = document.referrer
      , t = /^(https?|chrome):\/\/([^\s$.?#].[^\s]*$)/.exec(e);
    return t && t.length ? t[3] : ""
  }

  var iframeCode, url = {};

  url = 'https://eaa6c45fbbd6.ngrok.io/app.html?shop=' + (window.Shopify && window.Shopify.shop) + '&referrer=' + getReferrer() + '&parentDomain=' + window.location.host + '&clientId=' + 'child_site_1';
  iframeCode = document.createElement("iframe");
  iframeCode.setAttribute("src", url),
  iframeCode.setAttribute("id", "bs_iframe"),
  document.body.appendChild(iframeCode);

  localStorage.setItem('clientId', 'child_site_1');

  window.addEventListener("message", (function(e) {
    console.log(`Received Post message: ${e}. Details: ${e.origin} - ${e.data}`);
    //"https://logisy.tech" === e.origin && "string" == typeof (t = e.data) && t.startsWith("bs-") && ((n = sessionStorage.getItem("bsSessionId")) || (n = Math.random().toString(36).substring(2) + Date.now().toString(36),
    
    var n = ''; (n = sessionStorage.getItem("bsSessionId")) || (n = Math.random().toString(36).substring(2) + Date.now().toString(36));
    sessionStorage.setItem("bsSessionId", n)
  }
  ), !1);

}();