$(document).ready(function(){$(window).load(function(){$('#slider').nivoSlider()});$(function(){for(var i=0;i<=4;i++){$('#slider .img'+i).attr('title','#caption-'+i);$('.slider-articles .tit'+i).attr('id','caption-'+i)}});$(function(){$('#slider').nivoSlider({effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,controlNav:true,controlNavThumbs:false,pauseOnHover:true,manualAdvance:false,prevText:'Prev',nextText:'Next',randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}})});$(function(){$(".main-navigation li").hover(function(){$('ul:first',this).fadeIn("fast")},function(){$('ul:first',this).fadeOut("fast")});$(".main-navigation > li:has(ul)").find("a:first").append('<span class="icon-down"></span>');$(".main-navigation li ul li:has(ul)").find("a:first").append("<span style='float: right'>&triangleright;</span>")});$(function(){$('ul.meta li:nth-of-type(2)').each(function(){$(this).html($(this).html().substring(2))});$(window).load(function(){$('ul.meta li:nth-of-type(3) a').each(function(){$(this).html($(this).text().replace('Comments','Bình luận'))})})});$(function(){$('ul.meta li').prepend('<span class="icon"></span>');$('.contact-info p.i_').prepend('<span class="icon"></span>')});$(function(){$(window).scroll(function(){var headerH=$('header[role=banner]').outerHeight(true);console.log(headerH);var scrollVal=$(this).scrollTop(),Attr=$('ul.main-navigation li:first'),Attr_=$('ul.main-navigation li:first a');if(scrollVal>headerH){$('nav').css({'position':'fixed','top':'0px','width':'100%','padding':'0'});Attr_.css({'background':'none','padding':'4px 16px','color':'#0181eb'}).html('Nguyễn Hữu Hậu');Attr.css({'padding':'0'})}else{$('nav').css({'position':'static','top':'0px'});Attr_.css({'background':'','padding':'.5em'}).html('');Attr.css({'padding':''})}})});$(function(){function callTagspage(){$('.articles-tags').Nhh({numOfCol:3,offsetX:8,offsetY:8,blockElement:'article'})}var winWidth=$(window).width();$(window).load(function(){if(winWidth>992){callTagspage()}});$(window).resize(function(){var winWidth=$(window).width();if(winWidth>992){callTagspage()}else{$('article').css({'width':'','left':'','top':'','position':''})}})});$(function(){$(window).load(function(){var getHeight_1=$('.articles-center article').height();var getHeight_2=$('.articles-center article + article').height();var getHeight_3=$('.articles-center article + article + article').height();var max=getHeight_1;if(getHeight_2>max){max=getHeight_2}else{if(getHeight_3>max){max=getHeight_3}else{max=max}};$('.articles-center article').css('height',max)})})})