
$(document).ready(function () {

  $( function() {
    $( "#datepicker1" ).datepicker({dateFormat: 'yy-mm-dd'});
    $( "#datepicker2" ).datepicker({dateFormat: 'yy-mm-dd'});
  } );


  $("p.select-box i").click(function(){
    $(this).parent().find("select").show().focus().click();
  })

  $("ul.tabs a").click(function(){
    var activeItem = $(this).attr("data");
    $("div.intro").removeClass("active");
    $("ul.tabs a").removeClass("active");
    $(this).addClass("active");
    $("div.tab-data").removeClass("active");
    $("div.tab-data."+ activeItem).addClass("active");
  });


  $(".search button").click(function(){
    var activeItem = $(this).attr("class");
    $("div.intro").removeClass("active");
    $(this).addClass("active");
    $("div.tab-data").removeClass("active");
    $("div.tab-data."+ activeItem).addClass("active");
  });



  $("ul.table>li h4").click(function(){
    $("ul.table>li").removeClass("open");
    $("ul.table>li h4").removeClass("open");
    $(this).parent().addClass("open");
    $(this).addClass("open");
  });


  $("ul.table .list a").click(function(){
    $("ul.table .list a").removeClass("on");
    $(this).addClass("on");
  });

  $("#discount .close").click(function(){
    $("#discount").fadeOut();
  });

    $("div.discount button").click(function(){
      $("#discount").fadeIn();
    });



});
