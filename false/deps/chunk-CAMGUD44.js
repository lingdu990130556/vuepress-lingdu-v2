import {
  gt
} from "./chunk-I4RTZAPP.js";
import {
  Je
} from "./chunk-4UAMBZ6H.js";
import {
  A,
  Xt
} from "./chunk-G3ZTUZM3.js";
import {
  r
} from "./chunk-LKLOIJ2D.js";
import {
  Ba,
  Bm,
  Ct,
  Di,
  Et,
  Kf,
  L,
  Tt,
  We,
  Z0,
  b,
  n_,
  pl,
  zn
} from "./chunk-CZQZAEB4.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/styles-9a36b1c0.js
var Y = (e, l) => L.lang.round(Tt.parse(e)[l]);
var Z = Y;
function pe(e, l) {
  return !!e.children(l).length;
}
function be(e) {
  return L2(e.v) + ":" + L2(e.w) + ":" + L2(e.name);
}
var j = /:/g;
function L2(e) {
  return e ? String(e).replace(j, "\\:") : "";
}
function O(e, l) {
  l && e.attr("style", l);
}
function ue(e, l, c) {
  l && e.attr("class", l).attr("class", c + " " + e.attr("class"));
}
function we(e, l) {
  var c = l.graph();
  if (Xt(c)) {
    var a = c.transition;
    if (pl(a))
      return a(e);
  }
  return e;
}
function ee(e, l) {
  var c = e.append("foreignObject").attr("width", "100000"), a = c.append("xhtml:div");
  a.attr("xmlns", "http://www.w3.org/1999/xhtml");
  var i = l.label;
  switch (typeof i) {
    case "function":
      a.insert(i);
      break;
    case "object":
      a.insert(function() {
        return i;
      });
      break;
    default:
      a.html(i);
  }
  O(a, l.labelStyle), a.style("display", "inline-block"), a.style("white-space", "nowrap");
  var d = a.node().getBoundingClientRect();
  return c.attr("width", d.width).attr("height", d.height), c;
}
var G = {};
var te = function(e) {
  const l = Object.keys(e);
  for (const c of l)
    G[c] = e[c];
};
var z = function(e, l, c, a, i, d) {
  const w = a.select(`[id="${c}"]`);
  Object.keys(e).forEach(function(f) {
    const r2 = e[f];
    let g = "default";
    r2.classes.length > 0 && (g = r2.classes.join(" ")), g = g + " flowchart-label";
    const h = n_(r2.styles);
    let t = r2.text !== void 0 ? r2.text : r2.id, s;
    if (b.info("vertex", r2, r2.labelType), r2.labelType === "markdown")
      b.info("vertex", r2, r2.labelType);
    else if (Ba(Et().flowchart.htmlLabels)) {
      const m = {
        label: t.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (k) => `<i class='${k.replace(":", " ")}'></i>`
        )
      };
      s = ee(w, m).node(), s.parentNode.removeChild(s);
    } else {
      const m = i.createElementNS("http://www.w3.org/2000/svg", "text");
      m.setAttribute("style", h.labelStyle.replace("color:", "fill:"));
      const k = t.split(zn.lineBreakRegex);
      for (const T of k) {
        const S = i.createElementNS("http://www.w3.org/2000/svg", "tspan");
        S.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), S.setAttribute("dy", "1em"), S.setAttribute("x", "1"), S.textContent = T, m.appendChild(S);
      }
      s = m;
    }
    let p = 0, n = "";
    switch (r2.type) {
      case "round":
        p = 5, n = "rect";
        break;
      case "square":
        n = "rect";
        break;
      case "diamond":
        n = "question";
        break;
      case "hexagon":
        n = "hexagon";
        break;
      case "odd":
        n = "rect_left_inv_arrow";
        break;
      case "lean_right":
        n = "lean_right";
        break;
      case "lean_left":
        n = "lean_left";
        break;
      case "trapezoid":
        n = "trapezoid";
        break;
      case "inv_trapezoid":
        n = "inv_trapezoid";
        break;
      case "odd_right":
        n = "rect_left_inv_arrow";
        break;
      case "circle":
        n = "circle";
        break;
      case "ellipse":
        n = "ellipse";
        break;
      case "stadium":
        n = "stadium";
        break;
      case "subroutine":
        n = "subroutine";
        break;
      case "cylinder":
        n = "cylinder";
        break;
      case "group":
        n = "rect";
        break;
      case "doublecircle":
        n = "doublecircle";
        break;
      default:
        n = "rect";
    }
    l.setNode(r2.id, {
      labelStyle: h.labelStyle,
      shape: n,
      labelText: t,
      labelType: r2.labelType,
      rx: p,
      ry: p,
      class: g,
      style: h.style,
      id: r2.id,
      link: r2.link,
      linkTarget: r2.linkTarget,
      tooltip: d.db.getTooltip(r2.id) || "",
      domId: d.db.lookUpDomId(r2.id),
      haveCallback: r2.haveCallback,
      width: r2.type === "group" ? 500 : void 0,
      dir: r2.dir,
      type: r2.type,
      props: r2.props,
      padding: Et().flowchart.padding
    }), b.info("setNode", {
      labelStyle: h.labelStyle,
      labelType: r2.labelType,
      shape: n,
      labelText: t,
      rx: p,
      ry: p,
      class: g,
      style: h.style,
      id: r2.id,
      domId: d.db.lookUpDomId(r2.id),
      width: r2.type === "group" ? 500 : void 0,
      type: r2.type,
      dir: r2.dir,
      props: r2.props,
      padding: Et().flowchart.padding
    });
  });
};
var P = function(e, l, c) {
  b.info("abc78 edges = ", e);
  let a = 0, i = {}, d, w;
  if (e.defaultStyle !== void 0) {
    const o = n_(e.defaultStyle);
    d = o.style, w = o.labelStyle;
  }
  e.forEach(function(o) {
    a++;
    const f = "L-" + o.start + "-" + o.end;
    i[f] === void 0 ? (i[f] = 0, b.info("abc78 new entry", f, i[f])) : (i[f]++, b.info("abc78 new entry", f, i[f]));
    let r2 = f + "-" + i[f];
    b.info("abc78 new link id to be used is", f, r2, i[f]);
    const g = "LS-" + o.start, h = "LE-" + o.end, t = { style: "", labelStyle: "" };
    switch (t.minlen = o.length || 1, o.type === "arrow_open" ? t.arrowhead = "none" : t.arrowhead = "normal", t.arrowTypeStart = "arrow_open", t.arrowTypeEnd = "arrow_open", o.type) {
      case "double_arrow_cross":
        t.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        t.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        t.arrowTypeStart = "arrow_point";
      case "arrow_point":
        t.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        t.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        t.arrowTypeEnd = "arrow_circle";
        break;
    }
    let s = "", p = "";
    switch (o.stroke) {
      case "normal":
        s = "fill:none;", d !== void 0 && (s = d), w !== void 0 && (p = w), t.thickness = "normal", t.pattern = "solid";
        break;
      case "dotted":
        t.thickness = "normal", t.pattern = "dotted", t.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        t.thickness = "thick", t.pattern = "solid", t.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        t.thickness = "invisible", t.pattern = "solid", t.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (o.style !== void 0) {
      const n = n_(o.style);
      s = n.style, p = n.labelStyle;
    }
    t.style = t.style += s, t.labelStyle = t.labelStyle += p, o.interpolate !== void 0 ? t.curve = Z0(o.interpolate, Kf) : e.defaultInterpolate !== void 0 ? t.curve = Z0(e.defaultInterpolate, Kf) : t.curve = Z0(G.curve, Kf), o.text === void 0 ? o.style !== void 0 && (t.arrowheadStyle = "fill: #333") : (t.arrowheadStyle = "fill: #333", t.labelpos = "c"), t.labelType = o.labelType, t.label = o.text.replace(zn.lineBreakRegex, `
`), o.style === void 0 && (t.style = t.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), t.labelStyle = t.labelStyle.replace("color:", "fill:"), t.id = r2, t.classes = "flowchart-link " + g + " " + h, l.setEdge(o.start, o.end, t, a);
  });
};
var re = function(e, l) {
  b.info("Extracting classes"), l.db.clear();
  try {
    return l.parse(e), l.db.getClasses();
  } catch {
    return;
  }
};
var le = async function(e, l, c, a) {
  b.info("Drawing flowchart"), a.db.clear(), Je.setGen("gen-2"), a.parser.parse(e);
  let i = a.db.getDirection();
  i === void 0 && (i = "TD");
  const { securityLevel: d, flowchart: w } = Et(), o = w.nodeSpacing || 50, f = w.rankSpacing || 50;
  let r2;
  d === "sandbox" && (r2 = Ct("#i" + l));
  const g = d === "sandbox" ? Ct(r2.nodes()[0].contentDocument.body) : Ct("body"), h = d === "sandbox" ? r2.nodes()[0].contentDocument : document, t = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: i,
    nodesep: o,
    ranksep: f,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let s;
  const p = a.db.getSubGraphs();
  b.info("Subgraphs - ", p);
  for (let b2 = p.length - 1; b2 >= 0; b2--)
    s = p[b2], b.info("Subgraph - ", s), a.db.addVertex(
      s.id,
      { text: s.title, type: s.labelType },
      "group",
      void 0,
      s.classes,
      s.dir
    );
  const n = a.db.getVertices(), m = a.db.getEdges();
  b.info("Edges", m);
  let k = 0;
  for (k = p.length - 1; k >= 0; k--) {
    s = p[k], r("cluster").append("text");
    for (let b2 = 0; b2 < s.nodes.length; b2++)
      b.info("Setting up subgraphs", s.nodes[b2], s.id), t.setParent(s.nodes[b2], s.id);
  }
  z(n, t, l, g, h, a), P(m, t);
  const T = g.select(`[id="${l}"]`), S = g.select("#" + l + " g");
  if (await gt(S, t, ["point", "circle", "cross"], "flowchart", l), Di.insertTitle(T, "flowchartTitleText", w.titleTopMargin, a.db.getDiagramTitle()), Bm(t, T, w.diagramPadding, w.useMaxWidth), a.db.indexNodes("subGraph" + k), !w.htmlLabels) {
    const b2 = h.querySelectorAll('[id="' + l + '"] .edgeLabel .label');
    for (const x of b2) {
      const v = x.getBBox(), y = h.createElementNS("http://www.w3.org/2000/svg", "rect");
      y.setAttribute("rx", 0), y.setAttribute("ry", 0), y.setAttribute("width", v.width), y.setAttribute("height", v.height), x.insertBefore(y, x.firstChild);
    }
  }
  Object.keys(n).forEach(function(b2) {
    const x = n[b2];
    if (x.link) {
      const v = Ct("#" + l + ' [id="' + b2 + '"]');
      if (v) {
        const y = h.createElementNS("http://www.w3.org/2000/svg", "a");
        y.setAttributeNS("http://www.w3.org/2000/svg", "class", x.classes.join(" ")), y.setAttributeNS("http://www.w3.org/2000/svg", "href", x.link), y.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), d === "sandbox" ? y.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : x.linkTarget && y.setAttributeNS("http://www.w3.org/2000/svg", "target", x.linkTarget);
        const A2 = v.insert(function() {
          return y;
        }, ":first-child"), B = v.select(".label-container");
        B && A2.append(function() {
          return B.node();
        });
        const D = v.select(".label");
        D && A2.append(function() {
          return D.node();
        });
      }
    }
  });
};
var he = {
  setConf: te,
  addVertices: z,
  addEdges: P,
  getClasses: re,
  draw: le
};
var ae = (e, l) => {
  const c = Z, a = c(e, "r"), i = c(e, "g"), d = c(e, "b");
  return We(a, i, d, l);
};
var ne = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${ae(e.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
var ye = ne;

export {
  pe,
  be,
  O,
  ue,
  we,
  ee,
  he,
  ye
};
//# sourceMappingURL=chunk-CAMGUD44.js.map
