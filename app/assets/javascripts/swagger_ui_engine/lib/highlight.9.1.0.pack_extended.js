"use strict";
!(function () {
  var h, l;
  (h = hljs.configure),
    (hljs.configure = function (l) {
      var i = l.highlightSizeThreshold;
      (hljs.highlightSizeThreshold = i === +i ? i : null), h.call(this, l);
    }),
    (l = hljs.highlightBlock),
    (hljs.highlightBlock = function (h) {
      var i = h.innerHTML,
        g = hljs.highlightSizeThreshold;
      (null == g || g > i.length) && l.call(hljs, h);
    });
})();
