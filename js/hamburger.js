jQuery( function( $ ) {
	$( ".is-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".p-gmenu" ).toggleClass( "is-open" );
		$( "body" ).toggleClass( "is-open" );

		if( $( this ).hasClass('active') ){
			$( this ).removeClass('active');
			$( ".nav_body" ).addClass("close").removeClass( "open" );
		}else {
			$( this ).addClass( "active" );
			$( ".nav_body" ).addClass( "open" ).removeClass( "close" ); 
		}

		$( ".nav_body.open" ).slideDown(250);
		$( ".nav_body.close" ).hide();

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