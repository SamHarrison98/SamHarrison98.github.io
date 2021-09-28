
var notionDocId = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
notionDocId = notionDocId.substring(4);
var title = parent.document.URL.substring(parent.document.URL.indexOf('title'), parent.document.URL.length);
title = title.substring(6);
title = title.replace(/%20/g, " ");

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(async text => {
    document.querySelector("main").innerHTML = "<h1 class=\"title\" style=\"text-align: center; padding-top: 40px; color: white;\">" + title + "</h1>" + text
  })