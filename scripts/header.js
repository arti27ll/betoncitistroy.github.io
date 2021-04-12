$(function () {
    $(document).scroll(function () {
        let $nav = $("#header");
        $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
    });
});

jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
       $('li.active').removeClass('active');
       $('a[href="#'+id+'"]').addClass('active');
       $('li[name="'+id+'"]').addClass('active');
   }
})
});