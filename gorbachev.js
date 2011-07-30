var loc = window.location
if (/.*\?.*$/.test(loc.href)) { // Is there a query string?
  var url = loc.protocol + "//" + loc.hostname + loc.pathname + "?pagewanted=all";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false); // synchronous request 
  xhr.send();
  var encodedDoc = encodeURIComponent(xhr.response);
  location.replace("data:text/html," + encodedDoc);
}
