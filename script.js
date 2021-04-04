var menu = document.getElementById("menu");
	header = document.getElementsByTagName("header")[0];
	notify = document.getElementById("notify");
	abc = document.getElementById("abc");
	button = document.getElementsByClassName("button");
	view_image = document.getElementById("view-image");
	image = document.getElementsByClassName("image");
	style = header.style;
	
header.onmouseover = menu.onmouseover = menu.onclick = function() {
	style.top = "0px";
	style.visibility = "visible";
	style.opacity = "1";
}

header.onmouseout = menu.onmouseout = function() {
	style.top = "-56px";
	style.visibility = "hidden";
	style.opacity = "0";
}

function guess_audio() {
	notify.style.display = "none";
}

document.getElementsByClassName("button")[0].onclick = function() {
	guess_audio();
	var audio = new Audio();
	audio.src = "https://tran-quoc-tuan.github.io/3684004552778207155.mp3";
	audio.play();
	audio.loop = true;
}

document.getElementsByClassName("button")[1].onclick = function() {
	guess_audio();
}

button[0].onmouseout = function() {
	button[0].classList.remove("active");
}

button[0].onmouseover = function() {
	button[0].classList.add("active");
}

button[1].onmouseout = function() {
	button[1].classList.remove("active");
}

button[1].onmouseover = function() {
	button[1].classList.add("active");
}

window.onload = function() {
	notify.style.visibility = "visible";
	notify.style.opacity = "1";
	abc.style.bottom = "0px";
	abc.style.visibility = "visible";
	abc.style.opacity = "1";
}

var header = document.getElementsByTagName("header")[0];
	lastscrroll = 0;

window.addEventListener("scroll", function () {
    	var scrollTop = pageYOffset || document.scrollTop;
	    if (scrollTop > lastscrroll) {
	        header.style.top = "-56px";
	    }
	    else {
	        header.style.top = "0px";
	    }
	    lastscrroll = scrollTop;
	}
)

for(var i = 0; i < image.length; i++) {
	image[i].onclick = function() {
		console.log(this.length);
		document.getElementById("view").src = this.src;
		view_image.style.visibility = "visible";
	}
}