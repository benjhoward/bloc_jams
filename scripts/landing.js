var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    };
    $.each($('.point'), revealPoint);
};


$(window).load(function() {
    
    if ($(window).height() > 950) {
         animatePoints();
    }
    
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    
    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
        }
    });
});


//var animatePoints = function() {
// 
//    var points = document.getElementsByClassName('point');
//    
//    var revealPoint = function(index) {
//        points[index].style.opacity = 1;
//        points[index].style.transform = "rotate(0deg) translateY(0)";
//        points[index].style.msTransform = "rotate(0deg) translateY(0)";
//        points[index].style.WebkitTransform = "rotate(0deg) translateY(0)";
//    }
//    
//    for (var i = 0; i < points.length; i++) {
//        revealPoint(i);
//    }
//};