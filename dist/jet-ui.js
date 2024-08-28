import { defineComponent as s, openBlock as a, createElementBlock as r, normalizeClass as m, renderSlot as l, createTextVNode as c, toDisplayString as i } from "vue";
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
        c(i(t.text), 1)
      ], !0)
    ], 10, p));
  }
}), d = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, u] of e)
    n[o] = u;
  return n;
}, b = /* @__PURE__ */ d(f, [["__scopeId", "data-v-fb8ca129"]]), _ = { class: "jet-empty" }, y = /* @__PURE__ */ s({
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
        c(i(t.text || "No results xxxx"), 1)
      ], !0)
    ]));
  }
}), k = /* @__PURE__ */ d(y, [["__scopeId", "data-v-7aca24ce"]]);
export {
  b as JetButton,
  k as JetEmpty
};
