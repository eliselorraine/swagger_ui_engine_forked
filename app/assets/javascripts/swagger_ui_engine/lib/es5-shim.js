!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (t.returnExports = e());
})(this, function () {
  var t,
    e,
    r = Array,
    n = r.prototype,
    o = Object,
    i = o.prototype,
    a = Function,
    u = a.prototype,
    f = String,
    s = f.prototype,
    l = Number,
    c = l.prototype,
    h = n.slice,
    p = n.splice,
    y = n.push,
    d = n.unshift,
    g = n.concat,
    v = n.join,
    b = u.call,
    w = u.apply,
    T = Math.max,
    m = Math.min,
    D = i.toString,
    x = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    S = Function.prototype.toString,
    O = /^\s*class /,
    j = function (t) {
      try {
        var e = S.call(t),
          r = e.replace(/\/\/.*\n/g, ""),
          n = r.replace(/\/\*[.\s\S]*\*\//g, ""),
          o = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");
        return O.test(o);
      } catch (i) {
        return !1;
      }
    },
    E = function (t) {
      try {
        return !j(t) && (S.call(t), !0);
      } catch (e) {
        return !1;
      }
    },
    M = "[object Function]",
    I = "[object GeneratorFunction]",
    t = function (t) {
      if (!t) return !1;
      if ("function" != typeof t && "object" != typeof t) return !1;
      if (x) return E(t);
      if (j(t)) return !1;
      var e = D.call(t);
      return e === M || e === I;
    },
    U = RegExp.prototype.exec,
    F = function (t) {
      try {
        return U.call(t), !0;
      } catch (e) {
        return !1;
      }
    },
    N = "[object RegExp]";
  e = function (t) {
    return "object" == typeof t && (x ? F(t) : D.call(t) === N);
  };
  var k,
    C = String.prototype.valueOf,
    R = function (t) {
      try {
        return C.call(t), !0;
      } catch (e) {
        return !1;
      }
    },
    A = "[object String]";
  k = function (t) {
    return (
      "string" == typeof t ||
      ("object" == typeof t && (x ? R(t) : D.call(t) === A))
    );
  };
  var $ =
      o.defineProperty &&
      (function () {
        try {
          var t = {};
          o.defineProperty(t, "x", { enumerable: !1, value: t });
          for (var e in t) return !1;
          return t.x === t;
        } catch (r) {
          return !1;
        }
      })(),
    P = (function (t) {
      var e;
      return (
        (e = $
          ? function (t, e, r, n) {
              (!n && e in t) ||
                o.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: r,
                });
            }
          : function (t, e, r, n) {
              (!n && e in t) || (t[e] = r);
            }),
        function (r, n, o) {
          for (var i in n) t.call(n, i) && e(r, i, n[i], o);
        }
      );
    })(i.hasOwnProperty),
    J = function (t) {
      var e = typeof t;
      return null === t || ("object" !== e && "function" !== e);
    },
    Z =
      l.isNaN ||
      function (t) {
        return t !== t;
      },
    z = {
      ToInteger: function (t) {
        var e = +t;
        return (
          Z(e)
            ? (e = 0)
            : 0 !== e &&
              e !== 1 / 0 &&
              e !== -(1 / 0) &&
              (e = (e > 0 || -1) * Math.floor(Math.abs(e))),
          e
        );
      },
      ToPrimitive: function (e) {
        var r, n, o;
        if (J(e)) return e;
        if (((n = e.valueOf), t(n) && ((r = n.call(e)), J(r)))) return r;
        if (((o = e.toString), t(o) && ((r = o.call(e)), J(r)))) return r;
        throw new TypeError();
      },
      ToObject: function (t) {
        if (null == t) throw new TypeError("can't convert " + t + " to object");
        return o(t);
      },
      ToUint32: function (t) {
        return t >>> 0;
      },
    },
    G = function () {};
  P(u, {
    bind: function (e) {
      var r = this;
      if (!t(r))
        throw new TypeError(
          "Function.prototype.bind called on incompatible " + r
        );
      for (
        var n,
          i = h.call(arguments, 1),
          u = function () {
            if (this instanceof n) {
              var t = w.call(r, this, g.call(i, h.call(arguments)));
              return o(t) === t ? t : this;
            }
            return w.call(r, e, g.call(i, h.call(arguments)));
          },
          f = T(0, r.length - i.length),
          s = [],
          l = 0;
        l < f;
        l++
      )
        y.call(s, "$" + l);
      return (
        (n = a(
          "binder",
          "return function (" +
            v.call(s, ",") +
            "){ return binder.apply(this, arguments); }"
        )(u)),
        r.prototype &&
          ((G.prototype = r.prototype),
          (n.prototype = new G()),
          (G.prototype = null)),
        n
      );
    },
  });
  var Y = b.bind(i.hasOwnProperty),
    B = b.bind(i.toString),
    H = b.bind(h),
    W = w.bind(h),
    L = b.bind(s.slice),
    X = b.bind(s.split),
    q = b.bind(s.indexOf),
    K = b.bind(y),
    Q = b.bind(i.propertyIsEnumerable),
    V = b.bind(n.sort),
    _ =
      r.isArray ||
      function (t) {
        return "[object Array]" === B(t);
      },
    tt = 1 !== [].unshift(0);
  P(
    n,
    {
      unshift: function () {
        return d.apply(this, arguments), this.length;
      },
    },
    tt
  ),
    P(r, { isArray: _ });
  var et = o("a"),
    rt = "a" !== et[0] || !(0 in et),
    nt = function (t) {
      var e = !0,
        r = !0,
        n = !1;
      if (t)
        try {
          t.call("foo", function (t, r, n) {
            "object" != typeof n && (e = !1);
          }),
            t.call(
              [1],
              function () {
                "use strict";
                r = "string" == typeof this;
              },
              "x"
            );
        } catch (o) {
          n = !0;
        }
      return !!t && !n && e && r;
    };
  P(
    n,
    {
      forEach: function (e) {
        var r,
          n = z.ToObject(this),
          o = rt && k(this) ? X(this, "") : n,
          i = -1,
          a = z.ToUint32(o.length);
        if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
          throw new TypeError(
            "Array.prototype.forEach callback must be a function"
          );
        for (; ++i < a; )
          i in o &&
            ("undefined" == typeof r ? e(o[i], i, n) : e.call(r, o[i], i, n));
      },
    },
    !nt(n.forEach)
  ),
    P(
      n,
      {
        map: function (e) {
          var n,
            o = z.ToObject(this),
            i = rt && k(this) ? X(this, "") : o,
            a = z.ToUint32(i.length),
            u = r(a);
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.map callback must be a function"
            );
          for (var f = 0; f < a; f++)
            f in i &&
              ("undefined" == typeof n
                ? (u[f] = e(i[f], f, o))
                : (u[f] = e.call(n, i[f], f, o)));
          return u;
        },
      },
      !nt(n.map)
    ),
    P(
      n,
      {
        filter: function (e) {
          var r,
            n,
            o = z.ToObject(this),
            i = rt && k(this) ? X(this, "") : o,
            a = z.ToUint32(i.length),
            u = [];
          if ((arguments.length > 1 && (n = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.filter callback must be a function"
            );
          for (var f = 0; f < a; f++)
            f in i &&
              ((r = i[f]),
              ("undefined" == typeof n ? e(r, f, o) : e.call(n, r, f, o)) &&
                K(u, r));
          return u;
        },
      },
      !nt(n.filter)
    ),
    P(
      n,
      {
        every: function (e) {
          var r,
            n = z.ToObject(this),
            o = rt && k(this) ? X(this, "") : n,
            i = z.ToUint32(o.length);
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.every callback must be a function"
            );
          for (var a = 0; a < i; a++)
            if (
              a in o &&
              !("undefined" == typeof r ? e(o[a], a, n) : e.call(r, o[a], a, n))
            )
              return !1;
          return !0;
        },
      },
      !nt(n.every)
    ),
    P(
      n,
      {
        some: function (e) {
          var r,
            n = z.ToObject(this),
            o = rt && k(this) ? X(this, "") : n,
            i = z.ToUint32(o.length);
          if ((arguments.length > 1 && (r = arguments[1]), !t(e)))
            throw new TypeError(
              "Array.prototype.some callback must be a function"
            );
          for (var a = 0; a < i; a++)
            if (
              a in o &&
              ("undefined" == typeof r ? e(o[a], a, n) : e.call(r, o[a], a, n))
            )
              return !0;
          return !1;
        },
      },
      !nt(n.some)
    );
  var ot = !1;
  n.reduce &&
    (ot =
      "object" ==
      typeof n.reduce.call("es5", function (t, e, r, n) {
        return n;
      })),
    P(
      n,
      {
        reduce: function (e) {
          var r = z.ToObject(this),
            n = rt && k(this) ? X(this, "") : r,
            o = z.ToUint32(n.length);
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduce callback must be a function"
            );
          if (0 === o && 1 === arguments.length)
            throw new TypeError("reduce of empty array with no initial value");
          var i,
            a = 0;
          if (arguments.length >= 2) i = arguments[1];
          else
            for (;;) {
              if (a in n) {
                i = n[a++];
                break;
              }
              if (++a >= o)
                throw new TypeError(
                  "reduce of empty array with no initial value"
                );
            }
          for (; a < o; a++) a in n && (i = e(i, n[a], a, r));
          return i;
        },
      },
      !ot
    );
  var it = !1;
  n.reduceRight &&
    (it =
      "object" ==
      typeof n.reduceRight.call("es5", function (t, e, r, n) {
        return n;
      })),
    P(
      n,
      {
        reduceRight: function (e) {
          var r = z.ToObject(this),
            n = rt && k(this) ? X(this, "") : r,
            o = z.ToUint32(n.length);
          if (!t(e))
            throw new TypeError(
              "Array.prototype.reduceRight callback must be a function"
            );
          if (0 === o && 1 === arguments.length)
            throw new TypeError(
              "reduceRight of empty array with no initial value"
            );
          var i,
            a = o - 1;
          if (arguments.length >= 2) i = arguments[1];
          else
            for (;;) {
              if (a in n) {
                i = n[a--];
                break;
              }
              if (--a < 0)
                throw new TypeError(
                  "reduceRight of empty array with no initial value"
                );
            }
          if (a < 0) return i;
          do a in n && (i = e(i, n[a], a, r));
          while (a--);
          return i;
        },
      },
      !it
    );
  var at = n.indexOf && [0, 1].indexOf(1, 2) !== -1;
  P(
    n,
    {
      indexOf: function (t) {
        var e = rt && k(this) ? X(this, "") : z.ToObject(this),
          r = z.ToUint32(e.length);
        if (0 === r) return -1;
        var n = 0;
        for (
          arguments.length > 1 && (n = z.ToInteger(arguments[1])),
            n = n >= 0 ? n : T(0, r + n);
          n < r;
          n++
        )
          if (n in e && e[n] === t) return n;
        return -1;
      },
    },
    at
  );
  var ut = n.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
  P(
    n,
    {
      lastIndexOf: function (t) {
        var e = rt && k(this) ? X(this, "") : z.ToObject(this),
          r = z.ToUint32(e.length);
        if (0 === r) return -1;
        var n = r - 1;
        for (
          arguments.length > 1 && (n = m(n, z.ToInteger(arguments[1]))),
            n = n >= 0 ? n : r - Math.abs(n);
          n >= 0;
          n--
        )
          if (n in e && t === e[n]) return n;
        return -1;
      },
    },
    ut
  );
  var ft = (function () {
    var t = [1, 2],
      e = t.splice();
    return 2 === t.length && _(e) && 0 === e.length;
  })();
  P(
    n,
    {
      splice: function (t, e) {
        return 0 === arguments.length ? [] : p.apply(this, arguments);
      },
    },
    !ft
  );
  var st = (function () {
    var t = {};
    return n.splice.call(t, 0, 0, 1), 1 === t.length;
  })();
  P(
    n,
    {
      splice: function (t, e) {
        if (0 === arguments.length) return [];
        var r = arguments;
        return (
          (this.length = T(z.ToInteger(this.length), 0)),
          arguments.length > 0 &&
            "number" != typeof e &&
            ((r = H(arguments)),
            r.length < 2 ? K(r, this.length - t) : (r[1] = z.ToInteger(e))),
          p.apply(this, r)
        );
      },
    },
    !st
  );
  var lt = (function () {
      var t = new r(1e5);
      return (t[8] = "x"), t.splice(1, 1), 7 === t.indexOf("x");
    })(),
    ct = (function () {
      var t = 256,
        e = [];
      return (e[t] = "a"), e.splice(t + 1, 0, "b"), "a" === e[t];
    })();
  P(
    n,
    {
      splice: function (t, e) {
        for (
          var r,
            n = z.ToObject(this),
            o = [],
            i = z.ToUint32(n.length),
            a = z.ToInteger(t),
            u = a < 0 ? T(i + a, 0) : m(a, i),
            s = m(T(z.ToInteger(e), 0), i - u),
            l = 0;
          l < s;

        )
          (r = f(u + l)), Y(n, r) && (o[l] = n[r]), (l += 1);
        var c,
          h = H(arguments, 2),
          p = h.length;
        if (p < s) {
          l = u;
          for (var y = i - s; l < y; )
            (r = f(l + s)),
              (c = f(l + p)),
              Y(n, r) ? (n[c] = n[r]) : delete n[c],
              (l += 1);
          l = i;
          for (var d = i - s + p; l > d; ) delete n[l - 1], (l -= 1);
        } else if (p > s)
          for (l = i - s; l > u; )
            (r = f(l + s - 1)),
              (c = f(l + p - 1)),
              Y(n, r) ? (n[c] = n[r]) : delete n[c],
              (l -= 1);
        l = u;
        for (var g = 0; g < h.length; ++g) (n[l] = h[g]), (l += 1);
        return (n.length = i - s + p), o;
      },
    },
    !lt || !ct
  );
  var ht,
    pt = n.join;
  try {
    ht = "1,2,3" !== Array.prototype.join.call("123", ",");
  } catch (yt) {
    ht = !0;
  }
  ht &&
    P(
      n,
      {
        join: function (t) {
          var e = "undefined" == typeof t ? "," : t;
          return pt.call(k(this) ? X(this, "") : this, e);
        },
      },
      ht
    );
  var dt = "1,2" !== [1, 2].join(void 0);
  dt &&
    P(
      n,
      {
        join: function (t) {
          var e = "undefined" == typeof t ? "," : t;
          return pt.call(this, e);
        },
      },
      dt
    );
  var gt = function (t) {
      for (
        var e = z.ToObject(this), r = z.ToUint32(e.length), n = 0;
        n < arguments.length;

      )
        (e[r + n] = arguments[n]), (n += 1);
      return (e.length = r + n), r + n;
    },
    vt = (function () {
      var t = {},
        e = Array.prototype.push.call(t, void 0);
      return (
        1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !Y(t, 0)
      );
    })();
  P(
    n,
    {
      push: function (t) {
        return _(this) ? y.apply(this, arguments) : gt.apply(this, arguments);
      },
    },
    vt
  );
  var bt = (function () {
    var t = [],
      e = t.push(void 0);
    return 1 !== e || 1 !== t.length || "undefined" != typeof t[0] || !Y(t, 0);
  })();
  P(n, { push: gt }, bt),
    P(
      n,
      {
        slice: function (t, e) {
          var r = k(this) ? X(this, "") : this;
          return W(r, arguments);
        },
      },
      rt
    );
  var wt = (function () {
      try {
        return [1, 2].sort(null), [1, 2].sort({}), !0;
      } catch (t) {}
      return !1;
    })(),
    Tt = (function () {
      try {
        return [1, 2].sort(/a/), !1;
      } catch (t) {}
      return !0;
    })(),
    mt = (function () {
      try {
        return [1, 2].sort(void 0), !0;
      } catch (t) {}
      return !1;
    })();
  P(
    n,
    {
      sort: function (e) {
        if ("undefined" == typeof e) return V(this);
        if (!t(e))
          throw new TypeError(
            "Array.prototype.sort callback must be a function"
          );
        return V(this, e);
      },
    },
    wt || !mt || !Tt
  );
  var Dt = !Q({ toString: null }, "toString"),
    xt = Q(function () {}, "prototype"),
    St = !Y("x", "0"),
    Ot = function (t) {
      var e = t.constructor;
      return e && e.prototype === t;
    },
    jt = {
      $window: !0,
      $console: !0,
      $parent: !0,
      $self: !0,
      $frame: !0,
      $frames: !0,
      $frameElement: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $external: !0,
    },
    Et = (function () {
      if ("undefined" == typeof window) return !1;
      for (var t in window)
        try {
          !jt["$" + t] &&
            Y(window, t) &&
            null !== window[t] &&
            "object" == typeof window[t] &&
            Ot(window[t]);
        } catch (e) {
          return !0;
        }
      return !1;
    })(),
    Mt = function (t) {
      if ("undefined" == typeof window || !Et) return Ot(t);
      try {
        return Ot(t);
      } catch (e) {
        return !1;
      }
    },
    It = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ],
    Ut = It.length,
    Ft = function (t) {
      return "[object Arguments]" === B(t);
    },
    Nt = function (e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "number" == typeof e.length &&
        e.length >= 0 &&
        !_(e) &&
        t(e.callee)
      );
    },
    kt = Ft(arguments) ? Ft : Nt;
  P(o, {
    keys: function (e) {
      var r = t(e),
        n = kt(e),
        o = null !== e && "object" == typeof e,
        i = o && k(e);
      if (!o && !r && !n)
        throw new TypeError("Object.keys called on a non-object");
      var a = [],
        u = xt && r;
      if ((i && St) || n) for (var s = 0; s < e.length; ++s) K(a, f(s));
      if (!n)
        for (var l in e) (u && "prototype" === l) || !Y(e, l) || K(a, f(l));
      if (Dt)
        for (var c = Mt(e), h = 0; h < Ut; h++) {
          var p = It[h];
          (c && "constructor" === p) || !Y(e, p) || K(a, p);
        }
      return a;
    },
  });
  var Ct =
      o.keys &&
      (function () {
        return 2 === o.keys(arguments).length;
      })(1, 2),
    Rt =
      o.keys &&
      (function () {
        var t = o.keys(arguments);
        return 1 !== arguments.length || 1 !== t.length || 1 !== t[0];
      })(1),
    At = o.keys;
  P(
    o,
    {
      keys: function (t) {
        return At(kt(t) ? H(t) : t);
      },
    },
    !Ct || Rt
  );
  var $t,
    Pt,
    Jt = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
    Zt = new Date(-0x55d318d56a724),
    zt = new Date(14496624e5),
    Gt = "Mon, 01 Jan -45875 11:59:59 GMT" !== Zt.toUTCString(),
    Yt = Zt.getTimezoneOffset();
  Yt < -720
    ? (($t = "Tue Jan 02 -45875" !== Zt.toDateString()),
      (Pt = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(
        zt.toString()
      )))
    : (($t = "Mon Jan 01 -45875" !== Zt.toDateString()),
      (Pt = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(
        zt.toString()
      )));
  var Bt = b.bind(Date.prototype.getFullYear),
    Ht = b.bind(Date.prototype.getMonth),
    Wt = b.bind(Date.prototype.getDate),
    Lt = b.bind(Date.prototype.getUTCFullYear),
    Xt = b.bind(Date.prototype.getUTCMonth),
    qt = b.bind(Date.prototype.getUTCDate),
    Kt = b.bind(Date.prototype.getUTCDay),
    Qt = b.bind(Date.prototype.getUTCHours),
    Vt = b.bind(Date.prototype.getUTCMinutes),
    _t = b.bind(Date.prototype.getUTCSeconds),
    te = b.bind(Date.prototype.getUTCMilliseconds),
    ee = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    re = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    ne = function (t, e) {
      return Wt(new Date(e, t, 0));
    };
  P(
    Date.prototype,
    {
      getFullYear: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Bt(this);
        return t < 0 && Ht(this) > 11 ? t + 1 : t;
      },
      getMonth: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Bt(this),
          e = Ht(this);
        return t < 0 && e > 11 ? 0 : e;
      },
      getDate: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Bt(this),
          e = Ht(this),
          r = Wt(this);
        if (t < 0 && e > 11) {
          if (12 === e) return r;
          var n = ne(0, t + 1);
          return n - r + 1;
        }
        return r;
      },
      getUTCFullYear: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Lt(this);
        return t < 0 && Xt(this) > 11 ? t + 1 : t;
      },
      getUTCMonth: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Lt(this),
          e = Xt(this);
        return t < 0 && e > 11 ? 0 : e;
      },
      getUTCDate: function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = Lt(this),
          e = Xt(this),
          r = qt(this);
        if (t < 0 && e > 11) {
          if (12 === e) return r;
          var n = ne(0, t + 1);
          return n - r + 1;
        }
        return r;
      },
    },
    Jt
  ),
    P(
      Date.prototype,
      {
        toUTCString: function () {
          if (!(this && this instanceof Date))
            throw new TypeError("this is not a Date object.");
          var t = Kt(this),
            e = qt(this),
            r = Xt(this),
            n = Lt(this),
            o = Qt(this),
            i = Vt(this),
            a = _t(this);
          return (
            ee[t] +
            ", " +
            (e < 10 ? "0" + e : e) +
            " " +
            re[r] +
            " " +
            n +
            " " +
            (o < 10 ? "0" + o : o) +
            ":" +
            (i < 10 ? "0" + i : i) +
            ":" +
            (a < 10 ? "0" + a : a) +
            " GMT"
          );
        },
      },
      Jt || Gt
    ),
    P(
      Date.prototype,
      {
        toDateString: function () {
          if (!(this && this instanceof Date))
            throw new TypeError("this is not a Date object.");
          var t = this.getDay(),
            e = this.getDate(),
            r = this.getMonth(),
            n = this.getFullYear();
          return ee[t] + " " + re[r] + " " + (e < 10 ? "0" + e : e) + " " + n;
        },
      },
      Jt || $t
    ),
    (Jt || Pt) &&
      ((Date.prototype.toString = function () {
        if (!(this && this instanceof Date))
          throw new TypeError("this is not a Date object.");
        var t = this.getDay(),
          e = this.getDate(),
          r = this.getMonth(),
          n = this.getFullYear(),
          o = this.getHours(),
          i = this.getMinutes(),
          a = this.getSeconds(),
          u = this.getTimezoneOffset(),
          f = Math.floor(Math.abs(u) / 60),
          s = Math.floor(Math.abs(u) % 60);
        return (
          ee[t] +
          " " +
          re[r] +
          " " +
          (e < 10 ? "0" + e : e) +
          " " +
          n +
          " " +
          (o < 10 ? "0" + o : o) +
          ":" +
          (i < 10 ? "0" + i : i) +
          ":" +
          (a < 10 ? "0" + a : a) +
          " GMT" +
          (u > 0 ? "-" : "+") +
          (f < 10 ? "0" + f : f) +
          (s < 10 ? "0" + s : s)
        );
      }),
      $ &&
        o.defineProperty(Date.prototype, "toString", {
          configurable: !0,
          enumerable: !1,
          writable: !0,
        }));
  var oe = -621987552e5,
    ie = "-000001",
    ae =
      Date.prototype.toISOString &&
      new Date(oe).toISOString().indexOf(ie) === -1,
    ue =
      Date.prototype.toISOString &&
      "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
    fe = b.bind(Date.prototype.getTime);
  P(
    Date.prototype,
    {
      toISOString: function () {
        if (!isFinite(this) || !isFinite(fe(this)))
          throw new RangeError(
            "Date.prototype.toISOString called on non-finite value."
          );
        var t = Lt(this),
          e = Xt(this);
        (t += Math.floor(e / 12)), (e = ((e % 12) + 12) % 12);
        var r = [e + 1, qt(this), Qt(this), Vt(this), _t(this)];
        t =
          (t < 0 ? "-" : t > 9999 ? "+" : "") +
          L("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
        for (var n = 0; n < r.length; ++n) r[n] = L("00" + r[n], -2);
        return (
          t +
          "-" +
          H(r, 0, 2).join("-") +
          "T" +
          H(r, 2).join(":") +
          "." +
          L("000" + te(this), -3) +
          "Z"
        );
      },
    },
    ae || ue
  );
  var se = (function () {
    try {
      return (
        Date.prototype.toJSON &&
        null === new Date(NaN).toJSON() &&
        new Date(oe).toJSON().indexOf(ie) !== -1 &&
        Date.prototype.toJSON.call({
          toISOString: function () {
            return !0;
          },
        })
      );
    } catch (t) {
      return !1;
    }
  })();
  se ||
    (Date.prototype.toJSON = function (e) {
      var r = o(this),
        n = z.ToPrimitive(r);
      if ("number" == typeof n && !isFinite(n)) return null;
      var i = r.toISOString;
      if (!t(i)) throw new TypeError("toISOString property is not callable");
      return i.call(r);
    });
  var le = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
    ce =
      !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||
      !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) ||
      !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
    he = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
  if (he || ce || !le) {
    var pe = Math.pow(2, 31) - 1,
      ye = Z(new Date(1970, 0, 1, 0, 0, 0, pe + 1).getTime());
    Date = (function (t) {
      var e = function (r, n, o, i, a, u, s) {
          var l,
            c = arguments.length;
          if (this instanceof t) {
            var h = u,
              p = s;
            if (ye && c >= 7 && s > pe) {
              var y = Math.floor(s / pe) * pe,
                d = Math.floor(y / 1e3);
              (h += d), (p -= 1e3 * d);
            }
            l =
              1 === c && f(r) === r
                ? new t(e.parse(r))
                : c >= 7
                ? new t(r, n, o, i, a, h, p)
                : c >= 6
                ? new t(r, n, o, i, a, h)
                : c >= 5
                ? new t(r, n, o, i, a)
                : c >= 4
                ? new t(r, n, o, i)
                : c >= 3
                ? new t(r, n, o)
                : c >= 2
                ? new t(r, n)
                : c >= 1
                ? new t(r instanceof t ? +r : r)
                : new t();
          } else l = t.apply(this, arguments);
          return J(l) || P(l, { constructor: e }, !0), l;
        },
        r = new RegExp(
          "^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"
        ),
        n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
        o = function (t, e) {
          var r = e > 1 ? 1 : 0;
          return (
            n[e] +
            Math.floor((t - 1969 + r) / 4) -
            Math.floor((t - 1901 + r) / 100) +
            Math.floor((t - 1601 + r) / 400) +
            365 * (t - 1970)
          );
        },
        i = function (e) {
          var r = 0,
            n = e;
          if (ye && n > pe) {
            var o = Math.floor(n / pe) * pe,
              i = Math.floor(o / 1e3);
            (r += i), (n -= 1e3 * i);
          }
          return l(new t(1970, 0, 1, 0, 0, r, n));
        };
      for (var a in t) Y(t, a) && (e[a] = t[a]);
      P(e, { now: t.now, UTC: t.UTC }, !0),
        (e.prototype = t.prototype),
        P(e.prototype, { constructor: e }, !0);
      var u = function (e) {
        var n = r.exec(e);
        if (n) {
          var a,
            u = l(n[1]),
            f = l(n[2] || 1) - 1,
            s = l(n[3] || 1) - 1,
            c = l(n[4] || 0),
            h = l(n[5] || 0),
            p = l(n[6] || 0),
            y = Math.floor(1e3 * l(n[7] || 0)),
            d = Boolean(n[4] && !n[8]),
            g = "-" === n[9] ? 1 : -1,
            v = l(n[10] || 0),
            b = l(n[11] || 0),
            w = h > 0 || p > 0 || y > 0;
          return c < (w ? 24 : 25) &&
            h < 60 &&
            p < 60 &&
            y < 1e3 &&
            f > -1 &&
            f < 12 &&
            v < 24 &&
            b < 60 &&
            s > -1 &&
            s < o(u, f + 1) - o(u, f) &&
            ((a = 60 * (24 * (o(u, f) + s) + c + v * g)),
            (a = 1e3 * (60 * (a + h + b * g) + p) + y),
            d && (a = i(a)),
            -864e13 <= a && a <= 864e13)
            ? a
            : NaN;
        }
        return t.parse.apply(this, arguments);
      };
      return P(e, { parse: u }), e;
    })(Date);
  }
  Date.now ||
    (Date.now = function () {
      return new Date().getTime();
    });
  var de =
      c.toFixed &&
      ("0.000" !== (8e-5).toFixed(3) ||
        "1" !== (0.9).toFixed(0) ||
        "1.25" !== (1.255).toFixed(2) ||
        "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
    ge = {
      base: 1e7,
      size: 6,
      data: [0, 0, 0, 0, 0, 0],
      multiply: function (t, e) {
        for (var r = -1, n = e; ++r < ge.size; )
          (n += t * ge.data[r]),
            (ge.data[r] = n % ge.base),
            (n = Math.floor(n / ge.base));
      },
      divide: function (t) {
        for (var e = ge.size, r = 0; --e >= 0; )
          (r += ge.data[e]),
            (ge.data[e] = Math.floor(r / t)),
            (r = (r % t) * ge.base);
      },
      numToString: function () {
        for (var t = ge.size, e = ""; --t >= 0; )
          if ("" !== e || 0 === t || 0 !== ge.data[t]) {
            var r = f(ge.data[t]);
            "" === e ? (e = r) : (e += L("0000000", 0, 7 - r.length) + r);
          }
        return e;
      },
      pow: function Ae(t, e, r) {
        return 0 === e
          ? r
          : e % 2 === 1
          ? Ae(t, e - 1, r * t)
          : Ae(t * t, e / 2, r);
      },
      log: function (t) {
        for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
        for (; r >= 2; ) (e += 1), (r /= 2);
        return e;
      },
    },
    ve = function (t) {
      var e, r, n, o, i, a, u, s;
      if (((e = l(t)), (e = Z(e) ? 0 : Math.floor(e)), e < 0 || e > 20))
        throw new RangeError(
          "Number.toFixed called with invalid number of decimals"
        );
      if (((r = l(this)), Z(r))) return "NaN";
      if (r <= -1e21 || r >= 1e21) return f(r);
      if (((n = ""), r < 0 && ((n = "-"), (r = -r)), (o = "0"), r > 1e-21))
        if (
          ((i = ge.log(r * ge.pow(2, 69, 1)) - 69),
          (a = i < 0 ? r * ge.pow(2, -i, 1) : r / ge.pow(2, i, 1)),
          (a *= 4503599627370496),
          (i = 52 - i),
          i > 0)
        ) {
          for (ge.multiply(0, a), u = e; u >= 7; )
            ge.multiply(1e7, 0), (u -= 7);
          for (ge.multiply(ge.pow(10, u, 1), 0), u = i - 1; u >= 23; )
            ge.divide(1 << 23), (u -= 23);
          ge.divide(1 << u),
            ge.multiply(1, 1),
            ge.divide(2),
            (o = ge.numToString());
        } else
          ge.multiply(0, a),
            ge.multiply(1 << -i, 0),
            (o = ge.numToString() + L("0.00000000000000000000", 2, 2 + e));
      return (
        e > 0
          ? ((s = o.length),
            (o =
              s <= e
                ? n + L("0.0000000000000000000", 0, e - s + 2) + o
                : n + L(o, 0, s - e) + "." + L(o, s - e)))
          : (o = n + o),
        o
      );
    };
  P(c, { toFixed: ve }, de);
  var be = (function () {
      try {
        return "1" === (1).toPrecision(void 0);
      } catch (t) {
        return !0;
      }
    })(),
    we = c.toPrecision;
  P(
    c,
    {
      toPrecision: function (t) {
        return "undefined" == typeof t ? we.call(this) : we.call(this, t);
      },
    },
    be
  ),
    2 !== "ab".split(/(?:ab)*/).length ||
    4 !== ".".split(/(.?)(.?)/).length ||
    "t" === "tesst".split(/(s)*/)[1] ||
    4 !== "test".split(/(?:)/, -1).length ||
    "".split(/.?/).length ||
    ".".split(/()()/).length > 1
      ? !(function () {
          var t = "undefined" == typeof /()??/.exec("")[1],
            r = Math.pow(2, 32) - 1;
          s.split = function (n, o) {
            var i = String(this);
            if ("undefined" == typeof n && 0 === o) return [];
            if (!e(n)) return X(this, n, o);
            var a,
              u,
              f,
              s,
              l = [],
              c =
                (n.ignoreCase ? "i" : "") +
                (n.multiline ? "m" : "") +
                (n.unicode ? "u" : "") +
                (n.sticky ? "y" : ""),
              h = 0,
              p = new RegExp(n.source, c + "g");
            t || (a = new RegExp("^" + p.source + "$(?!\\s)", c));
            var d = "undefined" == typeof o ? r : z.ToUint32(o);
            for (
              u = p.exec(i);
              u &&
              ((f = u.index + u[0].length),
              !(
                f > h &&
                (K(l, L(i, h, u.index)),
                !t &&
                  u.length > 1 &&
                  u[0].replace(a, function () {
                    for (var t = 1; t < arguments.length - 2; t++)
                      "undefined" == typeof arguments[t] && (u[t] = void 0);
                  }),
                u.length > 1 && u.index < i.length && y.apply(l, H(u, 1)),
                (s = u[0].length),
                (h = f),
                l.length >= d)
              ));

            )
              p.lastIndex === u.index && p.lastIndex++, (u = p.exec(i));
            return (
              h === i.length ? (!s && p.test("")) || K(l, "") : K(l, L(i, h)),
              l.length > d ? H(l, 0, d) : l
            );
          };
        })()
      : "0".split(void 0, 0).length &&
        (s.split = function (t, e) {
          return "undefined" == typeof t && 0 === e ? [] : X(this, t, e);
        });
  var Te = s.replace,
    me = (function () {
      var t = [];
      return (
        "x".replace(/x(.)?/g, function (e, r) {
          K(t, r);
        }),
        1 === t.length && "undefined" == typeof t[0]
      );
    })();
  me ||
    (s.replace = function (r, n) {
      var o = t(n),
        i = e(r) && /\)[*?]/.test(r.source);
      if (o && i) {
        var a = function (t) {
          var e = arguments.length,
            o = r.lastIndex;
          r.lastIndex = 0;
          var i = r.exec(t) || [];
          return (
            (r.lastIndex = o),
            K(i, arguments[e - 2], arguments[e - 1]),
            n.apply(this, i)
          );
        };
        return Te.call(this, r, a);
      }
      return Te.call(this, r, n);
    });
  var De = s.substr,
    xe = "".substr && "b" !== "0b".substr(-1);
  P(
    s,
    {
      substr: function (t, e) {
        var r = t;
        return t < 0 && (r = T(this.length + t, 0)), De.call(this, r, e);
      },
    },
    xe
  );
  var Se = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
    Oe = "​",
    je = "[" + Se + "]",
    Ee = new RegExp("^" + je + je + "*"),
    Me = new RegExp(je + je + "*$"),
    Ie = s.trim && (Se.trim() || !Oe.trim());
  P(
    s,
    {
      trim: function () {
        if ("undefined" == typeof this || null === this)
          throw new TypeError("can't convert " + this + " to object");
        return f(this).replace(Ee, "").replace(Me, "");
      },
    },
    Ie
  );
  var Ue = b.bind(String.prototype.trim),
    Fe = s.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
  P(
    s,
    {
      lastIndexOf: function (t) {
        if ("undefined" == typeof this || null === this)
          throw new TypeError("can't convert " + this + " to object");
        for (
          var e = f(this),
            r = f(t),
            n = arguments.length > 1 ? l(arguments[1]) : NaN,
            o = Z(n) ? 1 / 0 : z.ToInteger(n),
            i = m(T(o, 0), e.length),
            a = r.length,
            u = i + a;
          u > 0;

        ) {
          u = T(0, u - a);
          var s = q(L(e, u, i + a), r);
          if (s !== -1) return u + s;
        }
        return -1;
      },
    },
    Fe
  );
  var Ne = s.lastIndexOf;
  if (
    (P(
      s,
      {
        lastIndexOf: function (t) {
          return Ne.apply(this, arguments);
        },
      },
      1 !== s.lastIndexOf.length
    ),
    (8 === parseInt(Se + "08") && 22 === parseInt(Se + "0x16")) ||
      (parseInt = (function (t) {
        var e = /^[\-+]?0[xX]/;
        return function (r, n) {
          var o = Ue(String(r)),
            i = l(n) || (e.test(o) ? 16 : 10);
          return t(o, i);
        };
      })(parseInt)),
    1 / parseFloat("-0") !== -(1 / 0) &&
      (parseFloat = (function (t) {
        return function (e) {
          var r = Ue(String(e)),
            n = t(r);
          return 0 === n && "-" === L(r, 0, 1) ? -0 : n;
        };
      })(parseFloat)),
    "RangeError: test" !== String(new RangeError("test")))
  ) {
    var ke = function () {
      if ("undefined" == typeof this || null === this)
        throw new TypeError("can't convert " + this + " to object");
      var t = this.name;
      "undefined" == typeof t
        ? (t = "Error")
        : "string" != typeof t && (t = f(t));
      var e = this.message;
      return (
        "undefined" == typeof e ? (e = "") : "string" != typeof e && (e = f(e)),
        t ? (e ? t + ": " + e : t) : e
      );
    };
    Error.prototype.toString = ke;
  }
  if ($) {
    var Ce = function (t, e) {
      if (Q(t, e)) {
        var r = Object.getOwnPropertyDescriptor(t, e);
        r.configurable && ((r.enumerable = !1), Object.defineProperty(t, e, r));
      }
    };
    Ce(Error.prototype, "message"),
      "" !== Error.prototype.message && (Error.prototype.message = ""),
      Ce(Error.prototype, "name");
  }
  if ("/a/gim" !== String(/a/gim)) {
    var Re = function () {
      var t = "/" + this.source + "/";
      return (
        this.global && (t += "g"),
        this.ignoreCase && (t += "i"),
        this.multiline && (t += "m"),
        t
      );
    };
    RegExp.prototype.toString = Re;
  }
});
