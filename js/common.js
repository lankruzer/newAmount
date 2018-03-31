$(function() {

	// Custom JS

	//masked input init
	$( "input[type = 'tel'] " ).mask('+375 (99) 999-99-99');

	// open popup providers
	$( '.popup-providers-js' ).click(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'body' ).toggleClass( 'hide-scroll' );
		$( '.popup-form__providers' ).addClass( 'popup-form_active' );
	} );
	// / open popup providers

	// open popup call
	$( '.popup-call-js' ).click(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'body' ).toggleClass( 'hide-scroll' );
		$( '.popup-form__call' ).addClass( 'popup-form_active' );
	} );
	// / open popup call

	// close popup form on click close
	$( '.popup-form__close, .el-close-form' ).click(function(event) {
		event.preventDefault();
		$( 'body' ).toggleClass( 'hide-scroll' );
		$( '.overlay' ).removeClass( 'overlay_active' );
		$( '.popup-form' ).removeClass( 'popup-form_active' );
	} );
	// /close popup form on click close

	// close popup form on click outside
	$( '.overlay__content' ).click(function(event) {
		if ( $( '.overlay__content' ).has(event.target).length === 0 ){
			$('.overlay').removeClass('overlay_active');
			$( 'body' ).toggleClass( 'hide-scroll' );
			$('.popup-form').removeClass('popup-form_active');
		}
	} );
	// /close popup form on click outside

	// close popup on press Esc
	$(document).keyup(function(event) {
		if ( event.keyCode === 27 ) {
			$( '.overlay' ).removeClass( 'overlay_active' );
			$( '.popup-form' ).removeClass( 'popup-form_active' );
			$( 'body' ).toggleClass( 'hide-scroll' );
		}
	} );
	// / close popup on press Esc

});
