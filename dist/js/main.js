/*===========================================
Calling the "Magnific Popup" lightbox plugin
=============================================*/
$('.lightbox').magnificPopup({
     delegate: 'a',
     type: 'image',
     gallery: {
          enabled:true
     }
})


/*===========================================
Making the search bar filter images by input
=============================================*/
$('#filter').keyup(function() {
     var keyword = $.trim(this.value);
     if (keyword === "") {
          $('img').show();
     }
     else {
          $('img').hide();
          $('img[alt*=' + keyword + ']').show();
     }
});
