
// when user refreshes
// get the last clicked item name
// go through the list of nav items
// find the matching name and change the style of that item

var style = {
  backgroundColor: "#fff",
  color: "#5c88bf"
};

window.onload = function() {
  var lastLink = window.localStorage.getItem("lastLink");
  $(".nav-item").each(function() {
    var navItemText = $(this).find(".nav-span").text();
    if(lastLink.toUpperCase().indexOf(navItemText.toUpperCase()) > -1) {
      $(this).find(".nav-button").css(style);
    }
  });
}

// control of the nav active
$("body").on("click", ".nav-item", function() {
  var $this = $(this);
  var hash = window.location.hash.toString();
  var text = $(this).find('.nav-span').text();
  var localStorageItemName = "lastLink";

  window.localStorage.removeItem(localStorageItemName);
  window.localStorage.setItem(localStorageItemName, text);

  $(".nav-button").removeAttr("style");
  $this.find(".nav-button").css(style);

});
