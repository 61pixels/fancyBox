/*! fancyBox v2.0.5 (with touch v0.0.3) fancyapps.com | fancyapps.com/fancybox/#license */
(function(a,b,c){"use strict";var d=a.jQuery,e=d(a),f=d(b),g=d.fancybox=function(){g.open.apply(this,arguments)},h=false,i=null,j=null,k=null,l=false,m=b.createTouch!==c,n=function(a){return d.type(a)==="string"};d.extend(g,{version:"2.0.5",defaults:{padding:5,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,minMoveX:17,minMoveY:17,preventE:true,autoSize:true,autoResize:!m,autoCenter:!m,fitToView:true,aspectRatio:false,topRatio:.5,fixed:!(d.browser.msie&&d.browser.version<=6)&&!m,scrolling:"auto",wrapCSS:"fancybox-default",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3e3,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(d.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:.8,css:{cursor:"pointer"},closeClick:true},title:{type:"float"}},onCancel:d.noop,beforeLoad:d.noop,afterLoad:d.noop,beforeShow:d.noop,afterShow:d.noop,beforeClose:d.noop,afterClose:d.noop},group:{},opts:{},coming:null,current:null,isOpen:false,isOpened:false,wrap:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,e){g.close(true);if(a&&!d.isArray(a)){a=a instanceof d?d(a).get():[a]}g.isActive=true;g.opts=d.extend(true,{},g.defaults,e);if(d.isPlainObject(e)&&e.keys!==c){g.opts.keys=e.keys?d.extend({},g.defaults.keys,e.keys):false}g.group=a;g._start(g.opts.index||0);if("ontouchstart"in b.documentElement){addEventListener("touchstart",g.startTouch,false)}},cancel:function(){if(g.coming&&false===g.trigger("onCancel")){return}g.coming=null;g.hideLoading();if(g.ajaxLoad){g.ajaxLoad.abort()}g.ajaxLoad=null;if(g.imgPreload){g.imgPreload.onload=g.imgPreload.onabort=g.imgPreload.onerror=null}},close:function(a){g.cancel();if(!g.current||false===g.trigger("beforeClose")){return}g.unbindEvents();if(!g.isOpen||a&&a[0]===true){d(".fancybox-wrap").stop().trigger("onReset").remove();g._afterZoomOut()}else{g.isOpen=g.isOpened=false;d(".fancybox-item, .fancybox-nav").remove();g.wrap.stop(true).removeClass("fancybox-opened");g.inner.css("overflow","hidden");g.transitions[g.current.closeMethod]()}if("touchstart",g.onTouchStart){removeEventListener("touchstart",g.startTouch);removeEventListener("touchmove",g.moveTouch)}},play:function(a){var b=function(){clearTimeout(g.player.timer)},c=function(){b();if(g.current&&g.player.isActive){g.player.timer=setTimeout(g.next,g.current.playSpeed)}},e=function(){b();d("body").unbind(".player");g.player.isActive=false;g.trigger("onPlayEnd")},f=function(){if(g.current&&(g.current.loop||g.current.index<g.group.length-1)){g.player.isActive=true;d("body").bind({"afterShow.player onUpdate.player":c,"onCancel.player beforeClose.player":e,"beforeLoad.player":b});c();g.trigger("onPlayStart")}};if(g.player.isActive||a&&a[0]===false){e()}else{f()}},next:function(){if(g.current){g.jumpto(g.current.index+1)}},prev:function(){if(g.current){g.jumpto(g.current.index-1)}},startTouch:function(a){if(a.touches.length==1){k=a.touches[0].pageX;j=a.touches[0].pageY;l=true;this.addEventListener("touchmove",g.moveTouch,false)}},moveTouch:function(a){if(g.preventE){a.preventDefault()}if(l){var b=a.touches[0].pageX;var c=a.touches[0].pageY;var d=k-b;var e=j-c;var f=g.current.minMoveX;var h=g.current.minMoveY;if(Math.abs(d)>=f){g.cancelTouch();if(d>0){g.prev()}else{g.next()}}}},cancelTouch:function(){k=null;l=false},jumpto:function(a){if(!g.current){return}a=parseInt(a,10);if(g.group.length>1&&g.current.loop){if(a>=g.group.length){a=0}else if(a<0){a=g.group.length-1}}if(g.group[a]!==c){g.cancel();g._start(a)}},reposition:function(a,b){if(g.isOpen){if(b&&b.type==="scroll"){g.wrap.stop().animate(g._getPosition(a),200)}else{g.wrap.css(g._getPosition(a))}}},update:function(a){if(g.isOpen){if(!h){i=setTimeout(function(){var b=g.current;if(h){h=false;if(b){if(!a||a&&(a.type==="orientationchange"||b.autoResize&&a.type==="resize")){if(b.autoSize){g.inner.height("auto");b.height=g.inner.height()}g._setDimension();if(b.canGrow){g.inner.height("auto")}}if(b.autoCenter){g.reposition(null,a)}g.trigger("onUpdate")}}},100)}h=true}},toggle:function(){if(g.isOpen){g.current.fitToView=!g.current.fitToView;g.update()}},hideLoading:function(){f.unbind("keypress.fb");d("#fancybox-loading").remove()},showLoading:function(){g.hideLoading();f.bind("keypress.fb",function(a){if(a.keyCode==27){a.preventDefault();g.cancel()}});d('<div id="fancybox-loading"><div></div></div>').click(g.cancel).appendTo("body")},getViewport:function(){return{x:e.scrollLeft(),y:e.scrollTop(),w:e.width(),h:e.height()}},unbindEvents:function(){if(g.wrap){g.wrap.unbind(".fb")}f.unbind(".fb");e.unbind(".fb")},bindEvents:function(){var a=g.current,b=a.keys;if(!a){return}e.bind("resize.fb, orientationchange.fb",g.update);if(!a.fixed&&a.autoCenter){e.bind("scroll.fb",g.update)}if(b){f.bind("keydown.fb",function(a){var c;if(!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&d.inArray(a.target.tagName.toLowerCase(),["input","textarea","select","button"])<0){c=a.keyCode;if(d.inArray(c,b.close)>-1){g.close();a.preventDefault()}else if(d.inArray(c,b.next)>-1){g.next();a.preventDefault()}else if(d.inArray(c,b.prev)>-1){g.prev();a.preventDefault()}}})}if(d.fn.mousewheel&&a.mouseWheel&&g.group.length>1){g.wrap.bind("mousewheel.fb",function(a,b){var c=a.target||null;if(b!==0&&(!c||c.clientHeight===0||c.scrollHeight===c.clientHeight&&c.scrollWidth===c.clientWidth)){a.preventDefault();g[b>0?"prev":"next"]()}})}},trigger:function(a){var b,c=g[d.inArray(a,["onCancel","beforeLoad","afterLoad"])>-1?"coming":"current"];if(!c){return}if(d.isFunction(c[a])){b=c[a].apply(c,Array.prototype.slice.call(arguments,1))}if(b===false){return false}if(c.helpers){d.each(c.helpers,function(b,e){if(e&&d.isPlainObject(g.helpers[b])&&d.isFunction(g.helpers[b][a])){g.helpers[b][a](e,c)}})}d.event.trigger(a+".fb")},isImage:function(a){return a&&a.toString().match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&&a.toString().match(/\.(swf)(.*)?$/i)},_start:function(a){var b={},c=g.group[a]||null,e,f,h,i,j;if(c&&(c.nodeType||c instanceof d)){e=true;if(d.metadata){b=d(c).metadata()}}b=d.extend(true,{},g.opts,{index:a,element:c},d.isPlainObject(c)?c:b);d.each(["href","title","content","type"],function(a,f){b[f]=g.opts[f]||e&&d(c).attr(f)||b[f]||null});if(typeof b.margin==="number"){b.margin=[b.margin,b.margin,b.margin,b.margin]}if(b.modal){d.extend(true,b,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:false}}})}g.coming=b;if(false===g.trigger("beforeLoad")){g.coming=null;return}h=b.type;f=b.href||c;if(!h){if(e){i=d(c).data("fancybox-type");if(!i&&c.className){i=c.className.match(/fancybox\.(\w+)/);h=i?i[1]:null}}if(!h&&n(f)){if(g.isImage(f)){h="image"}else if(g.isSWF(f)){h="swf"}else if(f.match(/^#/)){h="inline"}}if(!h){h=e?"inline":"html"}b.type=h}if(h==="inline"||h==="html"){if(!b.content){if(h==="inline"){b.content=d(n(f)?f.replace(/.*(?=#[^\s]+$)/,""):f)}else{b.content=c}}if(!b.content||!b.content.length){h=null}}else if(!f){h=null}j=f.split(/\s+/,2);b.group=g.group;b.isDom=e;b.href=j.shift();b.selector=j.shift();if(h==="image"){g._loadImage()}else if(h==="ajax"){g._loadAjax()}else if(h){g._afterLoad()}else{g._error("type")}},_error:function(a){g.hideLoading();d.extend(g.coming,{type:"html",autoSize:true,minHeight:0,hasError:a,content:g.coming.tpl.error});g._afterLoad()},_loadImage:function(){g.imgPreload=new Image;g.imgPreload.onload=function(){this.onload=this.onerror=null;g.coming.width=this.width;g.coming.height=this.height;g._afterLoad()};g.imgPreload.onerror=function(){this.onload=this.onerror=null;g._error("image")};g.imgPreload.src=g.coming.href;if(!g.imgPreload.width){g.showLoading()}},_loadAjax:function(){g.showLoading();g.ajaxLoad=d.ajax(d.extend({},g.coming.ajax,{url:g.coming.href,error:function(a,b){if(g.coming&&b!=="abort"){g._error("ajax",a)}else{g.hideLoading()}},success:function(a,b){if(b==="success"){g.coming.content=a;g._afterLoad()}}}))},_preloadImages:function(){var a=g.group,b=g.current,c=a.length,e,f,h,i=Math.min(b.preload,c-1);if(!b.preload||a.length<2){return}for(h=1;h<=i;h+=1){e=a[(b.index+h)%c];f=d(e).attr("href")||e;if(e.type==="image"||g.isImage(f)){(new Image).src=f}}},_afterLoad:function(){g.hideLoading();if(!g.coming||false===g.trigger("afterLoad",g.current)){g.coming=false;return}if(g.isOpened){d(".fancybox-item").remove();g.wrap.stop(true).removeClass("fancybox-opened");g.inner.css("overflow","hidden");g.transitions[g.current.prevMethod]()}else{d(".fancybox-wrap").stop().trigger("onReset").remove();g.trigger("afterClose")}g.unbindEvents();g.isOpen=false;g.current=g.coming;g.wrap=d(g.current.tpl.wrap).addClass("fancybox-"+(m?"mobile":"desktop")+" fancybox-tmp "+g.current.wrapCSS).appendTo("body");g.outer=d(".fancybox-outer",g.wrap).css("padding",g.current.padding+"px");g.inner=d(".fancybox-inner",g.wrap);g._setContent()},_setContent:function(){var a=g.current,b=a.content,c=a.type,e;switch(c){case"inline":case"ajax":case"html":if(a.selector){b=d("<div>").html(b).find(a.selector)}else if(b instanceof d){b=b.show().detach();if(b.parent().hasClass("fancybox-inner")){b.parents(".fancybox-wrap").trigger("onReset").remove()}d(g.wrap).bind("onReset",function(){b.appendTo("body").hide()})}if(a.autoSize){e=d('<div class="fancybox-tmp '+g.current.wrapCSS+'"></div>').appendTo("body").append(b);a.width=e.width();a.height=e.height();e.width(g.current.width);if(e.height()>a.height){e.width(a.width+1);a.width=e.width();a.height=e.height()}b=e.contents().detach();e.remove()}break;case"image":b=a.tpl.image.replace("{href}",a.href);a.aspectRatio=true;break;case"swf":b=a.tpl.swf.replace(/\{width\}/g,a.width).replace(/\{height\}/g,a.height).replace(/\{href\}/g,a.href);break}if(c==="iframe"){b=d(a.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",a.scrolling);a.scrolling="auto";if(a.autoSize){b.width(a.width);g.showLoading();b.data("ready",false).appendTo(g.inner).bind({onCancel:function(){d(this).unbind();g._afterZoomOut()},load:function(){var b=d(this),c;try{if(this.contentWindow.document.location){c=b.contents().find("body").height()+12;b.height(c)}}catch(e){a.autoSize=false}if(b.data("ready")===false){g.hideLoading();if(c){g.current.height=c}g._beforeShow();b.data("ready",true)}else if(c){g.update()}}}).attr("src",a.href);return}b.attr("src",a.href)}else if(c==="image"||c==="swf"){a.autoSize=false;a.scrolling="visible"}g.inner.append(b);g._beforeShow()},_beforeShow:function(){g.coming=null;g.trigger("beforeShow");g._setDimension();g.wrap.hide().removeClass("fancybox-tmp");g.bindEvents();g._preloadImages();g.transitions[g.isOpened?g.current.nextMethod:g.current.openMethod]()},_setDimension:function(){var a=g.wrap,b=g.outer,c=g.inner,e=g.current,f=g.getViewport(),h=e.margin,i=e.padding*2,j=e.width,k=e.height,l=e.maxWidth,m=e.maxHeight,n=e.minWidth,o=e.minHeight,p,q,r;f.w-=h[1]+h[3];f.h-=h[0]+h[2];if(j.toString().indexOf("%")>-1){j=(f.w-i)*parseFloat(j)/100}if(k.toString().indexOf("%")>-1){k=(f.h-i)*parseFloat(k)/100}p=j/k;j+=i;k+=i;if(e.fitToView){l=Math.min(f.w,l);m=Math.min(f.h,m)}if(e.aspectRatio){if(j>l){j=l;k=(j-i)/p+i}if(k>m){k=m;j=(k-i)*p+i}if(j<n){j=n;k=(j-i)/p+i}if(k<o){k=o;j=(k-i)*p+i}}else{j=Math.max(n,Math.min(j,l));k=Math.max(o,Math.min(k,m))}j=Math.round(j);k=Math.round(k);d(a.add(b).add(c)).width("auto").height("auto");c.width(j-i).height(k-i);a.width(j);q=a.height();if(j>l||q>m){while((j>l||q>m)&&j>n&&q>o){k=k-10;if(e.aspectRatio){j=Math.round((k-i)*p+i);if(j<n){j=n;k=(j-i)/p+i}}else{j=j-10}c.width(j-i).height(k-i);a.width(j);q=a.height()}}e.dim={width:j,height:q};e.canGrow=e.autoSize&&k>o&&k<m;e.canShrink=false;e.canExpand=false;if(j-i<e.width||k-i<e.height){e.canExpand=true}else if((j>f.w||q>f.h)&&j>n&&k>o){e.canShrink=true}r=q-i;g.innerSpace=r-c.height();g.outerSpace=r-b.height()},_getPosition:function(a){var b=g.current,c=g.getViewport(),d=b.margin,e=g.wrap.width()+d[1]+d[3],f=g.wrap.height()+d[0]+d[2],h={position:"absolute",top:d[0]+c.y,left:d[3]+c.x};if(b.autoCenter&&b.fixed&&(!a||a[0]===false)&&f<=c.h&&e<=c.w){h={position:"fixed",top:d[0],left:d[3]}}h.top=Math.ceil(Math.max(h.top,h.top+(c.h-f)*b.topRatio))+"px";h.left=Math.ceil(Math.max(h.left,h.left+(c.w-e)*.5))+"px";return h},_afterZoomIn:function(){var a=g.current,b=a?a.scrolling:"no";if(!a){return}g.isOpen=g.isOpened=true;g.wrap.addClass("fancybox-opened").css("overflow","visible");g.update();g.inner.css("overflow",b==="yes"?"scroll":b==="no"?"hidden":b);if(a.closeClick||a.nextClick){g.inner.css("cursor","pointer").bind("click.fb",function(b){if(!d(b.target).is("a")&&!d(b.target).parent().is("a")){g[a.closeClick?"close":"next"]()}})}if(a.closeBtn){d(a.tpl.closeBtn).appendTo(g.outer).bind("click.fb",g.close)}if(a.arrows&&g.group.length>1){if(a.loop||a.index>0){d(a.tpl.prev).appendTo(g.inner).bind("click.fb",g.prev)}if(a.loop||a.index<g.group.length-1){d(a.tpl.next).appendTo(g.inner).bind("click.fb",g.next)}}g.trigger("afterShow");if(g.opts.autoPlay&&!g.player.isActive){g.opts.autoPlay=false;g.play()}},_afterZoomOut:function(){g.trigger("afterClose");g.wrap.trigger("onReset").remove();d.extend(g,{group:{},opts:{},current:null,isActive:false,isOpened:false,isOpen:false,wrap:null,outer:null,inner:null})}});g.transitions={getOrigPosition:function(){var a=g.current,b=a.element,c=a.padding,e=d(a.orig),f={},h=50,i=50,j;if(!e.length&&a.isDom&&d(b).is(":visible")){e=d(b).find("img:first");if(!e.length){e=d(b)}}if(e.length){f=e.offset();if(e.is("img")){h=e.outerWidth();i=e.outerHeight()}}else{j=g.getViewport();f.top=j.y+(j.h-i)*.5;f.left=j.x+(j.w-h)*.5}f={top:Math.ceil(f.top-c)+"px",left:Math.ceil(f.left-c)+"px",width:Math.ceil(h+c*2)+"px",height:Math.ceil(i+c*2)+"px"};return f},step:function(a,b){var c,d,e;if(b.prop==="width"||b.prop==="height"){d=e=Math.ceil(a-g.current.padding*2);if(b.prop==="height"){c=(a-b.start)/(b.end-b.start);if(b.start>b.end){c=1-c}d-=g.innerSpace*c;e-=g.outerSpace*c}g.inner[b.prop](d);g.outer[b.prop](e)}},zoomIn:function(){var a=g.wrap,b=g.current,c,e,f=b.dim;if(b.openEffect==="elastic"){e=d.extend({},f,g._getPosition(true));delete e.position;c=this.getOrigPosition();if(b.openOpacity){c.opacity=0;e.opacity=1}g.outer.add(g.inner).width("auto").height("auto");a.css(c).show();a.animate(e,{duration:b.openSpeed,easing:b.openEasing,step:this.step,complete:g._afterZoomIn})}else{a.css(d.extend({},f,g._getPosition()));if(b.openEffect==="fade"){a.fadeIn(b.openSpeed,g._afterZoomIn)}else{a.show();g._afterZoomIn()}}},zoomOut:function(){var a=g.wrap,b=g.current,c;if(b.closeEffect==="elastic"){if(a.css("position")==="fixed"){a.css(g._getPosition(true))}c=this.getOrigPosition();if(b.closeOpacity){c.opacity=0}a.animate(c,{duration:b.closeSpeed,easing:b.closeEasing,step:this.step,complete:g._afterZoomOut})}else{a.fadeOut(b.closeEffect==="fade"?b.closeSpeed:0,g._afterZoomOut)}},changeIn:function(){var a=g.wrap,b=g.current,c;if(b.nextEffect==="elastic"){c=g._getPosition(true);c.opacity=0;c.top=parseInt(c.top,10)-200+"px";a.css(c).show().animate({opacity:1,top:"+=200px"},{duration:b.nextSpeed,easing:b.nextEasing,complete:g._afterZoomIn})}else{a.css(g._getPosition());if(b.nextEffect==="fade"){a.hide().fadeIn(b.nextSpeed,g._afterZoomIn)}else{a.show();g._afterZoomIn()}}},changeOut:function(){var a=g.wrap,b=g.current,c=function(){d(this).trigger("onReset").remove()};a.removeClass("fancybox-opened");if(b.prevEffect==="elastic"){a.animate({opacity:0,top:"+=200px"},{duration:b.prevSpeed,easing:b.prevEasing,complete:c})}else{a.fadeOut(b.prevEffect==="fade"?b.prevSpeed:0,c)}}};g.helpers.overlay={overlay:null,update:function(){var a,c,g;this.overlay.width(0).height(0);if(d.browser.msie){c=Math.max(b.documentElement.scrollWidth,b.body.scrollWidth);g=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth);a=c<g?e.width():c}else{a=f.width()}this.overlay.width(a).height(f.height())},beforeShow:function(a){if(this.overlay){return}a=d.extend(true,{speedIn:"fast",closeClick:true,opacity:1,css:{background:"black"}},a);this.overlay=d('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body");this.update();if(a.closeClick){this.overlay.bind("click.fb",g.close)}e.bind("resize.fb",d.proxy(this.update,this));this.overlay.fadeTo(a.speedIn,a.opacity)},onUpdate:function(){this.update()},afterClose:function(a){if(this.overlay){this.overlay.fadeOut(a.speedOut||0,function(){d(this).remove()})}this.overlay=null}};g.helpers.title={beforeShow:function(a){var b,c=g.current.title;if(c){b=d('<div class="fancybox-title fancybox-title-'+a.type+'-wrap">'+c+"</div>").appendTo("body");if(a.type==="float"){b.width(b.width());b.wrapInner('<span class="child"></span>');g.current.margin[2]+=Math.abs(parseInt(b.css("margin-bottom"),10))}b.appendTo(a.type==="over"?g.inner:a.type==="outside"?g.wrap:g.outer)}}};d.fn.fancybox=function(a){var b=d(this),c=this.selector||"",e,h=function(f){var h=this,i=e,j,k;if(!(f.ctrlKey||f.altKey||f.shiftKey||f.metaKey)){f.preventDefault();j=a.groupAttr||"data-fancybox-group";k=d(h).attr(j);if(!k){j="rel";k=h[j]}if(k&&k!==""&&k!=="nofollow"){h=c.length?d(c):b;h=h.filter("["+j+'="'+k+'"]');i=h.index(this)}a.index=i;g.open(h,a)}};a=a||{};e=a.index||0;if(c){f.undelegate(c,"click.fb-start").delegate(c,"click.fb-start",h)}else{b.unbind("click.fb-start").bind("click.fb-start",h)}return this}})(window,document)