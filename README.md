fancyBox with touch support
===========================

Implanting touch into fancyBox, as I was developing this I realized that I need more test to be done and on many devices as possible. If you be kind leave your feedback on phone testing at https://github.com/rytikovCode/fancyBox/issues/1

Test have been done on
----------------------

Android GB, ICS, JB browser

On Chrome for Android

Firefox beta for Android

works on iPhone 4

works on iPad2 ios5 (thanks to  michaelbramwell)

How to use
----------
just copy and paste

minMoveX and minMoveY use this to tell how long the touch should move to activat the function to go next.

The defaults are:

    minMoveX: 17,
    minMoveY: 17,
    preventE: true, // for now just leave it as true


I am still working on this development, think of it as beta for now

Any Bugs
--------

If there is any issues with touch, create an issue here 

Other issue that concerning fancyBox please create an issue at >>> https://github.com/fancyapps/fancyBox/issues


fancyBox
========

fancyBox is a tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages.

More information and examples: http://www.fancyapps.com/fancybox/

License: http://www.fancyapps.com/fancybox/#license

Copyright (c) 2012 Janis Skarnelis - janis@fancyapps.com


How to use
----------

To get started, download the plugin, unzip it and copy files to your website/application directory.
Load files in the <head> section of your HTML document. Make sure you also add the jQuery library.

    <head>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
        <link rel="stylesheet" href="/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
        <script type="text/javascript" src="/fancybox/jquery.fancybox.pack.js"></script>
    </head>

Create your links with a `title` if you want a title to be shown, and add a class:

    <a href="large_image.jpg" class="fancybox" title="Sample title"><img src="small_image.jpg" /></a>

If you have a set of related items that you would like to group,
additionally include a group name in the `rel` (or `data-fancybox-group`) attribute:

    <a href="large_1.jpg" class="fancybox" rel="gallery" title="Sample title 1"><img src="small_1.jpg" /></a>
    <a href="large_2.jpg" class="fancybox" rel="gallery" title="Sample title 1"><img src="small_2.jpg" /></a>

Initialise the script like this:

    <script>
        $(document).ready(function() {
            $('.fancybox').fancybox();
        });
    </script>

May also be passed an optional options object which will extend the default values. Example:

    <script>
        $(document).ready(function() {
            $('.fancybox').fancybox({
                padding : 0,
                openEffect  : 'elastic'
            });
        });
    </script>

Tip: Automatically group and apply fancyBox to all images:

    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();

Script uses the `href` attribute of the matched elements to obtain the location of the content and to figure out content type you want to display.
You can specify type directly by adding classname (fancybox.image, fancybox.iframe, etc) or `data-fancybox-type` attribute:

    //Ajax:
    <a href="/example.html" class="fancybox fancybox.ajax">Example</a>
    //or
    <a href="/example.html" class="fancybox" data-fancybox-type="ajax">Example</a>

    //Iframe:
    <a href="example.html" class="fancybox fancybox.iframe">Example</a>

    //Inline (will display an element with `id="example"`)
    <a href="#example" class="fancybox">Example</a>

    //SWF:
    <a href="example.swf" class="fancybox">Example</a>

    //Image:
    <a href="example.jpg" class="fancybox">Example</a>

Note, ajax requests are subject to the [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy).
If fancyBox will not be able to get content type, error message will be displayed (this is different from previsous versions where 'ajax' was used as default type).
Have a bug? Please create an issue on GitHub at https://github.com/fancyapps/fancyBox/issues