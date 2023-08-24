var line = document.getElementById("line1");
var centerX = 60, centerY = 100, radius = 100, angle = 0;
var rotate = function(angle){
    var x1, y1, x2, y2;
 	x1 = centerX + radius * Math.cos( angle );
    y1 = centerY + radius * Math.sin( angle );
    x2 = centerX - radius * Math.cos( angle );
    y2 = centerY - radius * Math.sin( angle );
    
    line.setAttribute( 'x1', x1 );
    line.setAttribute( 'y1', y1 );
    line.setAttribute( 'x2', x2 );
    line.setAttribute( 'y2', y2 );
}
// animation
setInterval( function(){
    angle += .1;
    rotate( angle );
},100);