!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(c){function e(){}function d(e,t){f.ev.on(n+e+w,t)}function u(e,t,n,o){var i=document.createElement("div");return i.className="mfp-"+e,n&&(i.innerHTML=n),o?t&&t.appendChild(i):(i=c(i),t&&i.appendTo(t)),i}function p(e,t){f.ev.triggerHandler(n+e,t),f.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),f.st.callbacks[e]&&f.st.callbacks[e].apply(f,c.isArray(t)?t:[t]))}function m(e){return e===t&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=c(f.st.closeMarkup.replace("%title%",f.st.tClose)),t=e),f.currTemplate.closeBtn}function r(){c.magnificPopup.instance||((f=new e).init(),c.magnificPopup.instance=f)}var f,o,g,i,h,t,l="Close",v="BeforeClose",y="MarkupParse",C="Open",a="Change",n="mfp",w="."+n,b="mfp-ready",s="mfp-removing",I="mfp-prevent-close",x=!!window.jQuery,k=c(window);function T(){S&&(P.after(S.addClass(_)).detach(),S=null)}c.magnificPopup={instance:null,proto:e.prototype={constructor:e,init:function(){var e=navigator.appVersion;f.isLowIE=f.isIE8=document.all&&!document.addEventListener,f.isAndroid=/android/gi.test(e),f.isIOS=/iphone|ipad|ipod/gi.test(e),f.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),g=c(document),f.popupsCache={}},open:function(e){if(!1===e.isObj){f.items=e.items.toArray(),f.index=0;for(var t,n=e.items,o=0;o<n.length;o++)if((t=(t=n[o]).parsed?t.el[0]:t)===e.el[0]){f.index=o;break}}else f.items=c.isArray(e.items)?e.items:[e.items],f.index=e.index||0;if(!f.isOpen){f.types=[],h="",e.mainEl&&e.mainEl.length?f.ev=e.mainEl.eq(0):f.ev=g,e.key?(f.popupsCache[e.key]||(f.popupsCache[e.key]={}),f.currTemplate=f.popupsCache[e.key]):f.currTemplate={},f.st=c.extend(!0,{},c.magnificPopup.defaults,e),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=u("bg").on("click"+w,function(){f.close()}),f.wrap=u("wrap").attr("tabindex",-1).on("click"+w,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=u("container",f.wrap)),f.contentContainer=u("content"),f.st.preloader&&(f.preloader=u("preloader",f.container,f.st.tLoading));for(var i=c.magnificPopup.modules,o=0;o<i.length;o++){var r=(r=i[o]).charAt(0).toUpperCase()+r.slice(1);f["init"+r].call(f)}p("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(d(y,function(e,t,n,o){n.close_replaceWith=m(o.type)}),h+=" mfp-close-btn-in"):f.wrap.append(m())),f.st.alignTop&&(h+=" mfp-align-top"),f.fixedContentPos?f.wrap.css({overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}):f.wrap.css({top:k.scrollTop(),position:"absolute"}),!1!==f.st.fixedBgPos&&("auto"!==f.st.fixedBgPos||f.fixedContentPos)||f.bgOverlay.css({height:g.height(),position:"absolute"}),f.st.enableEscapeKey&&g.on("keyup"+w,function(e){27===e.keyCode&&f.close()}),k.on("resize"+w,function(){f.updateSize()}),f.st.closeOnContentClick||(h+=" mfp-auto-cursor"),h&&f.wrap.addClass(h);var a=f.wH=k.height(),s={};f.fixedContentPos&&f._hasScrollBar(a)&&(l=f._getScrollbarSize())&&(s.marginRight=l),f.fixedContentPos&&(f.isIE7?c("body, html").css("overflow","hidden"):s.overflow="hidden");var l=f.st.mainClass;return f.isIE7&&(l+=" mfp-ie7"),l&&f._addClassToMFP(l),f.updateItemHTML(),p("BuildControls"),c("html").css(s),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||c(document.body)),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(b),f._setFocus()):f.bgOverlay.addClass(b),g.on("focusin"+w,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(a),p(C),e}f.updateItemHTML()},close:function(){f.isOpen&&(p(v),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(s),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){p(l);var e=s+" "+b+" ";f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(e+=f.st.mainClass+" "),f._removeClassFromMFP(e),f.fixedContentPos&&(e={marginRight:""},f.isIE7?c("body, html").css("overflow",""):e.overflow="",c("html").css(e)),g.off("keyup.mfp focusin"+w),f.ev.off(w),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),!f.st.showCloseBtn||f.st.closeBtnInside&&!0!==f.currTemplate[f.currItem.type]||f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f.st.autoFocusLast&&f._lastFocusedEl&&c(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,p("AfterClose")},updateSize:function(e){var t;f.isIOS?(t=document.documentElement.clientWidth/window.innerWidth,t=window.innerHeight*t,f.wrap.css("height",t),f.wH=t):f.wH=e||k.height(),f.fixedContentPos||f.wrap.css("height",f.wH),p("Resize")},updateItemHTML:function(){var e=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach();var t=(e=e.parsed?e:f.parseEl(f.index)).type;p("BeforeChange",[f.currItem?f.currItem.type:"",t]),f.currItem=e,f.currTemplate[t]||(p("FirstMarkupParse",n=!!f.st[t]&&f.st[t].markup),f.currTemplate[t]=!n||c(n)),i&&i!==e.type&&f.container.removeClass("mfp-"+i+"-holder");var n=f["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,f.currTemplate[t]);f.appendContent(n,t),e.preloaded=!0,p(a,e),i=e.type,f.container.prepend(f.contentContainer),p("AfterChange")},appendContent:function(e,t){(f.content=e)?f.st.showCloseBtn&&f.st.closeBtnInside&&!0===f.currTemplate[t]?f.content.find(".mfp-close").length||f.content.append(m()):f.content=e:f.content="",p("BeforeAppend"),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(e){var t,n=f.items[e];if((n=n.tagName?{el:c(n)}:(t=n.type,{data:n,src:n.src})).el){for(var o=f.types,i=0;i<o.length;i++)if(n.el.hasClass("mfp-"+o[i])){t=o[i];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||f.st.type||"inline",n.index=e,n.parsed=!0,f.items[e]=n,p("ElementParse",n),f.items[e]},addGroup:function(t,n){function e(e){e.mfpEl=this,f._openClick(e,t,n)}var o="click.magnificPopup";(n=n||{}).mainEl=t,n.items?(n.isObj=!0,t.off(o).on(o,e)):(n.isObj=!1,n.delegate?t.off(o).on(o,n.delegate,e):(n.items=t).off(o).on(o,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n:c.magnificPopup.defaults).midClick||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var o=(void 0!==n.disableOn?n:c.magnificPopup.defaults).disableOn;if(o)if(c.isFunction(o)){if(!o.call(f))return!0}else if(k.width()<o)return!0;e.type&&(e.preventDefault(),f.isOpen&&e.stopPropagation()),n.el=c(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),f.open(n)}},updateStatus:function(e,t){var n;f.preloader&&(o!==e&&f.container.removeClass("mfp-s-"+o),p("UpdateStatus",n={status:e,text:t=t||"loading"!==e?t:f.st.tLoading}),e=n.status,f.preloader.php(t=n.text),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),o=e)},_checkIfClose:function(e){if(!c(e).hasClass(I)){var t=f.st.closeOnContentClick,n=f.st.closeOnBgClick;if(t&&n)return!0;if(!f.content||c(e).hasClass("mfp-close")||f.preloader&&e===f.preloader[0])return!0;if(e===f.content[0]||c.contains(f.content[0],e)){if(t)return!0}else if(n&&c.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?g.height():document.body.scrollHeight)>(e||k.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(e){return e.target===f.wrap[0]||c.contains(f.wrap[0],e.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(i,e,t){var r;t.data&&(e=c.extend(t.data,e)),p(y,[i,e,t]),c.each(e,function(e,t){return void 0===t||!1===t||void(1<(r=e.split("_")).length?0<(n=i.find(w+"-"+r[0])).length&&("replaceWith"===(o=r[1])?n[0]!==t[0]&&n.replaceWith(t):"img"===o?n.is("img")?n.attr("src",t):n.replaceWith(c("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(r[1],t)):i.find(w+"-"+e).php(t));var n,o})},_getScrollbarSize:function(){var e;return void 0===f.scrollbarSize&&((e=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),f.scrollbarSize}},modules:[],open:function(e,t){return r(),(e=e?c.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return c.magnificPopup.instance&&c.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(c.magnificPopup.defaults[e]=t.options),c.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},c.fn.magnificPopup=function(e){r();var t,n,o,i=c(this);return"string"==typeof e?"open"===e?(t=x?i.data("magnificPopup"):i[0].magnificPopup,n=parseInt(arguments[1],10)||0,o=t.items?t.items[n]:(o=i,(o=t.delegate?o.find(t.delegate):o).eq(n)),f._openClick({mfpEl:o},i,t)):f.isOpen&&f[e].apply(f,Array.prototype.slice.call(arguments,1)):(e=c.extend(!0,{},e),x?i.data("magnificPopup",e):i[0].magnificPopup=e,f.addGroup(i,e)),i};var _,P,S,E="inline";function z(){M&&c(document.body).removeClass(M)}function O(){z(),f.req&&f.req.abort()}c.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){f.types.push(E),d(l+"."+E,function(){T()})},getInline:function(e,t){if(T(),e.src){var n,o=f.st.inline,i=c(e.src);return i.length?((n=i[0].parentNode)&&n.tagName&&(P||(_=o.hiddenClass,P=u(_),_="mfp-"+_),S=i.after(P).detach().removeClass(_)),f.updateStatus("ready")):(f.updateStatus("error",o.tNotFound),i=c("<div>")),e.inlineElement=i}return f.updateStatus("ready"),f._parseMarkup(t,{},e),t}}});var M,B,L,H="ajax";function A(e){var t;!f.currTemplate[F]||(t=f.currTemplate[F].find("iframe")).length&&(e||(t[0].src="//about:blank"),f.isIE8&&t.css("display",e?"block":"none"))}c.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){f.types.push(H),M=f.st.ajax.cursor,d(l+"."+H,O),d("BeforeChange."+H,O)},getAjax:function(o){M&&c(document.body).addClass(M),f.updateStatus("loading");var e=c.extend({url:o.src,success:function(e,t,n){p("ParseAjax",n={data:e,xhr:n}),f.appendContent(c(n.data),H),o.finished=!0,z(),f._setFocus(),setTimeout(function(){f.wrap.addClass(b)},16),f.updateStatus("ready"),p("AjaxContentAdded")},error:function(){z(),o.finished=o.loadError=!0,f.updateStatus("error",f.st.ajax.tError.replace("%url%",o.src))}},f.st.ajax.settings);return f.req=c.ajax(e),""}}}),c.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=f.st.image,t=".image";f.types.push("image"),d(C+t,function(){"image"===f.currItem.type&&e.cursor&&c(document.body).addClass(e.cursor)}),d(l+t,function(){e.cursor&&c(document.body).removeClass(e.cursor),k.off("resize"+w)}),d("Resize"+t,f.resizeImage),f.isLowIE&&d("AfterChange",f.resizeImage)},resizeImage:function(){var e,t=f.currItem;t&&t.img&&f.st.image.verticalFit&&(e=0,f.isLowIE&&(e=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",f.wH-e))},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,B&&clearInterval(B),e.isCheckingImgSize=!1,p("ImageHasSize",e),e.imgHidden&&(f.content&&f.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(n){var o=0,i=n.img[0];!function e(t){B&&clearInterval(B),B=setInterval(function(){return 0<i.naturalWidth?void f._onImageHasSize(n):(200<o&&clearInterval(B),void(3==++o?e(10):40===o?e(50):100===o&&e(500)))},t)}(1)},getImage:function(t,e){function n(){t&&(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)}var o,i=0,r=f.st.image,a=e.find(".mfp-img");return a.length&&((o=document.createElement("img")).className="mfp-img",t.el&&t.el.find("img").length&&(o.alt=t.el.find("img").attr("alt")),t.img=c(o).on("load.mfploader",function e(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===f.currItem&&(f._onImageHasSize(t),f.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,p("ImageLoadComplete")):++i<200?setTimeout(e,100):n())}).on("error.mfploader",n),o.src=t.src,a.is("img")&&(t.img=t.img.clone()),0<(o=t.img[0]).naturalWidth?t.hasSize=!0:o.width||(t.hasSize=!1)),f._parseMarkup(e,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=f.st.image.titleSrc;if(t){if(c.isFunction(t))return t.call(f,e);if(e.el)return e.el.attr(t)||""}return""}(t),img_replaceWith:t.img},t),f.resizeImage(),t.hasSize?(B&&clearInterval(B),t.loadError?(e.addClass("mfp-loading"),f.updateStatus("error",r.tError.replace("%url%",t.src))):(e.removeClass("mfp-loading"),f.updateStatus("ready"))):(f.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,e.addClass("mfp-loading"),f.findImageSize(t))),e}}}),c.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,t,n,o,i,r,a=f.st.zoom,s=".zoom";a.enabled&&f.supportsTransition&&(o=a.duration,i=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+a.duration/1e3+"s "+a.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"};return o["-webkit-"+(e="transition")]=o["-moz-"+e]=o["-o-"+e]=o[e]=n,t.css(o),t},r=function(){f.content.css("visibility","visible")},d("BuildControls"+s,function(){f._allowZoom()&&(clearTimeout(t),f.content.css("visibility","hidden"),(e=f._getItemToZoom())?((n=i(e)).css(f._getOffset()),f.wrap.append(n),t=setTimeout(function(){n.css(f._getOffset(!0)),t=setTimeout(function(){r(),setTimeout(function(){n.remove(),e=n=null,p("ZoomAnimationEnded")},16)},o)},16)):r())}),d(v+s,function(){if(f._allowZoom()){if(clearTimeout(t),f.st.removalDelay=o,!e){if(!(e=f._getItemToZoom()))return;n=i(e)}n.css(f._getOffset(!0)),f.wrap.append(n),f.content.css("visibility","hidden"),setTimeout(function(){n.css(f._getOffset())},16)}}),d(l+s,function(){f._allowZoom()&&(r(),n&&n.remove(),e=null)}))},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return!!f.currItem.hasSize&&f.currItem.img},_getOffset:function(e){var t=e?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem),n=t.offset(),o=parseInt(t.css("padding-top"),10),e=parseInt(t.css("padding-bottom"),10);return n.top-=c(window).scrollTop()-o,o={width:t.width(),height:(x?t.innerHeight():t[0].offsetHeight)-e-o},(L=void 0===L?void 0!==document.createElement("p").style.MozTransform:L)?o["-moz-transform"]=o.transform="translate("+n.left+"px,"+n.top+"px)":(o.left=n.left,o.top=n.top),o}}});var F="iframe";function j(e){var t=f.items.length;return t-1<e?e-t:e<0?t+e:e}function N(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)}c.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){f.types.push(F),d("BeforeChange",function(e,t,n){t!==n&&(t===F?A():n===F&&A(!0))}),d(l+"."+F,function(){A()})},getIframe:function(e,t){var n=e.src,o=f.st.iframe;c.each(o.patterns,function(){return-1<n.indexOf(this.index)?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var i={};return o.srcAction&&(i[o.srcAction]=n),f._parseMarkup(t,i,e),f.updateStatus("ready"),t}}}),c.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var r=f.st.gallery,e=".mfp-gallery";return f.direction=!0,!(!r||!r.enabled)&&(h+=" mfp-gallery",d(C+e,function(){r.navigateByImgClick&&f.wrap.on("click"+e,".mfp-img",function(){return 1<f.items.length?(f.next(),!1):void 0}),g.on("keydown"+e,function(e){37===e.keyCode?f.prev():39===e.keyCode&&f.next()})}),d("UpdateStatus"+e,function(e,t){t.text&&(t.text=N(t.text,f.currItem.index,f.items.length))}),d(y+e,function(e,t,n,o){var i=f.items.length;n.counter=1<i?N(r.tCounter,o.index,i):""}),d("BuildControls"+e,function(){var e,t;1<f.items.length&&r.arrows&&!f.arrowLeft&&(t=r.arrowMarkup,e=f.arrowLeft=c(t.replace(/%title%/gi,r.tPrev).replace(/%dir%/gi,"left")).addClass(I),t=f.arrowRight=c(t.replace(/%title%/gi,r.tNext).replace(/%dir%/gi,"right")).addClass(I),e.click(function(){f.prev()}),t.click(function(){f.next()}),f.container.append(e.add(t)))}),d(a+e,function(){f._preloadTimeout&&clearTimeout(f._preloadTimeout),f._preloadTimeout=setTimeout(function(){f.preloadNearbyImages(),f._preloadTimeout=null},16)}),void d(l+e,function(){g.off(e),f.wrap.off("click"+e),f.arrowRight=f.arrowLeft=null}))},next:function(){f.direction=!0,f.index=j(f.index+1),f.updateItemHTML()},prev:function(){f.direction=!1,f.index=j(f.index-1),f.updateItemHTML()},goTo:function(e){f.direction=e>=f.index,f.index=e,f.updateItemHTML()},preloadNearbyImages:function(){for(var e=f.st.gallery.preload,t=Math.min(e[0],f.items.length),n=Math.min(e[1],f.items.length),o=1;o<=(f.direction?n:t);o++)f._preloadItem(f.index+o);for(o=1;o<=(f.direction?t:n);o++)f._preloadItem(f.index-o)},_preloadItem:function(e){var t;e=j(e),f.items[e].preloaded||(p("LazyLoad",t=!(t=f.items[e]).parsed?f.parseEl(e):t),"image"===t.type&&(t.img=c('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,p("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0)}}});var W="retina";c.magnificPopup.registerModule(W,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){var n,o;1<window.devicePixelRatio&&(n=f.st.retina,o=n.ratio,1<(o=isNaN(o)?o():o)&&(d("ImageHasSize."+W,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/o,width:"100%"})}),d("ElementParse."+W,function(e,t){t.src=n.replaceSrc(t,o)})))}}}),r()});