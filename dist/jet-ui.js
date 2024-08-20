import { defineComponent as s, openBlock as a, createElementBlock as r, normalizeClass as m, renderSlot as l, createTextVNode as c, toDisplayString as d } from "vue";
const p = ["disabled"], f = /* @__PURE__ */ s({
  __name: "JetButton",
  props: {
    text: { type: String, required: !1 },
    disabled: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "md"
    },
    theme: {
      type: String,
      default: "default"
    }
  },
  emits: ["click"],
  setup(t) {
    return s({
      name: "JetButton"
    }), (e, n) => (a(), r("button", {
      onClick: n[0] || (n[0] = (o) => e.$emit("click")),
      disabled: t.disabled,
      class: m(["jet-btn", `jet-btn-${t.theme}`])
    }, [
      l(e.$slots, "default", {}, () => [
        c(d(t.text), 1)
      ], !0)
    ], 10, p));
  }
}), i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, u] of e)
    n[o] = u;
  return n;
}, k = /* @__PURE__ */ i(f, [["__scopeId", "data-v-fb8ca129"]]), _ = { class: "jet-empty" }, y = /* @__PURE__ */ s({
  __name: "JetEmpty",
  props: {
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(t) {
    return s({
      name: "JetEmpty"
    }), (e, n) => (a(), r("div", _, [
      l(e.$slots, "default", {}, () => [
        c(d(t.text || "No results"), 1)
      ], !0)
    ]));
  }
}), $ = /* @__PURE__ */ i(y, [["__scopeId", "data-v-adcb4d09"]]);
export {
  k as JetButton,
  $ as JetEmpty
};
