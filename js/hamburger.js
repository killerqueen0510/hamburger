jQuery( function( $ ) {
	$( ".is-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".p-sidebar__background__color" ).toggleClass( "is-open" );
		$( ".p-sidebar" ).toggleClass( "is-open" ).removeClass( "is-close" );
		$( ".p-sidebar__menu" ).toggleClass( "is-open" ).removeClass( "is-close" );;
		$( ".p-sidebar__menu__button" ).toggleClass( "is-open" );
		$( "body" ).toggleClass( "is-open" );

	} );

	//×押下時に閉じる処理。falseを付与することで、is-openを取り除く
	$( ".close" ).on( "click", function() {
		$( this ).toggleClass( "is-open", false );
		$( ".p-sidebar__background__color" ).toggleClass( "is-open", false );
		$( ".p-sidebar" ).toggleClass( "is-open", false ).addClass( "is-close" );
		$( ".p-sidebar__menu" ).toggleClass( "is-open", false ).addClass( "is-close" );
		$( ".p-sidebar__menu__button" ).toggleClass( "is-open", false );
		$( "body" ).toggleClass( "is-open", false );

/* 		$( ".p-sidebar__menu.close" ).hide(); */
		
	} );

} );

//1200px以上の場合、リセットする
//リサイズを行っている間常に実行されないようにリサイズが終わった場合のみに処理が行われるようにする
var $resizeTimer = false;
$(window).resize(function() {
	if (window.matchMedia('(min-width:1200px)').matches) {
		if ($resizeTimer !== false) {
			clearTimeout($resizeTimer);
		}
		$resizeTimer = setTimeout(function() {
			$( ".p-sidebar__background__color" ).removeClass( "is-open" );
			$( ".p-sidebar" ).removeClass( "is-open is-close" );
			$( ".p-sidebar__menu" ).removeClass( "is-open is-close" );
			$( ".p-sidebar__menu__button" ).removeClass( "is-open" );
			$( "body" ).removeClass( "is-open" );
			
		}, 100);
	}
});
