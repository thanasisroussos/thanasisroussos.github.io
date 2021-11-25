var __OBJECTS = [];

$(document).ready(function() {
	$('#background_image').mouseParallax({ moveFactor: 4});

	$('#word-container .character').each(function() {
		__OBJECTS.push($(this));
	});
	
end_loading();
addPositioningClasses();
	
	function addPositioningClasses() {
		var $card = __OBJECTS.shift();  /*anti gia shift pop an thelw anapoda*/
		TweenMax.to($card,2,{alpha:1,y:0, rotationX:0,rotationY:0, transformOrigin:"0% 0% 0", ease:Back.easeOut});
		if (__OBJECTS.length) { setTimeout(addPositioningClasses,30); }
	}

	function end_loading(){
	/*$('#loading').delay(1000).fadeOut(300)*/;
	TweenLite.to("#loading", 1,{autoAlpha:0, delay:2, onComplete:end_loading_two});
		codeAddress();
		
	}

	function end_loading_two(){
		lala1.kill();
		lala2.kill();
		lala3.kill();
		
	}

	function codeAddress() {
		TweenLite.set(".character",{alpha:0,y:70,rotationY:180, rotationX:180, transformOrigin:"0% 50% -50" });	
	}

});

//window.onload = end_loading;




$(".menu_icon").click(fn_menu_click);
$("#close_menu").click(fn_menu_close);

function fn_menu_click(e) {
	e.preventDefault();	
	TweenLite.to("#menu_site", 1,{scale:1, transformOrigin:"center center", ease:Elastic.easeOut});		
	TweenLite.to(".menu_k", .5,{alpha:1,delay:.5});
	TweenLite.to("#img_logo_menu", .5,{scale:1, alpha:1,ease:Sine.easeIn ,delay:.2});
	TweenLite.to("#name_logo_menu", .5,{alpha:1, x:0,ease:Sine.easeIn,delay:.4});
	TweenLite.to("#menu_logo_title", .5,{alpha:1, x:0,ease:Sine.easeIn,delay:.8});
	TweenLite.to("#menu_icon1", 1,{alpha:0, y:10, ease:Bounce.easeOut});			
	TweenLite.to("#menu_icon2", .5,{alpha:0});	
	TweenLite.to("#menu_icon3", 1,{alpha:0,y:-10, ease:Bounce.easeOut});
	$("#menu_icon").css("cursor", "default");		
	TweenLite.to("#footer", 1,{y:100});
	return false;
}

function fn_menu_close(e) {
	e.preventDefault();	
	TweenLite.to("#menu_site",.2,{scale:0, transformOrigin:"top right", ease:Back.easeOut,onComplete:svise});	
	TweenLite.to(".menu_k", .5,{alpha:0});	
	TweenLite.to("#menu_icon1", .5,{alpha:1, y:0});			
	TweenLite.to("#menu_icon2", .5,{alpha:1});	
	TweenLite.to("#menu_icon3", .5,{alpha:1, y:0});
	$("#menu_icon").css("cursor", "pointer");
	TweenLite.to("#footer", 1,{y:0});
	return false;
}
function svise(){
	TweenLite.set("#img_logo_menu",{scale:1.5, alpha:0});
	TweenLite.set("#name_logo_menu",{alpha:0, x:100});
	TweenLite.set("#menu_logo_title",{alpha:0, x:-100});
}
$(".btn_social_icons").click(fn_social);
function fn_social(e) {
	e.preventDefault();	
	TweenLite.to(".btn_social_icons", .5,{x:100,autoAlpha:0});
	TweenLite.to(".fa-facebook-f", .7,{x:0,autoAlpha:1,delay:0,ease:Sine.easeIn});
	TweenLite.to(".fa-instagram", .7,{x:0,autoAlpha:1,delay:.2,ease:Sine.easeIn});
	TweenLite.to(".fa-linkedin", .7,{x:0,autoAlpha:1,delay:.4,ease:Sine.easeIn});
	TweenLite.to(".fa-angle-right", .7,{x:0,autoAlpha:1,delay:.6,ease:Sine.easeIn});
	return false;
}
$(".fa-angle-right").click(fn_social_close);
function fn_social_close(e) {
	e.preventDefault();	
	TweenLite.to(".btn_social_icons", 1,{x:0,autoAlpha:1,ease:Sine.easeIn});
	TweenLite.to(".fa-facebook-f", 1,{x:250,autoAlpha:0});
	TweenLite.to(".fa-instagram", 1,{x:250,autoAlpha:0});
	TweenLite.to(".fa-linkedin", 1,{x:250,autoAlpha:0});
	TweenLite.to(".fa-angle-right", 1,{x:250,autoAlpha:0});		 
	return false;
}	

		$(".fa-facebook-f").click(function (){fb_redirect();});
		$(".fa-instagram").click(function (){instagram_redirect();});
		$(".fa-linkedin").click(function (){linkedin_redirect();});							  
								  
	function fb_redirect(){
		window.open('https://www.facebook.com/thanasis.roussos.58', '_blank');
		};
	function linkedin_redirect(){
		window.open('https://www.linkedin.com/in/thanasis-roussos-4b035b122/', '_blank');
		};
	function instagram_redirect(){
		window.open('https://www.instagram.com/thanasisroussos/', '_blank');
		};

