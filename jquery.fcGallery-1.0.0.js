/**
 * jQuery.fcGallery - Fullscreen Slider .
 * Copyright (c) 2014-2015 | http://satishborkar.wordpress.com/ and http://manojkulkarni2006.wordpress.com/
 * Dual licensed under MIT and GPL.
 * Date: 26/09/2014
 * @author Manoj Kukarni & Satish Borkar
 * @version 1.0.0
 **/

/**
Example :
<div class="gallery">
Keep your all images under this div
    <img src="img/01.jpg" alt="" />
    <img src="img/02.jpg" alt="" />
</div>   

$('.gallery').fcGallery();

***/

$(function (a) {
    a.fn.fcGallery = function () {
        this.each(function () {
            a(this).prepend("<div id='gall-nav'><a href='#previous'> < </a><a href='#next'> >  </a></div><ul class='item-list'></ul>");
            var b = a(this).find("img");
            var c = a(".item-list");
            var d = "undefined";
            a(b).each(function () {
                d = a(this).attr("src");
                c.append('<li style="background:url(' + d + ')center center fixed no-repeat"> &nbsp; </li>');
            });
            b.attr("disabled", "disabled").css({
                display: "none"
            });
            var e = a(this).find("li");
            var f = a('#gall-nav a[href="#previous"]');
            var g = a('#gall-nav a[href="#next"]');
            var h = e.eq(0);
            var i = "undefined";
            o();
            function j(a) {
                e.eq(parseInt(a)).fadeIn().addClass("active");
            }
            function k() {
                h.removeClass("active");
                h = c.find("li.active");
            }
            function l() {
                e.hide();
            }
            function m() {
                l();
                0 != h.next().length ? h.next().eq(0).fadeIn().addClass("active") : j(0);
                k();
            }
            function n() {
                l();
                0 != h.prev().length ? h.prev().eq(0).addClass("active").fadeIn() : j(-1);
                k();
            }
            l();
            j(0);
            g.click(function () {
                m();
                o();
            });
            f.click(function () {
                n();
                o();
            });
            function o() {
                clearInterval(i);
                i = setInterval(function () {
                    m();
                }, 7e3);
            }
        });
    };
}(jQuery));
