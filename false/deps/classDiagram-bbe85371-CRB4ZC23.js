import {
  It,
  Lt,
  xt
} from "./chunk-M3PD2HC7.js";
import {
  R
} from "./chunk-IXVJUA36.js";
import {
  A,
  zs
} from "./chunk-G3ZTUZM3.js";
import "./chunk-46ERF2PO.js";
import "./chunk-K4WWF2ZZ.js";
import "./chunk-E3Y6KLYK.js";
import {
  Ct,
  Et,
  b,
  wm
} from "./chunk-CZQZAEB4.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/classDiagram-bbe85371.js
var h = {};
var g = 20;
var p = function(r) {
  const o = Object.entries(h).find((k) => k[1].label === r);
  if (o)
    return o[0];
};
var D = function(r) {
  r.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), r.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
var $ = function(r, o, k, a) {
  const c = Et().class;
  h = {}, b.info("Rendering diagram " + r);
  const L = Et().securityLevel;
  let y;
  L === "sandbox" && (y = Ct("#i" + o));
  const x = L === "sandbox" ? Ct(y.nodes()[0].contentDocument.body) : Ct("body"), n = x.select(`[id='${o}']`);
  D(n);
  const e = new A({
    multigraph: true
  });
  e.setGraph({
    isMultiGraph: true
  }), e.setDefaultEdgeLabel(function() {
    return {};
  });
  const u = a.db.getClasses(), N = Object.keys(u);
  for (const t of N) {
    const s = u[t], i = R.drawClass(n, s, c, a);
    h[i.id] = i, e.setNode(i.id, i), b.info("Org height: " + i.height);
  }
  a.db.getRelations().forEach(function(t) {
    b.info(
      "tjoho" + p(t.id1) + p(t.id2) + JSON.stringify(t)
    ), e.setEdge(
      p(t.id1),
      p(t.id2),
      {
        relation: t
      },
      t.title || "DEFAULT"
    );
  }), a.db.getNotes().forEach(function(t) {
    b.debug(`Adding note: ${JSON.stringify(t)}`);
    const s = R.drawNote(n, t, c, a);
    h[s.id] = s, e.setNode(s.id, s), t.class && t.class in u && e.setEdge(
      t.id,
      p(t.class),
      {
        relation: {
          id1: t.id,
          id2: t.class,
          relation: {
            type1: "none",
            type2: "none",
            lineType: 10
          }
        }
      },
      "DEFAULT"
    );
  }), zs(e), e.nodes().forEach(function(t) {
    t !== void 0 && e.node(t) !== void 0 && (b.debug("Node " + t + ": " + JSON.stringify(e.node(t))), x.select("#" + (a.db.lookUpDomId(t) || t)).attr(
      "transform",
      "translate(" + (e.node(t).x - e.node(t).width / 2) + "," + (e.node(t).y - e.node(t).height / 2) + " )"
    ));
  }), e.edges().forEach(function(t) {
    t !== void 0 && e.edge(t) !== void 0 && (b.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(e.edge(t))), R.drawEdge(n, e.edge(t), e.edge(t).relation, c, a));
  });
  const f = n.node().getBBox(), E = f.width + g * 2, b2 = f.height + g * 2;
  wm(n, b2, E, c.useMaxWidth);
  const w = `${f.x - g} ${f.y - g} ${E} ${b2}`;
  b.debug(`viewBox ${w}`), n.attr("viewBox", w);
};
var B = {
  draw: $
};
var V = {
  parser: Lt,
  db: It,
  renderer: B,
  styles: xt,
  init: (r) => {
    r.class || (r.class = {}), r.class.arrowMarkerAbsolute = r.arrowMarkerAbsolute, It.clear();
  }
};
export {
  V as diagram
};
//# sourceMappingURL=classDiagram-bbe85371-CRB4ZC23.js.map
