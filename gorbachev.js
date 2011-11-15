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
} else { // Just hide ads
  var ads1 = Array.prototype.slice.call(document.getElementsByClassName("singleAd")),
      ads2 = Array.prototype.slice.call(document.getElementsByClassName("articleToolsSponsor")),
      ads = ads1.concat(ads2);

  for (var i=0; i<ads.length; i++) {
    ads[i].style.cssText = "display: none;";
  }
}
