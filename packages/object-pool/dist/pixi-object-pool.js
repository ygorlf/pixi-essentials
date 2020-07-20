/*!
 * @pixi-essentials/object-pool - v0.0.2
 * Compiled Mon, 20 Jul 2020 15:24:27 UTC
 *
 * @pixi-essentials/object-pool is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_object_pool=function(t,e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var i=function(){function t(t,e){this._history=new Array(t),this._decayRatio=e,this._currentIndex=0;for(var r=0;r<t;r++)this._history[r]=0}return t.prototype.next=function(t){var e=this._history,r=this._decayRatio,i=e.length;this._currentIndex=this._currentIndex<i-1?this._currentIndex+1:0,e[this._currentIndex]=t;for(var o=0,n=0,a=this._currentIndex+1;a<i;a++)o=(o+e[a])*r,n=(n+1)*r;for(a=0;a<=this._currentIndex;a++)o=(o+e[a])*r,n=(n+1)*r;return this._average=o/n,this._average},t.prototype.absDev=function(){for(var t=0,e=0,r=this._history.length;e<r;e++)t+=Math.abs(this._history[e]-this._average);return t/this._history.length},t}(),o=function(){function t(t){var e=this;void 0===t&&(t={}),this._gcTick=function(){e._borrowRateAverage=e._borrowRateAverageProvider.next(e._borrowRate),e._marginAverage=e._marginAverageProvider.next(e._freeCount-e._borrowRate);var t=e._borrowRateAverageProvider.absDev();e._flowRate=0,e._borrowRate=0,e._returnRate=0;var r=e._freeCount,i=e._freeList.length;if(!(r<128&&e._borrowRateAverage<128&&i<128)){var o=Math.max(e._borrowRateAverage*(e._capacityRatio-1),e._reserveCount);if(e._freeCount>o+t){var n=o+t;e.capacity=Math.min(e._freeList.length,Math.ceil(n)),e._freeCount=e._freeList.length}}},this._freeList=[],this._freeCount=0,this._borrowRate=0,this._returnRate=0,this._flowRate=0,this._borrowRateAverage=0,this._reserveCount=t.reserve||0,this._capacityRatio=t.capacityRatio||1.2,this._decayRatio=t.decayRatio||.67,this._marginAverage=0,this._borrowRateAverageProvider=new i(128,this._decayRatio),this._marginAverageProvider=new i(128,this._decayRatio)}return Object.defineProperty(t.prototype,"capacity",{get:function(){return this._freeList.length},set:function(t){this._freeList.length=Math.ceil(t)},enumerable:!1,configurable:!0}),t.prototype.allocate=function(){return++this._borrowRate,++this._flowRate,this._freeCount>0?this._freeList[--this._freeCount]:this.create()},t.prototype.allocateArray=function(t){var e,r;Array.isArray(t)?(e=t,r=t.length):(r=t,e=new Array(r)),this._borrowRate+=r,this._flowRate+=r;var i=0;if(this._freeCount>0){for(var o=this._freeList,n=Math.min(this._freeCount,r),a=this._freeCount,s=0;s<n;s++)e[i]=o[a-1],++i,--a;this._freeCount=a}for(;i<r;)e[i]=this.create(),++i;return e},t.prototype.release=function(t){++this._returnRate,--this._flowRate,this._freeCount===this.capacity&&(this.capacity*=this._capacityRatio),this._freeList[this._freeCount]=t,++this._freeCount},t.prototype.releaseArray=function(t){this._returnRate+=t.length,this._flowRate-=t.length,this._freeCount+t.length>this.capacity&&(this.capacity=Math.max(this.capacity*this._capacityRatio,this._freeCount+t.length));for(var e=0,r=t.length;e<r;e++)this._freeList[this._freeCount]=t[e],++this._freeCount},t.prototype.reserve=function(t){if(this._reserveCount=t,this._freeCount<t)for(var e=this._freeCount-t,r=0;r<e;r++)this._freeList[this._freeCount]=this.create(),++this._freeCount},t.prototype.limit=function(t){if(this._freeCount>t){this.capacity>t*this._capacityRatio&&(this.capacity=t*this._capacityRatio);for(var e=Math.min(this._freeCount,this.capacity),r=t;r<e;r++)this._freeList[r]=null}},t.prototype.startGC=function(t){void 0===t&&(t=e.Ticker.shared),t.add(this._gcTick,null,e.UPDATE_PRIORITY.UTILITY)},t.prototype.stopGC=function(t){void 0===t&&(t=e.Ticker.shared),t.remove(this._gcTick)},t}(),n=new Map,a=function(){function t(){}return t.build=function(t){var e=n.get(t);return e||(e=new(function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(i,e),i.prototype.create=function(){return new t},i}(o)),n.set(t,e),e)},t}();return t.ObjectPool=o,t.ObjectPoolFactory=a,t}({},PIXI);Object.assign(this.PIXI,_pixi_essentials_object_pool);
//# sourceMappingURL=pixi-object-pool.js.map
