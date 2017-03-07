var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
         point.style.opacity = 1;
         point.style.transform = "rotate(0deg) translateY(0)";
         point.style.msTransform = "rotate(0deg) translateY(0)";
         point.style.WebkitTransform = "rotate(0deg) translateY(0)";
     };

var animatePoints = function(points) { 
     forEach(points, revealPoint);
};


window.onload = function() {
    
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    addEventListener('scroll', function(event){
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}


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