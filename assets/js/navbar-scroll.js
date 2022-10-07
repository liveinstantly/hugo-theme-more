//
// assets/js/navbar-scroll.js
//

(function ($) {

    'use strict';

    const coverClass = '.js-navbar-scroll-cover-content';
    const nabvarClass = '.js-navbar-scroll';
    const navbarOnScollClass = 'js-navbar-scroll-bg-onscroll';

    function bottomPos(element) {
        return element.offset().top + element.outerHeight();
    }

    function onScrollNavbar(threshold) {
        var coverOffset = bottomPos($(coverClass));
        var navbarOffset = $(nabvarClass).offset().top;
        //console.log(`coverOffset = ${coverOffset}`);
        //console.log(`navbarOffset = ${navbarOffset}`);

        var threshold = Math.ceil($(nabvarClass).outerHeight());
        if ((coverOffset - navbarOffset) <= threshold) {
            $(nabvarClass).addClass(navbarOnScollClass);
        } else {
            $(nabvarClass).removeClass(navbarOnScollClass);
        }
    }

    // Bootstrap Navbar Scroll
    $(function () {
        var cover = $(coverClass);
        if (!cover.length) {
            //console.log(`No cover page`);
            return
        }

        var threshold = Math.ceil($(nabvarClass).outerHeight());
        //console.log(`threshold = ${threshold}`);
        onScrollNavbar(threshold);

        $(window).on('scroll', function () {
            onScrollNavbar(threshold);
        });
    });

}(jQuery));
