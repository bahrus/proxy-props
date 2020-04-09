var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _debouncer, _prop1, _prop2, _prop3, _prop4, _prop5, _styleProp, _tag, _map, _conn;
import { define } from 'trans-render/define.js';
import { hydrate, disabled } from 'trans-render/hydrate.js';
import { XtallatX } from 'xtal-element/xtal-latx.js';
import { debounce } from 'xtal-element/debounce.js';
export const prop1 = 'prop1';
export const prop2 = 'prop2';
export const prop3 = 'prop3';
export const prop4 = 'prop4';
export const prop5 = 'prop5';
export const style_prop = 'style-prop';
export const tag = 'tag';
export const map = 'map';
export class ProxyProps extends XtallatX(hydrate(HTMLElement)) {
    constructor() {
        super();
        _debouncer.set(this, void 0);
        _prop1.set(this, void 0);
        _prop2.set(this, void 0);
        _prop3.set(this, void 0);
        _prop4.set(this, void 0);
        _prop5.set(this, void 0);
        _styleProp.set(this, void 0);
        _tag.set(this, void 0);
        _map.set(this, void 0);
        _conn.set(this, false);
        __classPrivateFieldSet(this, _debouncer, debounce(() => {
            if (!__classPrivateFieldGet(this, _conn) || !__classPrivateFieldGet(this, _map))
                return;
            let next = this.nextElementSibling;
            if (next === null || next.localName !== __classPrivateFieldGet(this, _tag)) {
                next = document.createElement(__classPrivateFieldGet(this, _tag));
                next = this.insertAdjacentElement('afterend', next);
            }
            for (const key in __classPrivateFieldGet(this, _map)) {
                const val = this[key];
                if (val === undefined)
                    continue;
                const prop = __classPrivateFieldGet(this, _map)[key];
                next[prop] = val;
            }
        }, 16));
    }
    static get is() { return 'proxy-props'; }
    static get observedAttributes() {
        return [prop1, prop2, prop3, prop4, prop5, tag, map, disabled, style_prop];
    }
    attributeChangedCallback(n, ov, nv) {
        switch (n) {
            case prop1:
            case prop2:
            case prop3:
            case prop4:
            case prop5:
                this[n] = JSON.parse(nv);
                break;
            case style_prop:
                this.styleProp = JSON.parse(nv);
                break;
            case map:
                this.map = JSON.parse(nv);
                break;
            case tag:
                __classPrivateFieldSet(this, _tag, nv);
                __classPrivateFieldGet(this, _debouncer).call(this);
                break;
        }
    }
    get prop1() {
        return __classPrivateFieldGet(this, _prop1);
    }
    set prop1(val) {
        __classPrivateFieldSet(this, _prop1, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get prop2() {
        return __classPrivateFieldGet(this, _prop2);
    }
    set prop2(val) {
        __classPrivateFieldSet(this, _prop2, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get prop3() {
        return __classPrivateFieldGet(this, _prop3);
    }
    set prop3(val) {
        __classPrivateFieldSet(this, _prop3, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get prop4() {
        return __classPrivateFieldGet(this, _prop4);
    }
    set prop4(val) {
        __classPrivateFieldSet(this, _prop4, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get prop5() {
        return __classPrivateFieldGet(this, _prop5);
    }
    set prop5(val) {
        __classPrivateFieldSet(this, _prop5, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get styleProp() {
        return __classPrivateFieldGet(this, _styleProp);
    }
    set styleProp(val) {
        __classPrivateFieldSet(this, _styleProp, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get tag() {
        return __classPrivateFieldGet(this, _tag);
    }
    set tag(val) {
        this.setAttribute(tag, val);
    }
    get map() {
        return __classPrivateFieldGet(this, _map);
    }
    set map(val) {
        __classPrivateFieldSet(this, _map, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    connectedCallback() {
        this.style.display = 'none';
        this.propUp([disabled, prop1, prop2, prop3, prop4, prop5, tag, map, style_prop]);
        __classPrivateFieldSet(this, _conn, true);
        if (__classPrivateFieldGet(this, _tag) === undefined)
            return;
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
}
_debouncer = new WeakMap(), _prop1 = new WeakMap(), _prop2 = new WeakMap(), _prop3 = new WeakMap(), _prop4 = new WeakMap(), _prop5 = new WeakMap(), _styleProp = new WeakMap(), _tag = new WeakMap(), _map = new WeakMap(), _conn = new WeakMap();
define(ProxyProps);
