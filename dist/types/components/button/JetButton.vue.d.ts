declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    theme: {
        type: () => "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    theme: {
        type: () => "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    theme: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
