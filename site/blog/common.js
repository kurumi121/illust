$(function(){

	//コメントの書き方
/*$('ul li').on('mouseover',function(){
		$(this).css({
			color:'#C64F4F',
			marginLeft:'10px'
		});
	});

	$('ul li').on('mouseout',function(){
		$(this).css({
			color:'pink',
			marginLeft:'10px'
		});
	});
*/

$('ul li').on('mouseover',function(){
	$(this).addClass('on');
	});

$('ul li').on('mouseout',function(){
	$(this).removeClass('on');
	});
});


