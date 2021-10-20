import Vue from 'vue';

export type focusRef = Vue & {
    focus: () => void;
    childNodes: any;
};
