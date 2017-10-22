$(function() {
  $.getJSON("release-data.json" , function(data) {
    var
      ulObj = $("#release-info"),
      len = data.length;

    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"日付":data[i].datetime}).text(data[i].description));
    }
  });
});