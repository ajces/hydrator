!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.Hydrator=n()}(this,function(){"use strict";function e(n){return n?{tag:n.tagName.toLowerCase(),data:{},children:[].map.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}:n}return function(){return{events:{load:function(n,t,o){return e(o)}}}}});
//# sourceMappingURL=hydrator.js.map