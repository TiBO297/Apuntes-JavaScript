/* 3.141592 TiBO */
        // The `enabled` flag will be `false` if CSS 3D isn't available
        if ( $.fn.makisu.enabled ) {

              var $sashimi = $( '.sashimi' );
              var $nigiri = $( '.nigiri' );
              var $maki = $( '.maki' );
  
              // Create Makisus
  
              $nigiri.makisu({
                  selector: 'dd',
                  overlap: 0.85,
                  speed: 0.3
              });
  
              $maki.makisu({
                  selector: 'dd',
                  overlap: 0.8,
                  speed: 0.51
              });
  
              $sashimi.makisu({
                  selector: 'dd',
                  overlap: 0.2,
                  speed: 0.3
              });
  
              // Open all
              
              $( '.list' ).makisu( 'open' );
  
              // Toggle on click
  
              $( '.toggle' ).on( 'click', function() {
                  $( '.list' ).makisu( 'toggle' );
              });
  
              // Disable all links
  
              $( '.demo a' ).click( function( event ) {
                 
              });
  
          } else {
  
              $( '.warning' ).show();
          }