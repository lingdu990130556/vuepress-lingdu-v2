import {
  Ie,
  Ne,
  Oe,
  Re,
  Rt,
  Tt,
  re,
  xt
} from "./chunk-6LDCXTBL.js";
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
  Ct,
  Di,
  Et,
  b,
  wm,
  zn
} from "./chunk-CZQZAEB4.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/stateDiagram-v2-95cd6741.js
var h = "rect";
var C = "rectWithTitle";
var nt = "start";
var ct = "end";
var it = "divider";
var rt = "roundedWithTitle";
var lt = "note";
var at = "noteGroup";
var u = "statediagram";
var dt = "state";
var Et2 = `${u}-${dt}`;
var U = "transition";
var St = "note";
var Tt2 = "note-edge";
var pt = `${U} ${Tt2}`;
var ut = `${u}-${St}`;
var _t = "cluster";
var ft = `${u}-${_t}`;
var Dt = "cluster-alt";
var bt = `${u}-${Dt}`;
var V = "parent";
var Y = "note";
var At = "state";
var N = "----";
var ht = `${N}${Y}`;
var v = `${N}${V}`;
var W = "fill:none";
var z = "fill: #333";
var m = "c";
var q = "text";
var K = "normal";
var y = {};
var E = 0;
var yt = function(t) {
  const n = Object.keys(t);
  for (const e of n)
    t[e];
};
var gt2 = function(t, n) {
  b.trace("Extracting classes"), n.db.clear();
  try {
    return n.parser.parse(t), n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
  } catch (e) {
    return e;
  }
};
function xt2(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function R(t = "", n = 0, e = "", c = N) {
  const i = e !== null && e.length > 0 ? `${c}${e}` : "";
  return `${At}-${t}${i}-${n}`;
}
var A2 = (t, n, e, c, i, r) => {
  const s = e.id, _ = xt2(c[s]);
  if (s !== "root") {
    let T = h;
    e.start === true && (T = nt), e.start === false && (T = ct), e.type !== xt && (T = e.type), y[s] || (y[s] = {
      id: s,
      shape: T,
      description: zn.sanitizeText(s, Et()),
      classes: `${_} ${Et2}`
    });
    const o = y[s];
    e.description && (Array.isArray(o.description) ? (o.shape = C, o.description.push(e.description)) : o.description.length > 0 ? (o.shape = C, o.description === s ? o.description = [e.description] : o.description = [o.description, e.description]) : (o.shape = h, o.description = e.description), o.description = zn.sanitizeTextOrArray(o.description, Et())), o.description.length === 1 && o.shape === C && (o.shape = h), !o.type && e.doc && (b.info("Setting cluster for ", s, G(e)), o.type = "group", o.dir = G(e), o.shape = e.type === re ? it : rt, o.classes = o.classes + " " + ft + " " + (r ? bt : ""));
    const p = {
      labelStyle: "",
      shape: o.shape,
      labelText: o.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: o.classes,
      style: "",
      //styles.style,
      id: s,
      dir: o.dir,
      domId: R(s, E),
      type: o.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (p.centerLabel = true, e.note) {
      const a = {
        labelStyle: "",
        shape: lt,
        labelText: e.note.text,
        classes: ut,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: s + ht + "-" + E,
        domId: R(s, E, Y),
        type: o.type,
        padding: 15
        //getConfig().flowchart.padding
      }, d = {
        labelStyle: "",
        shape: at,
        labelText: e.note.text,
        classes: o.classes,
        style: "",
        // styles.style,
        id: s + v,
        domId: R(s, E, V),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      E++;
      const f = s + v;
      t.setNode(f, d), t.setNode(a.id, a), t.setNode(s, p), t.setParent(s, f), t.setParent(a.id, f);
      let S = s, D = a.id;
      e.note.position === "left of" && (S = a.id, D = s), t.setEdge(S, D, {
        arrowhead: "none",
        arrowType: "",
        style: W,
        labelStyle: "",
        classes: pt,
        arrowheadStyle: z,
        labelpos: m,
        labelType: q,
        thickness: K
      });
    } else
      t.setNode(s, p);
  }
  n && n.id !== "root" && (b.trace("Setting node ", s, " to be child of its parent ", n.id), t.setParent(s, n.id)), e.doc && (b.trace("Adding nodes children "), $t(t, e, e.doc, c, i, !r));
};
var $t = (t, n, e, c, i, r) => {
  b.trace("items", e), e.forEach((s) => {
    switch (s.stmt) {
      case Tt:
        A2(t, n, s, c, i, r);
        break;
      case xt:
        A2(t, n, s, c, i, r);
        break;
      case Rt:
        {
          A2(t, n, s.state1, c, i, r), A2(t, n, s.state2, c, i, r);
          const _ = {
            id: "edge" + E,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: W,
            labelStyle: "",
            label: zn.sanitizeText(s.description, Et()),
            arrowheadStyle: z,
            labelpos: m,
            labelType: q,
            thickness: K,
            classes: U
          };
          t.setEdge(s.state1.id, s.state2.id, _, E), E++;
        }
        break;
    }
  });
};
var G = (t, n = Oe) => {
  let e = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (e = i.value);
    }
  return e;
};
var Ct2 = async function(t, n, e, c) {
  b.info("Drawing state diagram (v2)", n), y = {}, c.db.getDirection();
  const { securityLevel: i, state: r } = Et(), s = r.nodeSpacing || 50, _ = r.rankSpacing || 50;
  b.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), b.info(c.db.getRootDocV2());
  const T = c.db.getStates(), o = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: G(c.db.getRootDocV2()),
    nodesep: s,
    ranksep: _,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  A2(o, void 0, c.db.getRootDocV2(), T, c.db, true);
  let p;
  i === "sandbox" && (p = Ct("#i" + n));
  const a = i === "sandbox" ? Ct(p.nodes()[0].contentDocument.body) : Ct("body"), d = a.select(`[id="${n}"]`), f = a.select("#" + n + " g");
  await gt(f, o, ["barb"], u, n);
  const S = 8;
  Di.insertTitle(d, "statediagramTitleText", r.titleTopMargin, c.db.getDiagramTitle());
  const D = d.node().getBBox(), L = D.width + S * 2, P = D.height + S * 2;
  d.attr("class", u);
  const k = d.node().getBBox();
  wm(d, P, L, r.useMaxWidth);
  const O = `${k.x - S} ${k.y - S} ${L} ${P}`;
  b.debug(`viewBox ${O}`), d.attr("viewBox", O);
  const J = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const x of J) {
    const B = x.getBBox(), b2 = document.createElementNS("http://www.w3.org/2000/svg", h);
    b2.setAttribute("rx", 0), b2.setAttribute("ry", 0), b2.setAttribute("width", B.width), b2.setAttribute("height", B.height), x.insertBefore(b2, x.firstChild);
  }
};
var Rt2 = {
  setConf: yt,
  getClasses: gt2,
  draw: Ct2
};
var Ht = {
  parser: Ie,
  db: Ne,
  renderer: Rt2,
  styles: Re,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, Ne.clear();
  }
};
export {
  Ht as diagram
};
//# sourceMappingURL=stateDiagram-v2-95cd6741-CTIGP3V5.js.map
