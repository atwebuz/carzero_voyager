(self.webpackChunkelectrocars=self.webpackChunkelectrocars||[]).push([[131],{4270:function(e,t,a){"use strict";var r=a(9755),o=a.n(r);function i(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}(e,t,"get"))}var n=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap;t.Z=class{constructor(e,t){n.set(this,{writable:!0,value:()=>this.options.onShowMore()}),s.set(this,{writable:!0,value:()=>{window.scrollTo({top:0,behavior:"smooth"})}}),l.set(this,{writable:!0,value:e=>{o()(e.target).get(0).play()}}),c.set(this,{writable:!0,value:e=>{o()(e.target).get(0).pause()}}),this.options=t,this.$grid=o()(e),this.$wrapperGrid=o()(e).find(".news-grid__wrapper"),this.$buttonMore=o()(e).find("#button-more"),this.$buttonScrollUp=o()(e).find("#button-scroll-up"),this.$allVideos=o()(e).find(".small-article-card__video"),this.$buttonMore.on("click",i(this,n)),this.$buttonScrollUp.on("click",i(this,s)),this.$wrapperGrid.on("mouseenter",".small-article-card__video",i(this,l)),this.$wrapperGrid.on("mouseleave",".small-article-card__video",i(this,c))}}},6231:function(e,t,a){"use strict";a.d(t,{p:function(){return l}});var r=a(5716),o=a(9755),i=a.n(o),n=a(8509);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class l{constructor(){var e=this;s(this,"show",(function(){var{title:t,subtitle:a,buttonText:o="\u041e\u043a"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=r.p8.timeline();e.$contentWrapper.empty(),s.to(e.$serviceModalRoot,{display:"flex",duration:0}),s.to(".service-modal-root__overlay",{opacity:1,duration:.3}),s.to(".service-modal-root__content-wrapper",{opacity:1,translateY:0,duration:.5}),t&&i()("<div/>",{class:"service-modal-root__title"}).text(t).appendTo(e.$contentWrapper),a&&i()("<div/>",{class:"service-modal-root__subtitle"}).text(a).appendTo(e.$contentWrapper),i()("<button/>",{class:"button button--variant-outlined-gray service-modal-root__close-button"}).text(o).appendTo(e.$contentWrapper);var l=document.documentElement;(0,n.Qp)(l)})),s(this,"hide",(()=>{var e=r.p8.timeline();e.to(".service-modal-root__content-wrapper",{opacity:0,translateY:50,duration:.3}),e.to(".service-modal-root__overlay",{opacity:0,duration:.5}),e.to(this.$serviceModalRoot,{display:"none",duration:0,onComplete:()=>{this.$contentWrapper.empty(),(0,n.tP)()}})})),this.$serviceModalRoot=i()("#service-modal-root"),this.$contentWrapper=this.$serviceModalRoot.find(".service-modal-root__content-wrapper"),this.$overlay=this.$serviceModalRoot.find(".service-modal-root__overlay"),this.$title=this.$serviceModalRoot.find(".service-modal-root__title"),this.$subtitle=this.$serviceModalRoot.find(".service-modal-root__subtitle"),this.$overlay.on("click",this.hide),this.$contentWrapper.on("click",".service-modal-root__close-button",this.hide)}}},5292:function(e,t,a){"use strict";a.d(t,{b:function(){return r}});var r=()=>window.getComputedStyle(document.body,":before").content.replace(/"/g,"")},7416:function(e,t,a){"use strict";var r=a(9755),o=a.n(r),i=a(1329),n=a(5716),s=a(8509);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}(e,t,"get"))}var d=new WeakMap,h=new WeakMap;var p=new class{constructor(){d.set(this,{writable:!0,value:()=>{var e=document.querySelector("head"),t=document.createElement("script");t.setAttribute("src","https://api-maps.yandex.ru/2.1/?apikey=".concat("58f61641-0027-42b9-992f-d44aad687fc3","&lang=ru_RU")),e.insertAdjacentElement("beforeend",t);var a=setInterval((()=>{window.ymaps&&(clearInterval(a),ymaps.ready(c(this,h)))}),100)}}),h.set(this,{writable:!0,value:()=>{var e=new ymaps.Map("showrooms-map",{center:[55.17968338328825,61.38654263951109],zoom:12,controls:["zoomControl"]}),t=new ymaps.GeoObjectCollection;o()(".balloon").each(((e,a)=>{var r=o()(a).data("placemark-coordinates"),i=o()(a).prop("outerHTML"),n=ymaps.templateLayoutFactory.createClass(i,{build(){this.constructor.superclass.build.call(this),this._$element=o()(".balloon",this.getParentElement()),this.applyElementOffset(),this._$element.find(".balloon__close-icon").on("click",o().proxy(this.onCloseClick,this))},clear(){this._$element.find(".balloon__close-icon").off("click"),this.constructor.superclass.clear.call(this)},onSublayoutSizeChange(){n.superclass.onSublayoutSizeChange.apply(this,arguments),this._isElement(this._$element)&&(this.applyElementOffset(),this.events.fire("shapechange"))},applyElementOffset(){this._$element.css({left:-this._$element[0].offsetWidth/2,top:-(this._$element[0].offsetHeight+this._$element.find(".balloon__header-arrow")[0].offsetHeight)})},onCloseClick(e){e.preventDefault(),this.events.fire("userclose")},getShape(){if(!this._isElement(this._$element))return n.superclass.getShape.call(this);var e=this._$element.position();return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[e.left,e.top],[e.left+this._$element[0].offsetWidth,e.top+this._$element[0].offsetHeight+this._$element.find(".balloon__header-arrow")[0].offsetHeight]]))},_isElement:e=>e&&e[0]&&e.find(".balloon__header-arrow")[0]});t.add(new ymaps.Placemark(r,{balloonContentBody:i},{iconLayout:"default#imageWithContent",iconImageHref:"images/showroom-placemark.png",iconImageSize:[56,56],iconImageOffset:[-28,-28],balloonShadow:!1,balloonLayout:n,balloonPanelMaxMapArea:0}))})),e.geoObjects.add(t);var a=e.geoObjects.getBounds();a&&e.setBounds(a)}}),l(this,"show",(()=>{n.p8.timeline().to(".showrooms-map-container",{translateY:0,duration:.5}),(0,s.Qp)(document.documentElement)})),l(this,"hide",(()=>{n.p8.timeline().to(".showrooms-map-container",{translateY:"-100%",duration:.5}),(0,s.tP)()})),c(this,d).call(this),o()(".showrooms-map-container__close").on("click",this.hide)}};function u(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}(e,t,"get"))}var v=new WeakMap,w=new WeakMap;new class{constructor(){v.set(this,{writable:!0,value:()=>{this.bannerSlider.slidePrev()}}),w.set(this,{writable:!0,value:()=>{this.bannerSlider.slideNext()}}),this.bannerSlider=new i.Z(".banner-slider",{allowTouchMove:!1,speed:1e3,on:{init:e=>{var{realIndex:t,slides:a}=e,r=a.length;o()(".slider-progress__active").css({width:"".concat((t+1)/r*100,"%")})},activeIndexChange:e=>{var{realIndex:t,slides:a}=e,r=a.length,o=n.p8.timeline();o.to(".banner-slide-content__wrapper",{opacity:0,duration:.5}),o.to(".slider-progress__active",{width:"".concat((t+1)/r*100,"%"),duration:1},"-=.5"),o.to(".banner-slide-content__wrapper",{translateX:"".concat(-100*t,"%"),duration:0}),o.to(".banner-slide-content__wrapper",{opacity:1,duration:.5})}}}),o()(".banner-slide-navigation__prev-button").on("click",u(this,v)),o()(".banner-slide-navigation__next-button").on("click",u(this,w)),o()(document).ready((()=>{this.bannerSlider.update()}))}};var m=a(4270),f=a(5292);function b(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}(e,t,"get"))}var _=new WeakMap,g=new WeakMap,y=new WeakMap,k=new WeakMap,M=new WeakMap;new class{constructor(){_.set(this,{writable:!0,value:()=>{var{slides:e,realIndex:t}=this.chooseElectricCarSlider,a=o()(".interaction-selected-car__about-model"),r=o()(e[t]).attr("data-about-model-url");r?a.show().attr("href",r):a.hide()}}),g.set(this,{writable:!0,value:()=>{var{slides:e,realIndex:t}=this.chooseElectricCarSlider,a=o()(".interaction-selected-car__test-drive"),r=o()(e[t]).attr("data-test-drive-options");r?a.show().attr("data-options",r):a.hide()}}),y.set(this,{writable:!0,value:()=>{this.chooseElectricCarSlider.slidePrev()}}),k.set(this,{writable:!0,value:()=>{this.chooseElectricCarSlider.slideNext()}}),M.set(this,{writable:!0,value:e=>{var t=o()(e.target).closest(".car-model__item").index();this.chooseElectricCarSlider.slideTo(t)}}),o()(document).ready((()=>{if(this.currentBreakpoint=(0,f.b)(),this.chooseElectricCarSlider.update(),"sm"===this.currentBreakpoint){var e=o()(o()(".car-model__checkbox-input--view-desktop").get(0)),t=o()(o()(".car-model__checkbox-input--view-mobile").get(0));e.prop("checked",!1),t.prop("checked",!0)}})),new IntersectionObserver((e=>{var{isIntersecting:t}=e[0],{slides:a,realIndex:r}=this.chooseElectricCarSlider,i=o()(a[r]).find(".electric-car-slide__media-video");t?i.each(((e,t)=>t.play())):i.each(((e,t)=>t.pause()))}),{threshold:.5}).observe(o()(".choose-electric-car").get(0)),this.chooseElectricCarSlider=new i.Z(".choose-electric-car-slider",{allowTouchMove:!1,speed:1500,on:{slideChange:e=>{var{previousIndex:t,slides:a,realIndex:r}=e,i=o()(a[t]).find(".electric-car-slide__media-video"),n=o()(a[r]).find(".electric-car-slide__media-video");i.each(((e,t)=>t.pause())),n.each(((e,t)=>t.play()));var s=o()(".car-model__checkbox-input--view-desktop"),l=o()(".car-model__checkbox-input--view-mobile");b(this,_).call(this),b(this,g).call(this),"sm"===this.currentBreakpoint?(o()(l.get(r)).prop("checked",!0),o()(l.get(t)).prop("checked",!1)):(o()(s.get(r)).prop("checked",!0),o()(s.get(t)).prop("checked",!1))}}}),b(this,_).call(this),b(this,g).call(this),o()(".choose-electric-car-content__prev-button").on("click",b(this,y)),o()(".choose-electric-car-content__next-button").on("click",b(this,k)),o()(".car-model__checkbox-input").on("change",b(this,M))}};var $=a(6231);function x(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}(e,t,"get"))}var W=new WeakMap,C=new WeakMap,S=new WeakMap,E=new WeakMap,P=new WeakMap,G=new WeakMap,T=new WeakMap;new class{constructor(){var e=this;W.set(this,{writable:!0,value:()=>{var e=o()(window).height()/2,{top:t}=o()(".about").offset();t-o()(window).scrollTop()<e?o()(".sidebar").css({color:"#2d2d2d"}):o()(".sidebar").css({color:""})}}),C.set(this,{writable:!0,value:e=>{o()(e.target).get(0).play()}}),S.set(this,{writable:!0,value:e=>{o()(e.target).get(0).pause()}}),E.set(this,{writable:!0,value:e=>{"prev"!==o()(e.target).closest("button").data("variant")?this.teamGallery.slideNext():this.teamGallery.slidePrev()}}),P.set(this,{writable:!0,value:()=>{p.show()}}),G.set(this,{writable:!0,value:()=>{x(this,T).call(this,{mode:"addMore"})}}),T.set(this,{writable:!0,value:function(){var{mode:t="default"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.newsGrid.$grid.data("fetch-articles-url"),r=e.currentPage;"addMore"===t&&(r=e.currentPage+1,e.newsGrid.$buttonMore.addClass("button--loading"),e.newsGrid.$buttonMore.prop("disabled",!0)),o().ajax({type:"GET",url:"".concat("").concat(a),data:{page:r}}).done((a=>{"addMore"===t&&(e.currentPage+=1),e.newsGrid.$wrapperGrid.append(o()(a.content)),a.last_page&&e.newsGrid.$buttonMore.remove()})).fail((()=>{e.serviceModal.show({title:"\u041d\u0435\u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u0438",buttonText:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})).always((()=>{e.newsGrid.$buttonMore.removeClass("button--loading"),e.newsGrid.$buttonMore.prop("disabled",!1)}))}}),this.newsGrid=new m.Z("#news-grid",{onShowMore:x(this,G)}),this.currentPage=1,this.teamGallery=new i.Z("#team-gallery",{speed:1500,breakpoints:{320:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2.3,spaceBetween:50,slidesOffsetAfter:40},1024:{slidesPerView:3.3,spaceBetween:50,slidesOffsetAfter:40},1366:{slidesPerView:3,spaceBetween:60,slidesOffsetAfter:0},1920:{slidesPerView:3,spaceBetween:80,slidesOffsetAfter:0}}}),this.serviceModal=new $.p,o()(".last-news").on("mouseenter",".last-news__video",x(this,C)),o()(".last-news").on("mouseleave",".last-news__video",x(this,S)),o()(".team-gallery-nav").on("click",x(this,E)),o()(".showroom__see-map-button").on("click",x(this,P)),o()(document).on("scroll",x(this,W)),o()(document).ready((()=>{this.teamGallery.update()}))}}}},function(e){"use strict";e.O(0,[216],(function(){return t=7416,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=homepage.7edc7522.bundle.js.map