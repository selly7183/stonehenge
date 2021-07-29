$(window).ready(function(){

$("#fullpage").fullpage({		//풀페이지 초기화 코드
	menu:"#menu",
	navigation:true,	//섹션컨트롤러
	slidesNavigation:true,	//슬라이드 하단의 네비게이션
	anchors:["sect1","sect2","sect3","sect4","sect5","sect6"],	//섹션의 컨트롤러와 연동되어 스크롤작동시킴
	keyboardScrolling:true,
	navigationTooltips:['Main','Beautiful Moments','Brand Story','Watch Collection','서비스제공','구독하기','Company'],
	showActiceTolltip:true
	//normalScrollElements:'footer'
	//fixedElements:'footer'
	//scrollBar:true
	
});



$(".slides").bxSlider({
	mode:'fade'
});


/**** SUB-MENU ****/
$(".header-bottom nav>ul>li:first-child").on("mouseover",function(){
	$(".sub-menu1").stop().show();
});
$(".header-bottom nav>ul>li:first-child").on("mouseout",function(){
	$(".sub-menu1").stop().hide();
});
$(".header-bottom nav>ul>li:nth-child(2)").on("mouseover",function(){
	$(".sub-menu2").stop().show();
});
$(".header-bottom nav>ul>li:nth-child(2)").on("mouseout",function(){
	$(".sub-menu2").stop().hide();
});
$(".header-bottom nav>ul>li:nth-child(3)").on("mouseover",function(){
	$(".sub-menu3").stop().show();
});
$(".header-bottom nav>ul>li:nth-child(3)").on("mouseout",function(){
	$(".sub-menu3").stop().hide();
});
$(".header-bottom nav>ul>li:nth-child(4)").on("mouseover",function(){
	$(".sub-menu4").stop().show();
});
$(".header-bottom nav>ul>li:nth-child(4)").on("mouseout",function(){
	$(".sub-menu4").stop().hide();
});

/**** COLLECTION 마우스오버/아웃 ****/
$(".sub-menu-inner>li:nth-child(1)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
});
$(".sub-menu-inner>li:nth-child(1)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
});

$(".sub-menu-inner>li:nth-child(2)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
});
$(".sub-menu-inner>li:nth-child(2)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
});

$(".sub-menu-inner>li:nth-child(3)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
});
$(".sub-menu-inner>li:nth-child(3)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
});
$(".sub-menu-inner>li:nth-child(4)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
});
$(".sub-menu-inner>li:nth-child(4)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
});
$(".sub-menu-inner>li:nth-child(5)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
});
$(".sub-menu-inner>li:nth-child(5)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
});

/**** ITEM 마우스오버/아웃 ****/
$("ul.product>li:nth-child(1)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(1)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});

$("ul.product>li:nth-child(2)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(2)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});

$("ul.product>li:nth-child(3)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(3)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});
$("ul.product>li:nth-child(4)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(4)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});
$("ul.product>li:nth-child(5)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(5)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});
$("ul.product>li:nth-child(6)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(6)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(7)").css({"opacity":"1"});
});
$("ul.product>li:nth-child(7)").on("mouseover",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"0.3"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"0.3"});
});
$("ul.product>li:nth-child(7)").on("mouseout",function(){
	$(".sub-menu-inner li:nth-child(2)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(3)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(4)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(1)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(5)").css({"opacity":"1"});
	$(".sub-menu-inner li:nth-child(6)").css({"opacity":"1"});
});


/**** HEADER ****/
$("header").on("mouseover",function(){
	$(this).css({"background-color":"#fff"});
});
$("header").on("mouseout",function(){
	$(this).css({"background":"none"});
});





});