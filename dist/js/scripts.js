$(document).ready(function () {

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 120
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $(".toggle-container").click(function () {
        $(".nav-icon").toggleClass("pushed");
        $("#nav-ul").toggleClass('ul-open');
        // $("path#svg").attr("style", "fill: #deeefb");
        // if ($("path#svg").attr("style")) {
        //     $("path#svg").removeAttr("style")
        // }
        $("path#svg").attr("style") ? $("path#svg").removeAttr('style') : $("path#svg").attr('style', "fill:#deeefb");

    })

    $(document).scroll(function () {
        $(".nav-icon").removeClass("pushed");
        $('#nav-ul').removeClass('ul-open');
    })


})