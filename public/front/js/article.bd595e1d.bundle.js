(self.webpackChunkelectrocars=self.webpackChunkelectrocars||[]).push([[942],{6231:function(t,e,r){"use strict";r.d(e,{p:function(){return l}});var i=r(5716),o=r(9755),n=r.n(o),s=r(8509);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class l{constructor(){var t=this;a(this,"show",(function(){var{title:e,subtitle:r,buttonText:o="\u041e\u043a"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=i.p8.timeline();t.$contentWrapper.empty(),a.to(t.$serviceModalRoot,{display:"flex",duration:0}),a.to(".service-modal-root__overlay",{opacity:1,duration:.3}),a.to(".service-modal-root__content-wrapper",{opacity:1,translateY:0,duration:.5}),e&&n()("<div/>",{class:"service-modal-root__title"}).text(e).appendTo(t.$contentWrapper),r&&n()("<div/>",{class:"service-modal-root__subtitle"}).text(r).appendTo(t.$contentWrapper),n()("<button/>",{class:"button button--variant-outlined-gray service-modal-root__close-button"}).text(o).appendTo(t.$contentWrapper);var l=document.documentElement;(0,s.Qp)(l)})),a(this,"hide",(()=>{var t=i.p8.timeline();t.to(".service-modal-root__content-wrapper",{opacity:0,translateY:50,duration:.3}),t.to(".service-modal-root__overlay",{opacity:0,duration:.5}),t.to(this.$serviceModalRoot,{display:"none",duration:0,onComplete:()=>{this.$contentWrapper.empty(),(0,s.tP)()}})})),this.$serviceModalRoot=n()("#service-modal-root"),this.$contentWrapper=this.$serviceModalRoot.find(".service-modal-root__content-wrapper"),this.$overlay=this.$serviceModalRoot.find(".service-modal-root__overlay"),this.$title=this.$serviceModalRoot.find(".service-modal-root__title"),this.$subtitle=this.$serviceModalRoot.find(".service-modal-root__subtitle"),this.$overlay.on("click",this.hide),this.$contentWrapper.on("click",".service-modal-root__close-button",this.hide)}}},3309:function(t,e,r){"use strict";var i=r(5716),o=r(1329),n=r(8509),s=r(9755),a=r.n(s),l=r(3125);function c(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}(t,e,"get"))}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=new WeakMap,h=new WeakMap,v=new WeakMap,f=new WeakMap;class m{constructor(t,e){var r,i;b.set(this,{writable:!0,value:t=>{var e=a()(t.target).val(),r=a()(t.target).prop("name"),i=a()(t.target).closest(".join-club-form__field");this.fieldsValues=p(p({},this.fieldsValues),{},{[r]:e}),i.removeClass("join-club-form__field--error"),""!==e.trim()?i.addClass("join-club-form__field--has-value"):i.removeClass("join-club-form__field--has-value")}}),h.set(this,{writable:!0,value:t=>{var e=a()(t.target).val().trim(),r=a()(t.target).prop("name");this.fieldsValues=p(p({},this.fieldsValues),{},{[r]:e}),a()(t.target).val("").val(e)}}),v.set(this,{writable:!0,value:t=>{t.preventDefault(),c(this,f).call(this)&&"function"==typeof this.options.onSubmitSuccess&&this.options.onSubmitSuccess(this.fieldsValues)}}),f.set(this,{writable:!0,value:()=>{var t=!0;return this.$allInputs.each(((e,r)=>{var i=a()(r).prop("name"),o=a()(r).attr("type"),n=a()(r).closest(".join-club-form__field");"email"!==o||(0,l.P)(this.fieldsValues[i])||(n.addClass("join-club-form__field--error"),t=!1)})),t}}),d(this,"resetForm",(()=>{var t=this.fieldsValues._csrf;this.$form.find(".join-club-form__input").each(((t,e)=>{var r=a()(e).closest(".join-club-form__field");a()(e).val(""),r.removeClass("join-club-form__field--has-value"),r.removeClass("join-club-form__field--error")})),this.fieldsValues={_csrf:t}})),this.options=e||{},this.$form=a()(t),this.$allInputs=this.$form.find("input"),this.fieldsValues=(r=this.$allInputs,i={},r.each(((t,e)=>{var r=a()(e).val(),o=a()(e).prop("name");i=p(p({},i),{},{[o]:r})})),i),this.$allInputs.on("input",c(this,b)),this.$allInputs.on("blur",c(this,h)),this.$form.on("submit",c(this,v))}}var y=r(6231);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}(t,e,"get"))}var O=new WeakMap;class ${constructor(t,e){O.set(this,{writable:!0,value:t=>{this.currentStep+=1;var e=a()(t.target).val(),r=a()(t.target).prop("name");this.fieldsValues=w(w({},this.fieldsValues),{},{[r]:e});var i=a()(t.target).closest(".surveys-list__item"),o=a()(this.$allQuestions.get(this.currentStep)),n=!(this.currentStep===this.$allQuestions.length);if(i.addClass("surveys-list__item--hide"),i.removeClass("surveys-list__item--show"),!n){var s=new FormData;return Object.keys(this.fieldsValues).forEach((t=>s.append(t,this.fieldsValues[t]))),void a().ajax({type:"POST",contentType:!1,url:"".concat("").concat("/news/send-answer"),data:s,processData:!1}).done((t=>{if("ok"===t.status){var e=t.result.map((t=>'\n                            <div class="result__item">\n                                <div class="result__line">\n                                    '.concat(t.label,'\n                                    <div class="result__line_count">').concat(t.count,' \u0447\u0435\u043b</div>\n                                    <div class="result__line_all"></div>\n                                </div>\n                                <div class="result__count">').concat(t.percent,"%</div>\n                            </div>\n                            ")));e.push('<div class="result__text">\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043b\u0438 '.concat(t.total," \u0447\u0435\u043b\u043e\u0432\u0435\u043a</div>")),this.$survey.find(".result__content").html(e.join(""))}})).fail((()=>{})).always((()=>{a()(".survey-join-club").addClass("survey-join-club--show"),a()(".survey__title").text("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043e\u043f\u0440\u043e\u0441\u0430")}))}o.addClass("surveys-list__item--show")}}),g(this,"getQuizResults",(()=>this.fieldsValues)),this.options=e,this.fieldsValues={},this.$survey=a()(t),this.$allQuestions=this.$survey.find(".surveys-list__item"),this.$allRadioInputs=this.$survey.find('input[type="radio"]'),this.$allRadioInputs.on("change",j(this,O)),this.currentStep=0}}function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function M(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,function(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}(t,e,"get"))}var S=new WeakMap,C=new WeakMap,T=new WeakMap,D=new WeakMap,W=new WeakMap,V=new WeakMap,E=new WeakMap;new class{constructor(){S.set(this,{writable:!0,value:t=>{var e=a()(t.target),r=this.$commentForm.find("[data-parent]"),i=e.attr("data-id");r.val(i),a()("body,html").animate({scrollTop:this.$commentForm.position().top},500)}}),C.set(this,{writable:!0,value:t=>{t.target.play()}}),T.set(this,{writable:!0,value:t=>{t.target.pause()}}),D.set(this,{writable:!0,value:t=>{t.preventDefault();var e=a()(".article-content__form"),r=e.find(".form__submit-button");r.css({opacity:.5,pointerEvents:"none"}),a().ajax({type:"POST",url:"".concat("").concat(e.attr("action")),data:e.serialize()}).done((t=>{e.get(0).reset(),this.serviceModal.show({title:t.title,subtitle:t.text,buttonText:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})).fail((()=>{this.serviceModal.show({title:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",buttonText:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})).always((()=>{r.css({opacity:1,pointerEvents:"all"})}))}}),W.set(this,{writable:!0,value:()=>{(0,n.Qp)(document.documentElement);var t=i.p8.timeline();a()(".fullscreen-player").css({display:"flex"}),t.to(".fullscreen-player",{opacity:1,duration:.5}),this.player.playVideo()}}),V.set(this,{writable:!0,value:()=>{(0,n.tP)();var t=i.p8.timeline();this.player.pauseVideo(),t.to(".fullscreen-player",{opacity:0,duration:.5,onComplete:()=>{this.player.stopVideo(),a()(".fullscreen-player").css({display:"none"})}})}}),E.set(this,{writable:!0,value:t=>{"prev"!==a()(t.target).closest(".article-gallery__button").data("variant")?this.articleSlider.slideNext():this.articleSlider.slidePrev()}}),this.serviceModal=new y.p,this.survey=new $("#survey"),this.surveyJoinClubForm=new m("#survey-join-club-form",{onSubmitSuccess:t=>{var e=this.survey.getQuizResults(),r=k(k({},t),e),i=a()("#survey-join-club-form"),o=new FormData;Object.keys(r).forEach((t=>{o.append(t,r[t])}));var n=i.attr("action"),s=i.attr("method");a()("#survey-join-club-form .join-club-form__submit-button").addClass("button--loading"),a()("#survey-join-club-form .join-club-form__submit-button").prop("disabled",!0),a().ajax({type:s,contentType:!1,url:"".concat("").concat(n),data:o,processData:!1}).done((t=>{"ok"===t.status?(this.serviceModal.show({title:t.title,subtitle:t.text,buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"}),this.surveyJoinClubForm.resetForm(),a()(".article-content__banner").remove()):this.serviceModal.show({title:t.title,subtitle:t.text,buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})})).fail((()=>{this.serviceModal.show({title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...",subtitle:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435",buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})})).always((()=>{a()("#survey-join-club-form .join-club-form__submit-button").removeClass("button--loading"),a()("#survey-join-club-form .join-club-form__submit-button").prop("disabled",!1)}))}}),this.joinClubBannerForm=new m("#join-club-form",{onSubmitSuccess:t=>{var e=a()("#join-club-form"),r=new FormData;Object.keys(t).forEach((e=>{r.append(e,t[e])}));var i=e.attr("action"),o=e.attr("method");a()("#join-club-form .join-club-form__submit-button").addClass("button--loading"),a()("#join-club-form .join-club-form__submit-button").prop("disabled",!1),a().ajax({type:o,contentType:!1,url:"".concat("").concat(i),data:r,processData:!1}).done((t=>{"ok"===t.status?(this.serviceModal.show({title:t.title,subtitle:t.text,buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"}),this.joinClubBannerForm.resetForm()):this.serviceModal.show({title:t.title,subtitle:t.text,buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})})).fail((()=>{this.serviceModal.show({title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...",subtitle:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435",buttonText:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})})).always((()=>{a()("#join-club-form .join-club-form__submit-button").removeClass("button--loading"),a()("#join-club-form .join-club-form__submit-button").prop("disabled",!1)}))}}),this.player=null,window.onYouTubeIframeAPIReady=()=>{this.player=new YT.Player("youtube-player",{height:"360",width:"640",videoId:a()("#youtube-player").data("videoid")})},this.articleSlider=new o.Z(".article-gallery__container",{speed:1e3,autoHeight:!0,on:{init(t){var{slides:e}=t;a()(".article-gallery__counter-total").text(e.length),e.length<=1&&a()(".article-gallery").addClass("article-gallery--pagination-hide")},slideChange(t){var{realIndex:e,isBeginning:r,isEnd:i}=t;a()(".article-gallery__counter-active").text(e+1),r?a()(".article-gallery__button-prev").prop("disabled",!0):a()(".article-gallery__button-prev").prop("disabled",!1),i?a()(".article-gallery__button-next").prop("disabled",!0):a()(".article-gallery__button-next").prop("disabled",!1)}}}),this.$commentForm=a()(".article-content__form"),a()("video").hover(M(this,C),M(this,T)),a()(".article-content__media-video-container").on("click",M(this,W)),a()(".fullscreen-player").on("click",M(this,V)),a()(".article-gallery__button").on("click",M(this,E)),this.$commentForm.find(".form__submit-button").on("click",M(this,D)),a()(".article-content__comment-reply").on("click",M(this,S)),a()(document).ready((()=>{this.articleSlider.slides.length&&this.articleSlider.update()}))}}},3125:function(t,e,r){"use strict";r.d(e,{P:function(){return i}});var i=t=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},function(t){"use strict";t.O(0,[216],(function(){return e=3309,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=article.bd595e1d.bundle.js.map