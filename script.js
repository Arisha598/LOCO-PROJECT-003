function loading(){
    
var tl = gsap.timeline()

tl.to(".yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"

})
tl.from(".yellow2",{
    top:"100%",
    delay:0.7,
    duration:0.5,
    ease:"expo.out"
},"anim")
tl.to(".loader h1",{
    color:"black",
    duration:0.7,
    delay:0.6
},"anim")
tl.to(".loader",{
    opacity:0
})
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.querySelector(".footer img").addEventListener("click",() =>{
    scroll.scrollTo(0)
})


var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");

elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgImg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgImg})`
    })
})