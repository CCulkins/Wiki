$(function(){
  var pages1 = [
    ["pages/arrays.html", "Arrays"],
    ["pages/attributes.html", "Attributes"],
    ["pages/block-elements.html", "Block Elements"],
    ["pages/bootstrap.html", "Bootstrap"],
    ["pages/box-model.html", "Box Model"],
    ["pages/branching.html", "Branching"],
    ["pages/cascading.html", "Cascading"],
    ["pages/css.html", "CSS"],
  ];
  var pages2 = [
    ["pages/divsandspans.html", "Divs & Spans"],
    ["pages/dom.html", "DOM"],
    ["pages/floats.html", "Floats"],
    ["pages/forms.html", "Forms"],
    ["pages/grid-system.html", "Grid System"],
    ["pages/inline-elements.html", "Inline Elements"],
    ["pages/javascript-arithmetic.html", "JS Arithmetic"],
    ["pages/jquery.html", "jQuery"],
  ];
  var pages3 = [
    ["pages/js-functions.html", "JS Functions"],
    ["pages/js-methods.html", "JS Methods"],
    ["pages/js-strings.html", "JS Strings"],
    ["pages/js-variables.html", "JS Variables"],
    ["pages/looping.html", "Looping"],
    ["pages/markdown.html", "Markdown"],
    ["pages/responsive-design.html", "Responsive Design"]
  ];


  pages1.forEach(function(page) {
    $("#mylinks1").append( "<li><a href=\"" + page[0] + "\">" + page[1] +"<a></li>");
  });

  pages2.forEach(function(page) {
    $("#mylinks2").append( "<li><a href=\"" + page[0] + "\">" + page[1] +"<a></li>");
  });

  pages3.forEach(function(page) {
      $("#mylinks3").append( "<li><a href=\"" + page[0] + "\">" + page[1] +"<a></li>");
  });

  });
