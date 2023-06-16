import {
  It,
  Lt,
  xt
} from "./chunk-M3PD2HC7.js";
import {
  gt
} from "./chunk-I4RTZAPP.js";
import "./chunk-R4JCK33D.js";
import "./chunk-IXVJUA36.js";
import "./chunk-GVBEN4W3.js";
import {
  A
} from "./chunk-G3ZTUZM3.js";
import "./chunk-46ERF2PO.js";
import "./chunk-K4WWF2ZZ.js";
import "./chunk-E3Y6KLYK.js";
import {
  Bm,
  Ct,
  Di,
  Et,
  Kf,
  Z0,
  b,
  n_,
  zn
} from "./chunk-CZQZAEB4.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/classDiagram-v2-1c2c680d.js
var S = (o) => zn.sanitizeText(o, Et());
var v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var q = function(o, t, p, n) {
  const e = Object.keys(o);
  b.info("keys:", e), b.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = Et().flowchart) == null ? void 0 : y.padding) ?? ((d = Et().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), b.info("setNode", i);
  });
};
var I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  b.info("keys:", s), b.info(o), s.forEach(function(l) {
    var m, h;
    const a = o[l];
    let i = "";
    a.cssClasses.length > 0 && (i = i + " " + a.cssClasses.join(" "));
    const y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, u = "class_box", b2 = {
      labelStyle: y.labelStyle,
      shape: u,
      labelText: S(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((m = Et().flowchart) == null ? void 0 : m.padding) ?? ((h = Et().class) == null ? void 0 : h.padding)
    };
    t.setNode(a.id, b2), e && t.setParent(a.id, e), b.info("setNode", b2);
  });
};
var F = function(o, t, p, n) {
  b.info(o), o.forEach(function(e, s) {
    var h, x;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", u = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((h = Et().flowchart) == null ? void 0 : h.padding) ?? ((x = Et().class) == null ? void 0 : x.padding)
    };
    if (t.setNode(l.id, u), b.info("setNode", u), !l.class || !(l.class in n))
      return;
    const b2 = p + s, m = {
      id: `edgeNote${b2}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: Z0(v.curve, Kf)
    };
    t.setEdge(l.id, l.class, m, b2);
  });
};
var H = function(o, t) {
  const p = Et().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: C(e.relation.type1),
      arrowTypeEnd: C(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: Z0(p == null ? void 0 : p.curve, Kf)
    };
    if (b.info(s, e), e.style !== void 0) {
      const a = n_(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = Et().flowchart) == null ? void 0 : l.htmlLabels) ?? Et().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(zn.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
};
var V = function(o) {
  v = {
    ...v,
    ...o
  };
};
var W = async function(o, t, p, n) {
  b.info("Drawing class - ", t);
  const e = Et().flowchart ?? Et().class, s = Et().securityLevel;
  b.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), u = n.db.getNotes();
  b.info(f), q(y, i, t, n), I(d, i, t, n), H(f, i), F(u, i, f.length + 1, d);
  let b2;
  s === "sandbox" && (b2 = Ct("#i" + t));
  const m = s === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    Ct(b2.nodes()[0].contentDocument.body)
  ) : Ct("body"), h = m.select(`[id="${t}"]`), x = m.select("#" + t + " g");
  if (await gt(
    x,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), Di.insertTitle(h, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), Bm(i, h, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b2.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L = w.getBBox(), g = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", L.width), g.setAttribute("height", L.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function C(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
var J = {
  setConf: V,
  draw: W
};
var se = {
  parser: Lt,
  db: It,
  renderer: J,
  styles: xt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, It.clear();
  }
};
export {
  se as diagram
};
//# sourceMappingURL=classDiagram-v2-1c2c680d-4FNCMP7I.js.map
