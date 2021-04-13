var flowers = document.getElementsByClassName("flower__head");
    contain = document.getElementsByClassName("contain");
    background = document.getElementById("background");
    width = window.innerWidth;
    height = window.innerHeight;

// background.style.setProperty("--width", width + "px");
// background.style.setProperty("--height", height + "px");

function random(min, max){
	return Math.random() * (max - min) + min
}

for (item of contain) {
    item.style.transition = "transform 20s";
    item.style.transform = "translateX(" + random(width*2, width*3) + "px) translateY(" + random(-height, height) + "px)";
}

for(var item of flowers) {
    item.style.transform = "rotateZ(" + random(1000, 2000) + "deg)";
    item.style.opacity = "0";
    item.style.setProperty("--main-flower", "rgba(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")");
}
