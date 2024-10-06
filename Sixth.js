$(document).on("mousemove",function(e){
    var cursor=$(".cursor");
    cursor.attr("style","top:"+(e.pageY)+"px; left:"+(e.pageX)+"px;")
});