start();
start1();



	function start(){
		TweenLite.set(".text00",{alpha:0});
		TweenLite.set(".text01",{alpha:0});
		TweenLite.set("#menu_site",{scale:0});
		TweenLite.set(".menu_k",{alpha:0});
		TweenLite.set(".fa-facebook-f", {x:250,autoAlpha:0});	
		TweenLite.set(".fa-instagram", {x:250,autoAlpha:0});
		TweenLite.set(".fa-linkedin", {x:250,autoAlpha:0});
		TweenLite.set(".fa-angle-right", {x:250,autoAlpha:0});
		TweenLite.set("#img_logo_menu",{scale:1.5, alpha:0});
		TweenLite.set("#name_logo_menu",{x:-50, alpha:0});
		TweenLite.set("#menu_logo_title",{x:50, alpha:0});
	};

	function start1(){
		TweenLite.set("#load_img0",{alpha:0});
		TweenLite.set("#load_img1",{alpha:0});
		TweenLite.set("#load_img2",{alpha:0});
		TweenLite.set("#cycle_loader2",{alpha:0,scale:0});
		TweenLite.set("#cycle_loader3",{alpha:0,scale:0});
		TweenLite.set("#cycle_loader4",{alpha:0,scale:0});
		TweenLite.set("#cycle_loader5",{alpha:0,scale:0});		
		step_loader_1();
		/*cycle_loader();*/
	}
	var lala1, lala2, lala3;
	var lala01, lala02, lala03;

	function step_loader_1() {
		lala1 = new TweenMax.to("#load_img0", .8,{alpha:1, ease:Bounce.easeIn, repeat:-1, yoyo:true, delay:.2});
		lala2 = new TweenMax.to("#load_img1", .8,{alpha:1, ease:Bounce.easeIn, repeat:-1, yoyo:true, delay:.1});
		lala3 = new TweenMax.to("#load_img2", .6,{alpha:1, ease:Bounce.easeIn, repeat:-1, yoyo:true, delay:.5 });
	}

	

/*	
$( ".menu_k" ).on( "mouseover", function() {
  $( this ).css( "color", "#4c4c4c" );
}).on( "mouseleave", function() {
	 $( this ).css( "color", "white" );
});*/
/*
	function step_loader_1(){
		lala1 = new TweenLite.to("#load_img0", .3,{alpha:1, ease:Bounce.easeIn});
		lala2 = new TweenLite.to("#load_img1", .6,{alpha:1, ease:Bounce.easeIn});
		lala3 = new TweenLite.to("#load_img2", .9,{alpha:1, ease:Bounce.easeIn, onComplete:step_loader_2});
		TweenLite.delayedCall(.9,step_loader_2);
	}
	function step_loader_2(){
		lala01 = new TweenLite.to("#load_img0", .3,{alpha:0, ease:Bounce.easeIn});
		lala02 = new TweenLite.to("#load_img1", .6,{alpha:0, ease:Bounce.easeIn});
		lala03 = new TweenLite.to("#load_img2", .9,{alpha:0, ease:Bounce.easeIn, onComplete:step_loader_1});
		TweenLite.delayedCall(.9,step_loader_1);
	}
*/
/*	var timeone = "";
		var timetwo = "";
		var timethree = "";
		timeone = .2;
		timetwo = .4;
		timethree = .1;

function cycle_loader(){
		TweenLite.to("#cycle_loader2", timeone,{alpha:1, scale:1, ease:Elastic.easeOut,delay:timethree});
		TweenLite.to("#cycle_loader3", timeone,{alpha:1, scale:1, ease:Elastic.easeOut,delay:timethree*2});
		TweenLite.to("#cycle_loader4", timeone,{alpha:1, scale:1, ease:Elastic.easeOut,delay:timethree*3});
		TweenLite.to("#cycle_loader5", timeone,{alpha:1, scale:1, ease:Elastic.easeOut,delay:timethree*4});
		TweenLite.delayedCall(timetwo,cycle_loader2);
	}
	function cycle_loader2(){
		TweenLite.to("#cycle_loader2", timeone,{alpha:0});
		TweenLite.to("#cycle_loader3", timeone,{alpha:0});
		TweenLite.to("#cycle_loader4", timeone,{alpha:0});
		TweenLite.to("#cycle_loader5", timeone,{alpha:0});
		TweenLite.delayedCall(timetwo,cycle_loader);
	}*/

	
	var background_animation; 
	
	(function ( $ ) {
	$.fn.extend({
	
		mouseParallax: function(options) {
		
			var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };
		
			var options = $.extend(defaults, options);
		
			return this.each(function() {
				var o = options;
				var background = $(this);
				
				$(o.targetContainer).on('mousemove', function(e){
				
					mouseX = e.pageX;
					mouseY = e.pageY;
					
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					
					percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
					percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);
	
					leftString = (0-percentX-o.moveFactor)+"%";
					rightString = (0-percentX-o.moveFactor)+"%";
					topString = (0-percentY-o.moveFactor)+"%";
					bottomString = (0-percentY-o.moveFactor)+"%";
	
					background_animation = new TweenMax.to(background[0], .5, {left:leftString, right:rightString, top:topString, bottom:bottomString });
					/*background[0].style.left = leftString;
					background[0].style.right = rightString;
					background[0].style.top = topString;
					background[0].style.bottom = bottomString;*/
					if(o.zIndexValue) {	
						background[0].style.zIndex = o.zIndexValue;
					}
				});
			});
		}					
	});
} (jQuery) );




