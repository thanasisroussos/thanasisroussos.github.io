initZogklerHat();
function initZogklerHat(){
	TweenMax.set(".zogkler-hat",{alpha:0,y:-75,x:30, rotation:90});
}
initZogkler();
	var speedZogkler = .25;
	var rotationZogkler = 0;
	var rotationZogklerNUM = 30;
	var zogklerLength =  0;
	var zogklerLimit = 8;/*in zogklerLimit time on the left hand, the animation stops*/
	var zogklerLimitRightHand = zogklerLimit + 0.25;
function initZogkler(){	
	speedZogkler = .25;
	rotationZogkler = 0;
	rotationZogklerNUM = 30;
	zogklerLength =  0;
	zogklerLimit = 5;/*in zogklerLimit time on the left hand, the animation stops*/
	zogklerLimitRightHand = zogklerLimit + 0.25;
	TweenMax.set(".zogkler-reload",{alpha:0,scale:0});
	TweenMax.set(".zogkler-item-1",{alpha:1,x:0,y:0,rotation:0,scale:.55});
	TweenMax.set(".zogkler-item-2",{alpha:1,x:0,y:0,rotation:0,scale:.55});
	TweenMax.set(".zogkler-item-3",{alpha:1,x:0,y:0,rotation:0,scale:.55});
	TweenMax.set(".zogkler-item-4",{alpha:1,x:0,y:0,rotation:0,scale:.55});
	TweenLite.delayedCall( 4*speedZogkler,startZogkler);
}
function startZogkler(){
	TweenMax.to(".zogkler-hat",  4*speedZogkler, {alpha:1,y:0,x:0,rotation:0, ease: Bounce.Out});
	TweenLite.delayedCall( 0*speedZogkler,zogklerLeftHandA);
	TweenLite.delayedCall( 6*speedZogkler,zogklerRightHandA);
	TweenLite.delayedCall( 0*speedZogkler,zogklerItemA);
	TweenLite.delayedCall( 2*speedZogkler,zogklerItemA2);
	TweenLite.delayedCall( 4*speedZogkler,zogklerItemA3);
	TweenLite.delayedCall( 6*speedZogkler,zogklerItemA4);
}

function zogklerLeftHandA(){
	if(zogklerLength<zogklerLimit){		
		TweenMax.to(".zogkler-left", 2*speedZogkler,{rotation:-7,transformOrigin:"bottom bottom", scale:.95, y:-2,x:4, onComplete:zogklerLeftHandB});
	}
}
function zogklerLeftHandB(){	
	TweenMax.to(".zogkler-left", 2*speedZogkler,{rotation:0,transformOrigin:"bottom bottom", scale:1, y:0, x:0, onComplete:zogklerLeftHandA});
}


function zogklerRightHandA(){	
	if(zogklerLength<zogklerLimitRightHand){
	zogklerLength = zogklerLength + 0.25;
	TweenMax.to(".zogkler-right", 2*speedZogkler,{rotation:-20,transformOrigin:"top left", scale:.95, y:-1,x:-4, onComplete:zogklerRightHandB});
	}else{
		TweenMax.to(".zogkler-reload", 2*speedZogkler, {alpha:1,scale:1});

	}
}
function zogklerRightHandB(){	
	TweenMax.to(".zogkler-right", 2*speedZogkler,{rotation:0,transformOrigin:"top left", scale:1, y:0, x:0, onComplete:zogklerRightHandA});
}
function zogklerItemA(){
	if(zogklerLength<zogklerLimit){	
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-1", 2*speedZogkler, {alpha:1, scale:.75,y:-50,x:20, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemB});
	zogklerLength = zogklerLength + 1;
	}
}

function zogklerItemB(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-1",  2*speedZogkler, {scale:1,y:-100,x:40, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemC});
}
function zogklerItemC(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-1",  2*speedZogkler, {scale: .75,y:-50,x:60, rotation: rotationZogkler, ease: Power0.easeNone, onComplete:zogklerItemD});
}

function zogklerItemD(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-1",  2*speedZogkler, {scale:.55,y:0,x:80, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemE});
}
function zogklerItemE(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-1",  2*speedZogkler, {scale:.55,y:0,x:0, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemA});
}


function zogklerItemA2(){
	if(zogklerLength<zogklerLimit){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;	
	TweenMax.to(".zogkler-item-2", 2*speedZogkler, {alpha:1, scale:.75,y:-50,x:20, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemB2});
	}
}

function zogklerItemB2(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-2",  2*speedZogkler, {scale:1,y:-100,x:40, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemC2});
}
function zogklerItemC2(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-2",  2*speedZogkler, {scale: .75,y:-50,x:60, rotation: rotationZogkler, ease: Power0.easeNone, onComplete:zogklerItemD2});
}

function zogklerItemD2(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-2",  2*speedZogkler, {scale:.55,y:0,x:80, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemE2});
}
function zogklerItemE2(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-2",  2*speedZogkler, {scale:.55,y:0,x:0, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemA2});
}


function zogklerItemA3(){
	if(zogklerLength<zogklerLimit){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;	
	TweenMax.to(".zogkler-item-3", 2*speedZogkler, {alpha:1, scale:.75,y:-50,x:20, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemB3});
	}
}

function zogklerItemB3(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-3",  2*speedZogkler, {scale:1,y:-100,x:40, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemC3});
}
function zogklerItemC3(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-3",  2*speedZogkler, {scale: .75,y:-50,x:60, rotation: rotationZogkler, ease: Power0.easeNone, onComplete:zogklerItemD3});
}

function zogklerItemD3(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-3",  2*speedZogkler, {scale:.55,y:0,x:80, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemE3});
}
function zogklerItemE3(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-3",  2*speedZogkler, {scale:.55,y:0,x:0, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemA3});
}


function zogklerItemA4(){	
	if(zogklerLength<zogklerLimit){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;	
	TweenMax.to(".zogkler-item-4", 2*speedZogkler, {alpha:1, scale:.75,y:-50,x:20, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemB4});
}
}

function zogklerItemB4(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-4",  2*speedZogkler, {scale:1,y:-100,x:40, ease: Power0.easeNone, rotation: rotationZogkler, onComplete:zogklerItemC4});
}
function zogklerItemC4(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-4",  2*speedZogkler, {scale: .75,y:-50,x:60, rotation: rotationZogkler, ease: Power0.easeNone, onComplete:zogklerItemD4});
}

function zogklerItemD4(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-4",  2*speedZogkler, {scale:.55,y:0,x:80, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemE4});
}
function zogklerItemE4(){
	rotationZogkler = rotationZogkler + rotationZogklerNUM;
	TweenMax.to(".zogkler-item-4",  2*speedZogkler, {scale:.55,y:0,x:0, rotation: rotationZogkler,  ease: Power0.easeNone, onComplete:zogklerItemA4});
}