import {
  __async,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/@magnolia/frontend-helpers-base/dist/frontend-helpers-base.js
var O = (e) => {
  var r;
  return ((r = e == null ? void 0 : e["@path"]) == null ? void 0 : r.replace(/\//g, "_")) || (e == null ? void 0 : e["@name"]) || "";
};
var U = (e, r, a) => {
  if (!e || typeof e != "object") return {};
  const i = {
    metadata: {
      "@index": r
    },
    key: O(e)
  };
  let t;
  return a ? (i.data = {}, t = i.data) : t = i, Object.keys(e).forEach((c) => {
    c.match(/^(@|mgnl:|jcr:)/) ? i.metadata[c] = e[c] : t[c.replace("-", "_")] = e[c];
  }), i;
};
var C = Object.freeze(Object.defineProperty({
  __proto__: null,
  buildKey: O,
  getComponentProperties: U
}, Symbol.toStringTag, {
  value: "Module"
}));
function j(e) {
  try {
    const r = /^http(s?):\/\//i.test(e) ? e : "http://valid-url.com" + (e.startsWith("/") ? e : "/" + e);
    return new URL(r);
  } catch {
    return console.warn("requestUrl is not a valid URL"), false;
  }
}
var T = (e, r, a) => {
  const i = j(e), t = {
    isMagnolia: false,
    isMagnoliaEdit: false,
    isMagnoliaPreview: false,
    version: void 0,
    nodePath: void 0,
    currentLanguage: void 0,
    searchParams: void 0,
    search: void 0
  };
  if (i) {
    const c = i.pathname, n = new URLSearchParams(i.search), o = n.get("mgnlPreview"), d = n.get("mgnlPreviewAsVisitor"), u = n.get("mgnlVersion"), f = o ?? d;
    f && (t.isMagnolia = true, f === "false" && (t.isMagnoliaEdit = true), f === "true" && (t.isMagnoliaPreview = true)), t.isMagnolia && !d && n.set("variants", "all"), u ? (t.version = u, n.set("version", u)) : delete t.version, a && (t.currentLanguage = a[0], a.some((l) => new RegExp("/" + l + "($|/)").test(c) ? (t.currentLanguage = l, true) : false), n.set("lang", t.currentLanguage)), r && (t.nodePath = r + c.replace(new RegExp("(.*" + r + "|.html|/$)", "g"), ""), t.currentLanguage && (t.nodePath = t.nodePath.replace(new RegExp("/" + t.currentLanguage + "($|/)"), "/")), t.nodePath.slice(-1) === "/" && (t.nodePath = t.nodePath.slice(0, -1))), t.searchParams = Object.fromEntries(n), t.search = "?" + n.toString();
  }
  return t;
};
function M() {
  var E;
  const e = () => {
    try {
      const {
        href: s
      } = window.parent.location;
      return s != null;
    } catch {
      return false;
    }
  };
  function r() {
    if (!(typeof window > "u")) return e() ? window.parent : window;
  }
  const a = {
    serverUrl: e() && typeof window < "u" ? (E = r()) == null ? void 0 : E.location.href : ""
  }, i = (s) => new Promise((g) => {
    setTimeout(g, s);
  }), t = (s, g, p = 5e3) => __async(this, null, function* () {
    for (; !s(); ) if (yield i(200), p > 0 && g && Date.now() - g.getTime() > p) {
      S("Wait timeout");
      break;
    }
    return s();
  }), c = () => typeof window < "u" ? window !== window.parent : false, n = () => {
    const s = r();
    return new URLSearchParams(s == null ? void 0 : s.location.search).get("mgnlPreviewAsVisitor") === "true";
  }, o = () => {
    var s;
    return !!((s = a.serverUrl) != null && s.endsWith(":edit"));
  }, d = (s) => __async(this, null, function* () {
    var g;
    return yield t(() => {
      var p;
      return ((p = a.serverUrl) == null ? void 0 : p.length) || false;
    }, /* @__PURE__ */ new Date(), s), !!((g = a.serverUrl) != null && g.endsWith(":edit"));
  }), u = () => {
    var s;
    return !!((s = a.serverUrl) != null && s.endsWith(":view"));
  }, f = () => o() || !a.serverUrl;
  let l = null;
  const m = (s) => {
    l && clearTimeout(l), l = setTimeout(w, s);
  }, w = () => {
    const s = r();
    s != null && s.mgnlRefresh && (document.documentElement.innerHTML.indexOf("cms:page content=") > -1 ? s.mgnlRefresh() : m(200));
  };
  return {
    isSameOrigin: e,
    inIframe: c,
    inEditorAsync: d,
    inEditorPreview: u,
    inPreviewAsVisitor: n,
    isRenderingAnnotation: f,
    isPageEditorReady: () => {
      const s = r();
      return (s == null ? void 0 : s.mgnlFrameReady) !== void 0;
    },
    onFrameReady: () => {
      const s = r();
      s != null && s.mgnlFrameReady && s.mgnlFrameReady();
    },
    setServerUrl: (s) => {
      a.serverUrl = s;
    },
    inEditor: o,
    refresh: m,
    getMagnoliaContext: T
  };
}
var h = M();
function v(e, r, ...a) {
  if (typeof console > "u") return;
  const i = console[e];
  i && i(r, ...a);
}
var x = (e, ...r) => {
  v("log", e, ...r);
};
var $ = (e, ...r) => {
  v("info", e, ...r);
};
var S = (e, ...r) => {
  v("warn", e, ...r);
};
var A = (e, ...r) => {
  v("error", e, ...r);
};
var K = Object.freeze(Object.defineProperty({
  __proto__: null,
  error: A,
  info: $,
  log: x,
  warn: S
}, Symbol.toStringTag, {
  value: "Module"
}));
var R = "selectedComponentVariants";
var y = (e, r, a) => {
  if (!r || typeof a != "function") return;
  const i = r.toLowerCase();
  e[i] = e[i] || [], e[i].push(a);
};
function b(e) {
  const r = new URL(e);
  return `${r.protocol}//${r.hostname}${r.port ? `:${r.port}` : ""}${r.pathname.substring(0, r.pathname.indexOf(".magnolia"))}`;
}
function N(e, r) {
  return r ? e[r.toLowerCase()] || [] : [];
}
function z(e, r) {
  var o;
  const a = "mgnlPageEditorBridge";
  let i = document.getElementById(a);
  if (i || !r) {
    typeof e == "function" && e();
    return;
  }
  const t = b(r), c = document.getElementsByTagName("script")[0];
  i = document.createElement("script"), i.id = a, i.src = `${t}VAADIN/widgetsets/info.magnolia.PageEditor/info.magnolia.PageEditor.nocache.js`, (o = c.parentNode) == null || o.insertBefore(i, c), i.onload = () => {
    setTimeout(function d() {
      h.isPageEditorReady() ? (h.onFrameReady(), h.refresh(), typeof e == "function" && e()) : setTimeout(d, 100);
    }, 50);
  };
  const n = document.createElement("link");
  n.href = `${t}VAADIN/themes/pages-app/page-editor.css`, n.type = "text/css", n.rel = "stylesheet", document.head.insertBefore(n, document.head.firstChild);
}
var _ = () => {
  const e = {
    element: {
      dialog: "",
      path: "/",
      workspace: "website"
    },
    action: "initialize",
    elementType: "page"
  };
  window.parent.postMessage(JSON.stringify(e), "*");
};
var F = (e, r) => {
  typeof window > "u" || h.isSameOrigin() || (window.addEventListener("message", (a) => {
    if (!a.data || !(typeof a.data == "string" && a.data.startsWith("{"))) return;
    const i = JSON.parse(a.data);
    N(e, i.action).forEach((c) => {
      try {
        c(i);
      } catch (n) {
        console.error(n);
      }
    });
  }), y(e, "updateState", (a) => {
    const i = a.serverUrl;
    h.setServerUrl(i), z(r, i);
  }), _());
};
var W = (e, r) => typeof e == "object" && Object.keys(e).length > 0 ? JSON.stringify(e) !== r.get(R) : false;
var B = (e, r) => {
  y(e, "updateState", (a) => {
    const i = a, t = new URL(window.location.href);
    W(i.selectedComponentVariants, t.searchParams) && (t.searchParams.set(R, JSON.stringify(i.selectedComponentVariants)), r ? (window.history.pushState({}, "", t.toString()), window.dispatchEvent(new Event("popstate"))) : window.location.href = t.toString());
  });
};
var G = Object.freeze(Object.defineProperty({
  __proto__: null,
  getBaseServerUrl: b,
  init: F,
  initialVariantsHandler: B,
  onMessage: y,
  requestServerUrl: _
}, Symbol.toStringTag, {
  value: "Module"
}));
function V(e, r) {
  if (!e || !r) return e;
  const a = JSON.parse(JSON.stringify(e));
  return Object.keys(r).forEach((i) => {
    if (i.includes(e == null ? void 0 : e["@path"]) && r[i].startsWith("cms:area")) {
      const t = i.split("/").pop();
      t && !(t in e) && (a[t] = {
        "@path": `${e == null ? void 0 : e["@path"]}/${t}`,
        "@nodes": [],
        "@id": `${e == null ? void 0 : e["@path"]}/${t}`
      });
    }
  }), a;
}
var Q = Object.freeze(Object.defineProperty({
  __proto__: null,
  generateMissingAreas: V
}, Symbol.toStringTag, {
  value: "Module"
}));
var P = (e, r) => {
  if (!e || !r) return e;
  const a = r[e == null ? void 0 : e["@path"]], i = a ? a.match(/selectedVariant="(.+)"/) : null;
  if (!i) return e;
  const t = i[1];
  return t === e["@name"] ? e : e[t] ? e[t] : null;
};
var D = (e, r) => !h.inIframe() || h.inPreviewAsVisitor() ? e : P(e, r);
var L = (e, r) => {
  if (!e || !r) return e;
  const a = {}, i = /selectedVariant="(.+?)"/, t = /content="(.+?)"/, c = /((variants|variantTitles)=".+?")/g;
  return Object.entries(e).forEach((n) => {
    var u, f;
    const [o, d] = n;
    if (i.test(d) && o in r) {
      let l = r[o];
      if (l === "original") l = o.split("/").pop(), a[o] = d.replace(i, `selectedVariant="${l}"`);
      else {
        const m = o + "/variants/" + l, w = e[m];
        w != null ? (a[o] = w.replace(t, ((u = d.match(t)) == null ? void 0 : u[0]) || ""), a[o] = a[o].concat(" ", ((f = d.match(c)) == null ? void 0 : f.join(" ")) || ""), a[o] = a[o].concat(" ", `selectedVariant="${l}"`)) : S("Cannot find the variant with path '%s'. Please review the document https://docs.magnolia-cms.com/headless/spa-development/personalization-of-headless-SPA-projects.html#_notes.", m);
      }
    }
  }), __spreadValues(__spreadValues({}, e), a);
};
var J = (e, r, a) => {
  let i;
  !r || !a ? i = r || {} : i = L(r, a);
  let t = V(e, i);
  return t = P(t, i), {
    content: t,
    templateAnnotations: i
  };
};
var X = Object.freeze(Object.defineProperty({
  __proto__: null,
  getRenderContent: J,
  getSelectedVariant: P,
  getVariant: D,
  wrap: L
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  C,
  h,
  K,
  G,
  Q,
  X
};
//# sourceMappingURL=chunk-FDQQYEJQ.js.map
