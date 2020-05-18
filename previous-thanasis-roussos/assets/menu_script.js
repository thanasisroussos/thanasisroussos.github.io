$(document).ready(function() {
	first_menu();
	
		$("#logo_site").click(function (){homepage_redirect();});
		$("#about_site").click(function (){about_redirect();});
		$("#work_site").click(function (){work_redirect();});
		$("#contact_site").click(function (){contact_redirect();});		
		$("#close_menu").click(function (){close_site_e();});			  
								  
	function about_redirect(){
		window.open('about.html', "_self");
		};
	function work_redirect(){
		window.open('work.html', "_self");
		};
	function contact_redirect(){
		TweenLite.to(".tel_email", .5,{alpha:1, x:0, scale:1,  ease:Back.easeOut});
		TweenLite.to(".contact_text", .5,{alpha:0,x:-200});
		};
	function close_site_e(){
		TweenLite.set(".tel_email",{alpha:0, scale:2});
		}	
		
	function first_menu(){
		TweenLite.set(".tel_email",{alpha:0,x:0, scale:2});
		};	
	function homepage_redirect(){
		window.open('http://thanasisroussos.com', "_self");
	}
		
});