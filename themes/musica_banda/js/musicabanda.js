/**
 * Created by scastillo on 8/06/17.
 */

jQuery(document).ready(function(){

    //Place Holder for

    jQuery('.carrousel').slick({
        centerMode: true,
        centerPadding: '8   0px',
        slidesToShow: 3,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    if(jQuery('.contact-message-feedback-form').length) {
        jQuery('#edit-name').attr('placeholder', 'Tu nombre').width(250);
        jQuery('#edit-mail').attr('placeholder', 'Tu correo electrónico').width(250);
        jQuery('#edit-field-numero-telefonico-0-value').attr('placeholder', 'Número Telefónico').width(250);
        jQuery('#edit-subject-0-value').attr('placeholder', 'Asunto');
        jQuery('#edit-message-0-value').attr('placeholder', 'Cuéntanos, ¿cómo te podemos ayudar?');
    }

    if(jQuery('#edit-mergevars-email').lenght){
        jQuery('#edit-mergevars-email').attr('placeholder', 'Correo electrónico');
    }

    if(jQuery(".path-node")){
        jQuery("#navbar").sticky({ topSpacing: 0 });
        jQuery('#navbar').on('sticky-start', function() {
            jQuery('header .brand-text').html(jQuery('.node-title').html()).addClass('node-head-text');
        });
        jQuery('#navbar').on('sticky-end', function() {
            jQuery(' header .brand-text').html('Más Música Banda').removeClass('node-head-text');
        });
    }

});