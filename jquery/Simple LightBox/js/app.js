var overlays=$('<div id="overlay"></div>');
$("body").append(overlays);
var images= $("<img>");
var caption= $("<p></p>");
overlays.append(images);
overlays.append(caption);
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var link= $(this).attr('href');
  images.attr("src", link);
  overlays.show();
  var captionText= $(this).children("img").attr("alt");
  caption.text(captionText);
  
});

overlays.click(function(){
  overlays.hide();
});