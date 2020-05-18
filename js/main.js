window.scrollTo(0, 0);

/*start loader*/
var loaderFirst, loaderSecond, loaderThird;
startLoader();

function startLoader() {
    TweenLite.set(".Mirrorloadpart0", {alpha: 0,x: 0,y: 0,scale: 1});
    TweenLite.set(".Mirrorloadpart1", {alpha: 0,x: 0,y: 0,scale: 1});
    TweenLite.set(".Mirrorloadpart2", {alpha: 0,x: 0, y: 0,scale: 1});
    TweenLite.set(".mirrorCycleLoader", {alpha: 0,x: 0,y: 0,scale: 1});
    TweenLite.set(".load_img0", {alpha: 1});
    TweenLite.set(".load_img1", {alpha: 1 });
    TweenLite.set(".load_img2", {alpha: 1 });
    step_loader_1();
}

function step_loader_1() {
    loaderFirst = new TweenMax.to(".load_img0", .35, {alpha: 0,ease: Bounce.easeIn,repeat: -1,yoyo: true,delay: .1
    });
    loaderSecond = new TweenMax.to(".load_img1", .35, { alpha: 0, ease: Bounce.easeIn,repeat: -1,yoyo: true,delay: .2
    });
    loaderThird = new TweenMax.to(".load_img2", .35, {alpha: 0,ease: Bounce.easeIn,repeat: -1,yoyo: true,delay: .4
    });
}
/*
var flagStop = "1";
$(".stoploaderAnimation").on("click", function() {
    if (flagStop == "1") {
        end_loading();
        flagStop = "0";
    } else if (flagStop == "0") {}
})*/
function end_loading() {
    loaderFirst.kill();
    loaderSecond.kill();
    loaderThird.kill();
    loaderFirstB = new TweenMax.to(".load_img0", .8, {
        alpha: 1,
        ease: Bounce.easeIn,
        delay: .2
    });

    loaderSecondB = new TweenMax.to(".load_img1", .8, {alpha: 1, ease: Bounce.easeIn, delay: .1
    });
    loaderThirdB = new TweenMax.to(".load_img2", .8, {alpha: 1,ease: Bounce.easeIn,delay: .3
    });
    TweenMax.to(".mirrorCycleLoader", .8, {alpha: 1,ease: Bounce.easeIn,delay: .5,onComplete: MirrorEffectLoader
    });
    TweenMax.to(".Mirrorloadpart0", .8, {alpha: 1,ease: Bounce.easeIn,delay: .5
    });
    TweenMax.to(".Mirrorloadpart1", .8, {alpha: 1,ease: Bounce.easeIn,delay: .5
    });
    TweenMax.to(".Mirrorloadpart2", .8, {alpha: 1,ease: Bounce.easeIn,delay: .5
    });
TweenMax.to("#loading", 1, {alpha:0, scale:1, delay:2, onComplete:hideLoading});
    TweenLite.delayedCall( 0,initZogkler);
    TweenLite.delayedCall( 0,initZogklerHat);
    
}


function hideLoading(){
    TweenMax.to("#loading", .1, {alpha:0, scale:0});
}
function MirrorEffectLoader() {

    TweenMax.to(".mirrorCycleLoader", .7, {ease: Expo.easeOut,alpha: 0,scale: 2,delay: .7
    });

    TweenMax.to(".Mirrorloadpart0", .7, {ease: Expo.easeOut,alpha: 0,scale: 1.4,y: -10,delay: .15
    });

    TweenMax.to(".Mirrorloadpart1", .7, {ease: Expo.easeOut,alpha: 0,scale: 1.4,x: -10,delay: .3
    });

TweenMax.to(".Mirrorloadpart2", .7, {ease: Expo.easeOut,alpha: 0,scale: 1.4,x: 10,delay: .5
    });



}


TweenLite.delayedCall( 3,end_loading);
/*end loader*/

/*start 3d*/
msieversion();
function msieversion() 
{
    /*
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) 
    {*/
     if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)))
{  
    }
    else  // If another browser, return 0
    {
        console.log('otherbrowser,, not ie');
        VANTA.WAVES({
          el: "#vanta-bg",
          color: 0x001935,
          shininess: 10.00,
          waveHeight: 40.00,
          waveSpeed: 0.20,
          zoom: 1.02
        })
    }

    return false;
}

/*end 3d*/

/*start zogkler

*/

document.getElementById("reload-zogkler").addEventListener("click", function(){ 
    initZogkler();  TweenLite.delayedCall( 2*speedZogkler,startZogkler);
});

function initZogklerHat(){
    TweenMax.set(".zogkler-hat",{alpha:0,y:-75,x:30, rotation:90});    
    TweenLite.delayedCall( 12*speedZogkler,startZogkler); 
    TweenLite.delayedCall( 10*speedZogkler,startHome);
}

    var speedZogkler = .25;
    var rotationZogkler = 0;
    var rotationZogklerNUM = 30;
    var zogklerLength =  0;
    var zogklerLimit = 8;/*in zogklerLimit time on the left hand, the animation stops*/
    var zogklerLimitRightHand = zogklerLimit + 0.25;
