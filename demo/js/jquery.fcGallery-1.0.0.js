$(function ($) {
    $.fn.fullScreenGallery = function () {
        this.each(function () {
            $(this).prepend("<div id='gall-nav'><a href='#previous'> < </a><a href='#next'> >  </a></div><ul class='item-list'></ul>");
           
            var elem = $(this).find('img');
            var listContainer = $('.item-list');
            var elemSrc = 'undefined'
            
            $(elem).each(function () {
                elemSrc = $(this).attr('src');
                listContainer.append('<li style="background-image:url(' + elemSrc + ')"> &nbsp; </li>');
            });

            elem.attr('disabled', 'disabled').css({ 'display': 'none' });


            var items = $(this).find('li');
            var prevLink = $('#gall-nav a[href="#previous"]');
            var nextLink = $('#gall-nav a[href="#next"]');
            var current = items.eq(0);
            var autoPlay = 'undefined';

            autoLoad();

            function jumpTo(position) {
                items.eq(parseInt(position)).fadeIn().addClass('active');
            }

            function deactivate() {
                current.removeClass('active');
                current = listContainer.find('li.active');
            }

            function hideAll() {
                items.hide();
            }

            function nextSlide() {
                hideAll();
                (current.next().length != 0) ? current.next().eq(0).fadeIn().addClass('active') : jumpTo(0);
                deactivate();
            }

            function prevSlide() {
                hideAll();
                (current.prev().length != 0) ? current.prev().eq(0).addClass('active').fadeIn() : jumpTo(-1);
                deactivate();
            }

            hideAll();
            jumpTo(0);
            nextLink.click(function () {
                nextSlide();
                autoLoad();
            });

            prevLink.click(function () {
                prevSlide();
                autoLoad();
            });

            function autoLoad() {
                clearInterval(autoPlay);
                autoPlay = setInterval(function () { nextSlide(); }, 7000);
            }


        })
    }
}(jQuery));
