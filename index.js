function fnContent(div) {
    var content = $(div).text().toLowerCase();
    var offset = $("#" + content).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
    $(".content1-side").hide();
    $("#"+content+"-side").removeAttr( "style" ).fadeOut();
    $("#"+content+"-side").show( "clip", 800);
  }
  function callback() {
    setTimeout(function() {
      $( "#content1-side:visible" ).removeAttr( "style" ).fadeOut();
    }, 1000 );
  };