homeSetAnimation();
var speedHome = .25;

function homeSetAnimation(){
	TweenMax.set(".hello-text-mirror",{alpha:0, scale:1.5});
	TweenMax.set(".hello-text-back",{alpha:0, scale:1.5});
	TweenMax.set(".hello-text-front",{alpha:0, scale:1.5});	
	TweenLite.delayedCall( 1*speedZogkler,startHome);
	TweenMax.set(".hello-letter",{alpha:0, y:70,rotationY:180, rotationX:180, transformOrigin:"0% 50% -50" });	
	TweenMax.set(".hello-surname",{alpha:0, y:20,rotationY:30, rotationX:360,scale:0, transformOrigin:"0% 50% -50" });
	TweenMax.set(".second-home-row",{alpha:0, y:20});
		
	
}
function startHome(){
	TweenMax.to(".hello-text-back, .hello-text-mirror", 2*speedHome, {alpha:1,scale:1});
	TweenMax.to(".hello-text-front", 2*speedHome, {alpha:1,scale:1, delay: 2*speedHome});
	TweenLite.delayedCall( 3*speedHome,MirrorHello);
	TweenLite.delayedCall( 4*speedHome,AliasHome);
}
function MirrorHello(){
	TweenMax.to(".hello-text-mirror", 4*speedHome, {alpha:0,scale:1.5, ease:Power3.easeOut, onComplete: HIDEMirror});
}

function HIDEMirror(){
	document.querySelector('.hello-text-mirror').style.display = "none";
}

function AliasHome(){
	TweenMax.to(".hello-letter-1", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut});
	TweenMax.to(".hello-letter-2", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 1*speedHome});
	TweenMax.to(".hello-letter-3", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 2*speedHome});
	TweenMax.to(".hello-letter-4", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 3*speedHome});
	TweenMax.to(".hello-letter-5", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 4*speedHome});
	TweenMax.to(".hello-letter-6", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 5*speedHome});
	TweenMax.to(".hello-letter-7", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 6*speedHome});
	TweenMax.to(".hello-letter-8", 7*speedHome, {alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 7*speedHome});
	TweenMax.to(".hello-surname", 7*speedHome, {alpha:1,y:0,scale:1, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Power3.easeOut, delay: 9*speedHome});
	TweenMax.to(".second-home-row", 7*speedHome, {alpha:1,y:0, delay: 12*speedHome, onComplete: text_dev01});
}


var text_Developer1 = "Front-End Developer";
var text_Developer2 = "Creative Developer";
var text_Developer3 = "UI/UX Developer";
var text_Developer4 = "Front-End Developer";


function text_dev01(){TweenLite.to((".professional"), 1.5, {text:text_Developer1, ease:Linear.easeNone, onComplete:text_dev2});}
function text_dev1(){TweenLite.to((".professional"), 1.5, {text:text_Developer1, ease:Linear.easeNone,delay:2, onComplete:text_dev2});	}
function text_dev2(){TweenLite.to((".professional"), 1.5, {text:text_Developer2, ease:Linear.easeNone, delay:2,onComplete:text_dev3});	}
function text_dev3(){TweenLite.to((".professional"), 1.5, {text:text_Developer3, ease:Linear.easeNone, delay:2,onComplete:text_dev4});	}
function text_dev4(){TweenLite.to((".professional"), 1.5, {text:text_Developer4, ease:Linear.easeNone, delay:2,onComplete:text_dev01});	}