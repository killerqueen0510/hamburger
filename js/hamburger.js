jQuery( function( $ ) {
	$( ".is-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );

/* 
		if( $( this ).hasClass('active') ){
			$( this ).removeClass('active');
			$( ".p-sidebar__menu" ).addClass("close").removeClass( "open" );
		}else {
			$( this ).addClass( "active" );
			$( ".p-sidebar__menu" ).addClass( "open" ).removeClass( "close" ); 
		}

		$( ".p-sidebar__menu.open" ).slideDown(250);
		$( ".p-sidebar__menu.close" ).hide();
 */
		if($( ".p-sidebar__menu" ).hasClass('off')){
			$( ".p-sidebar__menu" ).removeClass('off');
			$(this).animate({'marginright':'400px'},300).addClass('on');
		  }else{
			$( ".p-sidebar__menu" ).addClass('off');
			$(this).animate({'marginright':'0px'},0);
		  }

	} );
} );

//ハンバーガーメニューのマウスカーソルを判断
$(function() {
	$( ".menu__children" ).mouseover(function() {
		$( this ).addClass("open").removeClass( "close" );
		})
	$( ".menu__children" ).mouseout(function() {
		$( this ).addClass("close").removeClass("open");
		})
	});

//1200px以上の場合、リセットする
//リサイズを行っている間常に実行されないようにリサイズが終わった場合のみに処理が行われるようにする
var $resizeTimer = false;
$(window).resize(function() {
	if (window.matchMedia('(min-width:1200px)').matches) {
		if ($resizeTimer !== false) {
			clearTimeout($resizeTimer);
		}
		$resizeTimer = setTimeout(function() {
			$( ".p-hamburger" ).removeClass( "is-open" );
			$( ".p-hamburger" ).removeClass( "active" );
			$( ".p-gmenu" ).removeClass( "is-open" );
			$( "body" ).removeClass( "is-open" );
			$( ".nav_body" ).removeClass( "open" ); 
			$( ".nav_body" ).removeClass( "close" ); 
			
		}, 100);
	}
});

//ホバーの設定
$(function(){
    $( ".menu__accordion li" ).hover(function(){
        $( "ul:not(:animated)" , this).slideDown(250);
    }, function(){
        $( "ul.sub__menu" ,this).hide();
    });
});