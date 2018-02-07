/*===========================================
Calling the "Magnific Popup" lightbox plugin
=============================================*/
$('.lightbox').magnificPopup({
     delegate: 'a',
     type: 'image',
     gallery: {
          enabled:true
     }
});


/*===========================================
Making the search bar filter images by input
=============================================*/
$('#filter').keyup(function() {
     var keyword = $.trim(this.value);
     if (keyword === "") {
          $('a').show();
          $('img').show();
     }
     else {
          $('img').hide();
          $('a').hide();
          keyword = keyword.split(" ").join("\\ ");
          $('img[alt*=' + keyword + ' i]').show();
          $('a[title*=' + keyword + ' i]').show();
     }
});
