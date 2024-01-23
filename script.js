// <--------------------------------This is for the first Element shirley baby --------------------------------------->

// var elem1 = document.querySelector("#elem1");
// var img1 = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(dets){
//     img1.style.left = dets.x + "px";
//     img1.style.top = dets.y + "px";
// })

// elem1.addEventListener("mouseenter", function(){
//     img1.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave", function(){
//     img1.style.opacity = 0;
// })

// <-------------------------------------------------------------------------------------------------------------------->


var elem = document.querySelectorAll(".elem");

elem.forEach(function(e){
    // console.log(e);

    e.addEventListener("mouseenter", function(){
        e.childNodes[3].style.opacity = 1;

    });

    e.addEventListener("mouseleave", function(){
        e.childNodes[3].style.opacity = 0;
    });

    e.addEventListener("mousemove", function(dets){
        e.childNodes[3].style.left = dets.x+"px";
        e.childNodes[3].style.top = dets.y+"px";

    });
});