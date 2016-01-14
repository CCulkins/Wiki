$(function(){
  var pages = [
    ["pages/arrays.html", "Arrays"],
    ["pages/attributes.html", "Attributes"],
    ["pages/block-elements.html", "Block Elements"],
    ["pages/bootstrap.html", "Bootstrap"],
    ["pages/box-model.html", "Box Model"],
    ["pages/branching.html", "Branching"],
    ["pages/cascading.html", "Cascading"],
    ["pages/css.html", "CSS"],
    ["pages/divsandspans.html", "Divs & Spans"],
    ["pages/dom.html", "DOM"],
    ["pages/floats.html", "Floats"],
    ["pages/forms.html", "Forms"],
    ["pages/grid-system.html", "Grid System"],
    ["pages/inline-elements.html", "Inline Elements"],
    ["pages/javascript-arithmetic.html", "JS Arithmetic"],
    ["pages/jquery.html", "jQuery"],
    ["pages/js-functions.html", "JS Functions"],
    ["pages/js-methods.html", "JS Methods"],
    ["pages/js-strings.html", "JS Strings"],
    ["pages/js-variables.html", "JS Variables"],
    ["pages/looping.html", "Looping"],
    ["pages/markdown.html", "Markdown"],
    ["pages/responsive-design.html", "Responsive Design"]
];


  pages.forEach(function(page) {
    $("#myLinks").append( "<li>" + "<a href=\"" + page[0] + "\">" + page[1] +"<a>" +  "</li>");

  });

  });
