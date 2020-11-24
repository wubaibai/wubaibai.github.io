/*! For license information please see npm.react-redux.34184c831687099eceb7.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/5/1":function(e,t,n){e.exports=n("oDsG")()},"/MKj":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return x}));var r=n("q1tI"),o=n.n(r),u=(n("/5/1"),o.a.createContext(null));var c=function(e){e()},i={notify:function(){}};function s(){var e=c,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var a=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=i,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=s())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=i)},e}();var f=function(e){var t=e.store,n=e.context,c=e.children,i=Object(r.useMemo)((function(){var e=new a(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),s=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=i.subscription;return e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,s]);var f=n||u;return o.a.createElement(f.Provider,{value:i},c)},l=(n("wx14"),n("zLVn"),n("2mql"),n("0vxD"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect);n("ANjH");function b(){return Object(r.useContext)(u)}function p(e){void 0===e&&(e=u);var t=e===u?b:function(){return Object(r.useContext)(e)};return function(){return t().store}}var y=p();function d(e){void 0===e&&(e=u);var t=e===u?y:p(e);return function(){return t().dispatch}}var h=d(),m=function(e,t){return e===t};function v(e){void 0===e&&(e=u);var t=e===u?b:function(){return Object(r.useContext)(e)};return function(e,n){void 0===n&&(n=m);var o=t();return function(e,t,n,o){var u,c=Object(r.useReducer)((function(e){return e+1}),0)[1],i=Object(r.useMemo)((function(){return new a(n,o)}),[n,o]),s=Object(r.useRef)(),f=Object(r.useRef)(),b=Object(r.useRef)();try{u=e!==f.current||s.current?e(n.getState()):b.current}catch(e){throw s.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),e}return l((function(){f.current=e,b.current=u,s.current=void 0})),l((function(){function e(){try{var e=f.current(n.getState());if(t(e,b.current))return;b.current=e}catch(e){s.current=e}c({})}return i.onStateChange=e,i.trySubscribe(),e(),function(){return i.tryUnsubscribe()}}),[n,i]),u}(e,n,o.store,o.subscription)}}var S,x=v(),C=n("i8i4");S=C.unstable_batchedUpdates,c=S},"0vxD":function(e,t,n){"use strict";e.exports=n("DUzY")},DUzY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,b=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function C(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case b:case c:case s:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case p:case m:case h:case a:return e;default:return t}}case u:return t}}}function g(e){return C(e)===b}t.typeOf=C,t.AsyncMode=l,t.ConcurrentMode=b,t.ContextConsumer=f,t.ContextProvider=a,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=m,t.Memo=h,t.Portal=u,t.Profiler=s,t.StrictMode=i,t.Suspense=y,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===b||e===s||e===i||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===a||e.$$typeof===f||e.$$typeof===p||e.$$typeof===v||e.$$typeof===S||e.$$typeof===x)},t.isAsyncMode=function(e){return g(e)||C(e)===l},t.isConcurrentMode=g,t.isContextConsumer=function(e){return C(e)===f},t.isContextProvider=function(e){return C(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return C(e)===p},t.isFragment=function(e){return C(e)===c},t.isLazy=function(e){return C(e)===m},t.isMemo=function(e){return C(e)===h},t.isPortal=function(e){return C(e)===u},t.isProfiler=function(e){return C(e)===s},t.isStrictMode=function(e){return C(e)===i},t.isSuspense=function(e){return C(e)===y}},dehO:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},oDsG:function(e,t,n){"use strict";var r=n("dehO");function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}}}]);
//# sourceMappingURL=npm.react-redux.34184c831687099eceb7.chunk.js.map