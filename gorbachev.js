var loc = window.location
if (/.*\?.*$/.test(loc.href)) { // Is there a query string?
  var url = loc.protocol + "//" + loc.hostname + loc.pathname + "?pagewanted=all";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false); // synchronous request 
  xhr.send();

  // Hide ads
  var css = "<style>.singleAd, .articleToolsSponsor { display: none !important; }</style>";
  var doc = xhr.response.replace(/<\/head>/i, css + "</head>");

  var encodedDoc = encodeURIComponent(doc);
  location.replace("data:text/html," + encodedDoc);
}
