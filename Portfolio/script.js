window.addEventListener('mousemove', eyeball);

    function eyeball(event) {
        var eye = document.querySelector('.wrapper');
        
            let x = (eye.getBoundingClientRect().left) 
            let y = (eye.getBoundingClientRect().top) 
            let radian = Math.atan2(event.pageX - x, event.pageY - y)
            let rot = (radian * (180 / Math.PI) * -1) +270;
            eye.style.transform = `rotate(${rot}deg)`
        console.log(x,y)

    }