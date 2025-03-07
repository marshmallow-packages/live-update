/*! For license information please see field.js.LICENSE.txt */
(()=>{var e,t={61:e=>{"use strict";e.exports=Vue},87:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(61),o=["value","id","dusk","disabled","list"];var i=r(610);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s={mixins:[i.DependentFormField,i.HandlesValidationErrors],props:["resourceName","resourceId","field"],computed:{defaultAttributes:function(){return{type:this.currentField.type||"text",min:this.currentField.min,max:this.currentField.max,step:this.currentField.step,pattern:this.currentField.pattern,placeholder:this.currentField.placeholder||this.field.name,class:this.errorClasses}}},extraAttributes:function(){var e=this.currentField.extraAttributes;return l(l({},this.defaultAttributes),e)}};const f=(0,r(262).A)(s,[["render",function(e,t,r,i,a,c){var l=(0,n.resolveComponent)("DefaultField");return(0,n.openBlock)(),(0,n.createBlock)(l,{field:e.currentField,errors:e.errors,"show-help-text":e.showHelpText},{field:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("input",(0,n.mergeProps)(e.extraAttributes,{class:"w-full form-control form-input form-control-bordered",onInput:t[0]||(t[0]=function(){return e.handleChange&&e.handleChange.apply(e,arguments)}),value:e.value,id:e.currentField.uniqueKey,dusk:r.field.attribute,disabled:e.currentlyIsReadonly,list:"".concat(r.field.attribute,"-list")}),null,16,o)]})),_:1},8,["field","errors","show-help-text"])}]])},229:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(61),o={class:"relative whitespace-nowrap flex items-center"},i={key:0},a={key:1};const c={components:{LiveUpdateField:r(293).LiveUpdateField},props:["resourceName","resourceId","field"],methods:{setInitialValue:function(){this.value=this.field.value||""},fill:function(e){e.append(this.field.attribute,this.value||"")}}};const l=(0,r(262).A)(c,[["render",function(e,t,r,c,l,u){var s=(0,n.resolveComponent)("live-update-field");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{onClick:t[0]||(t[0]=(0,n.withModifiers)((function(){}),["stop"])),class:"relative w-full flex items-stretch"},[(0,n.createElementVNode)("div",o,[r.field.asPlaceholder?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,(0,n.toDisplayString)(r.field.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createVNode)(s,{resourceName:r.resourceName,resourceId:r.resourceId,field:r.field},null,8,["resourceName","resourceId","field"])]))])])}]])},252:(e,t,r)=>{Nova.booting((function(e){e.component("live-update-field",r(293).A),e.component("index-live-update",r(229).A),e.component("preview-live-update",r(882).A),e.component("detail-live-update",r(592).A),e.component("form-live-update",r(87).A)}))},262:(e,t)=>{"use strict";t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},293:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var n=r(61),o={class:"relative whitespace-nowrap flex items-center"},i={key:0},a=["id","type","placeholder"],c={key:2,class:"ml-1 hover:bg-gray-100 rounded-full"},l={key:3,class:"ml-1 hover:bg-gray-100 rounded-full"},u={key:4,class:"ml-1 hover:bg-gray-100 rounded-full"};var s=r(610);const f=LaravelNovaUi;function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(){h=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:C(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function x(){}var k={};u(k,a,(function(){return this}));var E=Object.getPrototypeOf,N=E&&E(E(P([])));N&&N!==r&&n.call(N,a)&&(k=N);var _=x.prototype=b.prototype=Object.create(k);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==p(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function C(t,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=j(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?m:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(p(t)+" is not iterable")}return w.prototype=x,o(_,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},L(O.prototype),u(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(_),u(_,l,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function d(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const v=function(e,t,r,n){return(o=h().mark((function o(){return h().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Nova.request().post("/live-update/update/".concat(e),{id:t,attribute:r,value:n}));case 1:case"end":return o.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var i=o.apply(e,t);function a(e){d(i,r,n,a,c,"next",e)}function c(e){d(i,r,n,a,c,"throw",e)}a(void 0)}))})();var o};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(){m=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:C(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",g={};function b(){}function w(){}function x(){}var k={};u(k,a,(function(){return this}));var E=Object.getPrototypeOf,N=E&&E(E(P([])));N&&N!==r&&n.call(N,a)&&(k=N);var _=x.prototype=b.prototype=Object.create(k);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==y(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function C(t,r,n){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=j(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?v:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(y(t)+" is not iterable")}return w.prototype=x,o(_,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},L(O.prototype),u(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(_),u(_,l,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function g(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const b={components:{Icon:f.Icon,Loader:f.Loader,Tooltip:f.Tooltip},data:function(){return{loading:!1,copied:!1,copied_to:!1,copyabel_action_run:!1}},mixins:[s.FormField,s.CopiesToClipboard],props:["resourceName","resourceId","field"],mounted:function(){if(this.field.listen){var e=this;Nova.$on("".concat(this.field.listen,"-").concat(this.field.listen_event),(function(t){var r=new FormData;r.append("value",t),r.append("attribute",e.field.attribute),Nova.request().post("/live-update/listen/".concat(e.resourceName,"/").concat(e.resourceId),r).then((function(t){e.value=t.data.value,e.save()}))}))}},methods:{copy:function(){var e=this;this.copied=!0,this.copyValueToClipboard(this.field.value),setTimeout((function(){e.copied=!1}),1e3)},copyTo:function(){var e=this;this.copied_to=!0;var t="live-input-"+this.field.copyableToFieldName,r=document.getElementById(t);r.value=this.field.value,r.dispatchEvent(new Event("input",{bubbles:!0})),setTimeout((function(){r.focus(),r.blur(),e.copied_to=!1}),1e3)},runCopyableAction:function(){var e=this;this.copyabel_action_run=!0;var t=this.field.copyableActionFieldName+this.field.id,r=document.getElementById(t),n=new FormData;n.append("action_class",this.field.copyableAction);var o=this.field.id;return Nova.request().post("/live-update/run-action/".concat(this.resourceName,"/").concat(o),n).then((function(t){r.blur(),r.value=t.data.value,r.dispatchEvent(new Event("input",{bubbles:!0})),setTimeout((function(){e.copyabel_action_run=!1}),1e3)}),(function(t){Nova.error(t),e.copyabel_action_run=!1})).finally((function(){e.copyabel_action_run=!1}))},updateTranslation:function(){var e,t=this;return(e=m().mark((function e(){var r,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.prev=1,e.next=4,v(r.resourceName,r.field.id,r.field.attribute,r.value);case 4:Nova.success("Successfully updated!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),422==e.t0.response.status&&(n=[],e.t0.response.data.errors.value.forEach((function(e){n.push(e.replace("value",r.field.name))})),Nova.error(n.join("<br>")));case 10:t.loading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){g(i,n,o,a,c,"next",e)}function c(e){g(i,n,o,a,c,"throw",e)}a(void 0)}))})()},saveOnChange:function(){this.field.saveOnChange&&this.save()},save:function(){this.value!=this.field.value&&(this.loading||(this.loading=!0,this.updateTranslation()))}}};const w=(0,r(262).A)(b,[["render",function(e,t,r,s,f,p){var h,d=(0,n.resolveComponent)("Icon"),v=(0,n.resolveComponent)("TooltipContent"),y=(0,n.resolveComponent)("Tooltip"),m=(0,n.resolveComponent)("Loader");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[r.field.asPlaceholder?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,(0,n.toDisplayString)(r.field.value),1)):(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("input",{key:1,id:"live-input-"+r.field.attribute,type:null!==(h=r.field.type)&&void 0!==h?h:"text",class:"w-full form-control form-input form-control-bordered",placeholder:r.field.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),onBlur:t[1]||(t[1]=function(){return p.save&&p.save.apply(p,arguments)}),onChange:t[2]||(t[2]=function(){return p.saveOnChange&&p.saveOnChange.apply(p,arguments)}),onKeyup:t[3]||(t[3]=(0,n.withKeys)((function(){return p.save&&p.save.apply(p,arguments)}),["enter"])),style:"min-width:250px;"},null,40,a)),[[n.vModelDynamic,e.value]]),r.field.copyable?((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createVNode)(y,{triggers:["hover"]},{content:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{"max-width":e.width},{default:(0,n.withCtx)((function(){return t[4]||(t[4]=[(0,n.createTextVNode)(" Copy to clipboard ")])})),_:1},8,["max-width"])]})),default:(0,n.withCtx)((function(){return[e.copied?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,width:"14",onClick:p.copy,solid:!1,name:"clipboard",class:"cursor-pointer text-gray-400 dark:text-gray-500"},null,8,["onClick"])),e.copied?((0,n.openBlock)(),(0,n.createBlock)(d,{key:1,class:"text-green-500",solid:!0,name:"check-circle",width:"14"})):(0,n.createCommentVNode)("",!0)]})),_:1})])):(0,n.createCommentVNode)("",!0),r.field.copyableTo?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createVNode)(y,{triggers:["hover"]},{content:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{"max-width":e.width},{default:(0,n.withCtx)((function(){var e;return[(0,n.createTextVNode)((0,n.toDisplayString)(null!==(e=r.field.copyableToTooltip)&&void 0!==e?e:"Copy to"+r.field.copyableToFieldName),1)]})),_:1},8,["max-width"])]})),default:(0,n.withCtx)((function(){return[e.copied_to?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,width:"14",onClick:p.copyTo,solid:!1,name:"duplicate",class:"cursor-pointer text-gray-400 dark:text-gray-500"},null,8,["onClick"])),e.copied_to?((0,n.openBlock)(),(0,n.createBlock)(d,{key:1,class:"text-green-500",solid:!0,name:"check-circle",width:"14"})):(0,n.createCommentVNode)("",!0)]})),_:1})])):(0,n.createCommentVNode)("",!0),r.field.copyableAction?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,[(0,n.createVNode)(y,{triggers:["hover"]},{content:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{"max-width":e.width},{default:(0,n.withCtx)((function(){var e;return[(0,n.createTextVNode)((0,n.toDisplayString)(null!==(e=r.field.copyableActionTooltip)&&void 0!==e?e:"Run"+r.field.copyableAction),1)]})),_:1},8,["max-width"])]})),default:(0,n.withCtx)((function(){return[e.copyabel_action_run?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,width:"14",onClick:p.runCopyableAction,solid:!1,name:r.field.copyableActionIcon,class:"cursor-pointer text-gray-400 dark:text-gray-500"},null,8,["onClick","name"])),e.copyabel_action_run?((0,n.openBlock)(),(0,n.createBlock)(d,{key:1,class:"text-green-500",solid:!0,name:"check-circle",width:"14"})):(0,n.createCommentVNode)("",!0)]})),_:1})])):(0,n.createCommentVNode)("",!0),(0,n.withDirectives)((0,n.createVNode)(m,{class:"absolute right-0 mr-2",width:"20"},null,512),[[n.vShow,e.loading]])])}]])},592:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(61);const o={props:["index","resource","resourceName","resourceId","field"]};const i=(0,r(262).A)(o,[["render",function(e,t,r,o,i,a){var c=(0,n.resolveComponent)("live-update-field"),l=(0,n.resolveComponent)("PanelItem");return(0,n.openBlock)(),(0,n.createBlock)(l,{index:r.index,field:r.field},{value:(0,n.withCtx)((function(){return[(0,n.createVNode)(c,{resourceName:r.resourceName,resourceId:r.resourceId,field:r.field},null,8,["resourceName","resourceId","field"])]})),_:1},8,["index","field"])}]])},610:e=>{"use strict";e.exports=LaravelNova},835:()=>{},882:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});const n={extends:r(592).A}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={222:0,101:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkmarshmallow_live_update=self.webpackChunkmarshmallow_live_update||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[101],(()=>n(252)));var o=n.O(void 0,[101],(()=>n(835)));o=n.O(o)})();