var initZogkler = function() {
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

/*end zogkler*/

/*start home*/
homeSetAnimation();
var speedHome = .25;

function homeSetAnimation(){
    TweenMax.set(".hello-text-mirror",{alpha:0, scale:1.5});
    TweenMax.set(".hello-text-back",{alpha:0, scale:1.5});
    TweenMax.set(".hello-text-front",{alpha:0, scale:1.5});
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
function text_dev1(){TweenLite.to((".professional"), 1.5, {text:text_Developer1, ease:Linear.easeNone,delay:2, onComplete:text_dev2});  }
function text_dev2(){TweenLite.to((".professional"), 1.5, {text:text_Developer2, ease:Linear.easeNone, delay:2,onComplete:text_dev3});  }
function text_dev3(){TweenLite.to((".professional"), 1.5, {text:text_Developer3, ease:Linear.easeNone, delay:2,onComplete:text_dev4});  }
function text_dev4(){TweenLite.to((".professional"), 1.5, {text:text_Developer4, ease:Linear.easeNone, delay:2,onComplete:text_dev01}); }

/*end home*/

/*start menumobile*/
/*mphke sto home.js*/
/*end menumobile*/

/*start about*/
var __OBJECTS, words = [];
var word, thisChar = "";
word = document.querySelector('.about-text').innerText;
words = word.split(" ");
var textAbout = "";
for (i = 0; i < words.length; i++) {
  textAbout += "<span class='character'>" + words[i] + " </span> ";
}
document.querySelector('.about-text').innerHTML = textAbout;

function initAboutText() {
    TweenLite.set(".character", {
            alpha: 0,
            y: 70,
            rotationY: 180,
            rotationX: 180,
            transformOrigin: "0% 50% -50"
        });
}




document.addEventListener( 'DOMContentLoaded', function () {
    
    }, false );

function aboutCharacters(){
    var speedChar = .1;
    var items = document.getElementsByClassName('character');
    for(var i =0; i< items.length; i++){
        thisChar = items[i];
        TweenMax.to(thisChar, 2, {
            alpha: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            transformOrigin: "0% 0% 0",
            ease: Back.easeOut,
            delay: speedChar
        });
        speedChar += .1;
    }
}
    
/*end about*/

/*menu vanilla js - start*/
scrollTo = function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

document.getElementById("toHome").addEventListener('click', function(){
  if(isIE||isEdge){
        document.getElementById("home").scrollIntoView();
    }else{
        scrollTo(document.getElementById("home"));
    }
}, false);

document.getElementById("toAbout").addEventListener('click', function(){
  if(isIE||isEdge){
        document.getElementById("about").scrollIntoView();
    }else{
        scrollTo(document.getElementById("about"));
    }
}, false);

document.getElementById("toWork").addEventListener('click',function(){
  if(isIE||isEdge){
        document.getElementById("work").scrollIntoView();
    }else{
        scrollTo(document.getElementById("work"));
    }
}, false);


document.getElementById("toFooter").addEventListener('click', function(){
     if(isIE||isEdge){
        document.getElementById("footer").scrollIntoView();
    }else{
        scrollTo(document.getElementById("footer"));
    }
}, false);

    
/*check if about is in view - start*/
function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
var flagAbout = "2";
document.addEventListener( 'DOMContentLoaded', function () {
    myFunctionforScrolled();
}, false );
window.addEventListener("scroll", myFunctionforScrolled);
function myFunctionforScrolled(){
    
    var homeElement = document.getElementById("home");
    if(elementInViewport2(homeElement)){
            document.getElementById("toAbout").classList.remove("active");
            document.getElementById("toWork").classList.remove("active");
            document.getElementById("toFooter").classList.remove("active");
            document.getElementById("toHome").classList.add("active");
        
    }else{
        document.getElementById("toHome").classList.remove("active");
    }
    
    var aboutElement = document.getElementById("about");
    if(elementInViewport2(aboutElement)){
        if(flagAbout>1){
            console.log("user get in About Section for first time");
            initAboutText();
            aboutCharacters();
            document.getElementById("toHome").classList.remove("active");
            document.getElementById("toWork").classList.remove("active");
            document.getElementById("toFooter").classList.remove("active");
            document.getElementById("toAbout").classList.add("active");
            flagAbout = "0";
        }else{
            document.getElementById("toHome").classList.remove("active");
            document.getElementById("toWork").classList.remove("active");
            document.getElementById("toFooter").classList.remove("active");
            document.getElementById("toAbout").classList.add("active");         
        }
    }else{
        document.getElementById("toAbout").classList.remove("active");
    }
    
    var workElement = document.getElementById("work");
    if(elementInViewport2(workElement)){
        document.getElementById("toHome").classList.remove("active");
        document.getElementById("toAbout").classList.remove("active");
        document.getElementById("toFooter").classList.remove("active");
        document.getElementById("toWork").classList.add("active");
    }else{
        document.getElementById("toWork").classList.remove("active");
    }
    
    var footerElement = document.getElementById("footer");
    if(elementInViewport2(footerElement)){
        document.getElementById("toHome").classList.remove("active");
        document.getElementById("toAbout").classList.remove("active");
        document.getElementById("toWork").classList.remove("active");
        document.getElementById("toFooter").classList.add("active");
    }else{
        document.getElementById("toFooter").classList.remove("active");
    }
}

function closeMenu(){
    var elementMenu = document.getElementsByTagName("BODY")[0];
    elementMenu.classList.remove("opened-menu");
}
    /*check if about is in view - end*/

/*menu vanilla js - end*/


/*sticky start*/
window.onscroll = function() {
    if (window.innerWidth > 768) {
        stickyFunc()
    }else{
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("sticky");
    }
};
window.onresize = function() {
if (window.innerWidth > 768) {
        //
    }else{
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("sticky");
    }
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 10;

function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*sticky end*/