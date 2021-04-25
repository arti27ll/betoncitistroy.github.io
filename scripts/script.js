$(function () {
    $(document).scroll(function () {
        let $nav = $("#header");
        $nav.toggleClass('bg-dark', $(this).scrollTop() > $nav.height());
    });
});

jQuery(window).scroll(function(){
    let $sections = $('section');
    $sections.each(function(i,el){
   let top  = $(el).offset().top-100;
   let bottom = top +$(el).height();
   let scroll = $(window).scrollTop();
   let id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
       $('li.active').removeClass('active');
       $('a[href="#'+id+'"]').addClass('active');
       $('li[name="'+id+'"]').addClass('active');
   }
})
});

$(document).ready(function(){
    $(".phone").mask("+7 (999) 999-99-99");
});