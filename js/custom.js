/* Banner Slider */
$(function() {
            
    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();
});

/* Banner Slider Ends */


/* scroller */

$(document).ready(function(){
    $(".scroller a.toportfolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $(".scroller a.tosuccess").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $(".scroller a.tocustomers").click(function() {
        $('html, body').animate({
            scrollTop: $("#customers").offset().top
        }, 1000);
    });

    $(".scroller a.tocontact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $(".scroller a.toblog").click(function() {
        $('html, body').animate({
            scrollTop: $("#blog").offset().top
        }, 1000);
    });
});

/* scroller */


/* who we are Tabs */

$(document).ready(function() { 
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-box').hide();
    $('.tab-box:first').show();
        
    $('#tabs li a').click(function(e){
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){  
            $('#tabs li a').addClass('inactive');           
            $(this).removeClass('inactive');
            
            $('.tab-box').hide();
            $('#'+ t + 'C').fadeIn('slow');
            e.preventDefault();
        }
    });
});

/* who we are Tabs End*/


/* Blog Carousel */

$(document).ready(function() {
    $('.categories ul li:first-child a').addClass("visible");
    $('.carousel.aws').hide();
    $('.carousel.docker').hide();
    $('.carousel.howto').hide();
    $('.carousel.iaas').hide();


    $('.categories ul li .allcat').click(function(e){
        $('.carousel.allcat').fadeIn();
        $(this).addClass("visible");
        $('.categories ul li a').not($(this)).removeClass("visible");
        $('.blog .carousel').not($('.allcat')).fadeOut();
        e.preventDefault();
    });

    $('.categories ul li .aws').click(function(e){
        $('.carousel.aws').fadeIn();
        $(this).addClass("visible");
        $('.categories ul li a').not($(this)).removeClass("visible");
        $('.blog .carousel').not($('.aws')).fadeOut();
        e.preventDefault();
    });

    $('.categories ul li .docker').click(function(e){
        $('.carousel.docker').fadeIn();
        $(this).addClass("visible");
        $('.categories ul li a').not($(this)).removeClass("visible");
        $('.blog .carousel').not($('.docker')).fadeOut();
        e.preventDefault();
    });

    $('.categories ul li .howto').click(function(e){
        $('.carousel.howto').fadeIn();
        $(this).addClass("visible");
        $('.categories ul li a').not($(this)).removeClass("visible");
        $('.blog .carousel').not($('.howto')).fadeOut();
        e.preventDefault();
    });

    $('.categories ul li .iaas').click(function(e){
        $('.carousel.iaas').fadeIn();
        $(this).addClass("visible");
        $('.categories ul li a').not($(this)).removeClass("visible");
        $('.blog .carousel').not($('.iaas')).fadeOut();
        e.preventDefault();
    });

    $('.aws-tag').click(function(e){
        $('.categories ul li .aws').click();
        e.preventDefault();
    });
    $('.docker-tag').click(function(e){
        $('.categories ul li .docker').click();
        e.preventDefault();
    });
    $('.howto-tag').click(function(e){
        $('.categories ul li .howto').click();
        e.preventDefault();
    });
    $('.iaas-tag').click(function(e){
        $('.categories ul li .iaas').click();
        e.preventDefault();
    });
     
});

/* Blog Carousel Ends */

/* Contact form */

$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var company = $("#company").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        var value_string='';
        $("input[name='services[]']").each( function () {
           var services = $(this).val();
           
            if ($(this).is(":checked"))
            {
              value_string+=services+",";
            }
        });

        value_string_all = value_string.replace(/,\s*$/, "");

        var msg = $("#msg").val();

        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'name1='+ name + '&company1='+ company + '&email1='+ email + '&phone1='+ phone + '&services=' + value_string_all + '&msg1=' + msg ;

        console.log(dataString);

        if(name==''||company==''||email==''||phone=='' ||msg == '')
            {
                alert("Please Fill All Fields");
            }
        else
        {
        
        // AJAX Code To Submit Form.
            $.ajax({
                url: "https://e3q50rznqj.execute-api.us-east-1.amazonaws.com/prod",
                type: "POST",
                contentType: 'application/json',
                crossDomain: true,
                dataType: "json",
                data : JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    msg: msg
                }),
                cache: false,
                success: function(result){
                        $('#success').text("Thank you for contacting us!");
                },
                error: function(err){
                        console.log(err);
                }
            });
        }
        return false;
    });
});

/* Contact form Ends */
