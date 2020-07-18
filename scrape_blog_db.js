
  var txt = ""
  fetch("https://potion-api.now.sh/table?id=be173b7ca74c48ca80d7a8b2dbd3f9dc")
  .then(res => res.json())
  .then(json => {
    for (element of json) {
      txt += "<div class=\"container\" style=\"padding-bottom: 20px; padding-top: 20px\">\
      <a href=\"blog-template.html?id=" + element.id + "&title=" + element.fields.Title + "\">\
      <div id=" + element.id + " class=\"button wrap is-large is-primary is-bold\">\
      <article class=\"media\">\
      <figure class=\"media-content\">\
      <h1 class=\"title is-size-4\">" + element.fields.Title + "</h1>" +
      "<h2 class=\"subtitle\">" + element.fields.Date.start_date + "</h2>" +
      "</figure></article></div></a></div>"
      document.getElementById("Blog_Posts").innerHTML = txt;

  }
})