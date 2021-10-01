// for moving EYE 

document.querySelector('.body').addEventListener('mousemove', eyeball);

    function eyeball(event) {
        var eye = document.querySelector('.wrapper');
        
            let x = (eye.getBoundingClientRect().left) 
            let y = (eye.getBoundingClientRect().top) 
            let radian = Math.atan2(event.pageX - x, event.pageY - y)
            let rot = (radian * (180 / Math.PI) * -1) +270;
            eye.style.transform = `rotate(${rot}deg)`
        console.log(x,y)

    }

// for changing navbar color

var nav = document.querySelector(".nav");
var lastScrollTop=0;
window.addEventListener("scroll",()=>{
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        nav.style.top = "-80px";
    } else{
        nav.style.top="0"
    }
    lastScrollTop = scrollTop;
})