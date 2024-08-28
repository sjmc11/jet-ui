declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
