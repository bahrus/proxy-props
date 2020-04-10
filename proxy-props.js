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
var _debouncer, _conn, _from1, _from2, _from3, _from4, _from5, _from6, _from7, _from8, _from9, _to1, _to2, _to3, _to4, _to5, _to6, _to7, _to8, _to9, _styleProp, _tag, _location, _proxy;
import { define } from 'trans-render/define.js';
import { hydrate, disabled } from 'trans-render/hydrate.js';
import { XtallatX } from 'xtal-element/xtal-latx.js';
import { debounce } from 'xtal-element/debounce.js';
export const insert = 'insert';
export const tag = 'tag';
export const location = 'location';
// export const display = 'display';
export const proxy = 'proxy';
export const from1 = 'from1';
export const from2 = 'from2';
export const from3 = 'from3';
export const from4 = 'from4';
export const from5 = 'from5';
export const from6 = 'from6';
export const from7 = 'from7';
export const from8 = 'from8';
export const from9 = 'from9';
export const to1 = 'to1';
export const to2 = 'to2';
export const to3 = 'to3';
export const to4 = 'to4';
export const to5 = 'to5';
export const to6 = 'to6';
export const to7 = 'to7';
export const to8 = 'to8';
export const to9 = 'to9';
export const style_prop = 'style-prop';
const mostProps = [disabled, insert, tag, location, proxy, from1, from2, from3, from4, from5, from6, from7, from8, from9, to1, to2, to3, to4, to5, to6, to7, to8, to9];
export class ProxyProps extends XtallatX(hydrate(HTMLElement)) {
    constructor() {
        super();
        _debouncer.set(this, void 0);
        _conn.set(this, false);
        _from1.set(this, void 0);
        _from2.set(this, void 0);
        _from3.set(this, void 0);
        _from4.set(this, void 0);
        _from5.set(this, void 0);
        _from6.set(this, void 0);
        _from7.set(this, void 0);
        _from8.set(this, void 0);
        _from9.set(this, void 0);
        _to1.set(this, void 0);
        _to2.set(this, void 0);
        _to3.set(this, void 0);
        _to4.set(this, void 0);
        _to5.set(this, void 0);
        _to6.set(this, void 0);
        _to7.set(this, void 0);
        _to8.set(this, void 0);
        _to9.set(this, void 0);
        _styleProp.set(this, void 0);
        _tag.set(this, void 0);
        _location.set(this, 'afterend');
        _proxy.set(this, false);
        const veriKey = Symbol();
        __classPrivateFieldSet(this, _debouncer, debounce(() => {
            if (!__classPrivateFieldGet(this, _conn))
                return;
            let next = null;
            switch (__classPrivateFieldGet(this, _location)) {
                case "afterbegin":
                    next = this.firstElementChild;
                    break;
                case "afterend":
                    next = this.nextElementSibling;
                    break;
                case "beforebegin":
                    next = this.previousElementSibling;
                    break;
                case "beforeend":
                    next = this.lastElementChild;
                    break;
            }
            if (next === null || next.localName !== __classPrivateFieldGet(this, _tag)) {
                if (next !== null && next[veriKey])
                    next.remove();
                next = document.createElement(__classPrivateFieldGet(this, _tag));
                next = this.insertAdjacentElement(__classPrivateFieldGet(this, _location), next);
                next[veriKey] = true;
            }
            if (!__classPrivateFieldGet(this, _proxy))
                return;
            for (let i = 1; i < 10; i++) {
                const val = this['from' + i];
                if (val === undefined)
                    continue;
                const prop = this['to' + i];
                if (prop === undefined)
                    continue;
                next[prop] = val;
            }
            if (__classPrivateFieldGet(this, _styleProp) !== undefined) {
                Object.assign(next.style, __classPrivateFieldGet(this, _styleProp));
            }
        }, 16));
    }
    static get is() { return 'proxy-props'; }
    static get observedAttributes() {
        return mostProps.concat(style_prop);
    }
    connectedCallback() {
        this.propUp(mostProps.concat(['styeProp']));
        switch (this.location) {
            case 'afterend':
            case 'beforebegin':
                this.style.display = 'none';
                break;
        }
        __classPrivateFieldSet(this, _conn, true);
        if (__classPrivateFieldGet(this, _tag) === undefined)
            return;
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    attributeChangedCallback(n, ov, nv) {
        switch (n) {
            case from1:
            case from2:
            case from3:
            case from4:
            case from5:
            case from6:
            case from7:
            case from8:
            case from9:
                this[n] = JSON.parse(nv);
                break;
            case to1:
            case to2:
            case to3:
            case to4:
            case to5:
            case to6:
            case to7:
            case to8:
            case to9:
            case tag:
            case location:
                this[n] = nv;
                break;
            case style_prop:
                this.styleProp = JSON.parse(nv);
                break;
            case insert:
            case proxy:
                __classPrivateFieldSet(this, _proxy, nv !== 'null');
                break;
        }
    }
    get from1() {
        return __classPrivateFieldGet(this, _from1);
    }
    set from1(val) {
        __classPrivateFieldSet(this, _from1, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from2() {
        return __classPrivateFieldGet(this, _from2);
    }
    set from2(val) {
        __classPrivateFieldSet(this, _from2, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from3() {
        return __classPrivateFieldGet(this, _from3);
    }
    set from3(val) {
        __classPrivateFieldSet(this, _from3, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from4() {
        return __classPrivateFieldGet(this, _from4);
    }
    set from4(val) {
        __classPrivateFieldSet(this, _from4, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from5() {
        return __classPrivateFieldGet(this, _from5);
    }
    set from5(val) {
        __classPrivateFieldSet(this, _from5, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from6() {
        return __classPrivateFieldGet(this, _from6);
    }
    set from6(val) {
        __classPrivateFieldSet(this, _from6, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from7() {
        return __classPrivateFieldGet(this, _from7);
    }
    set from7(val) {
        __classPrivateFieldSet(this, _from7, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from8() {
        return __classPrivateFieldGet(this, _from8);
    }
    set from8(val) {
        __classPrivateFieldSet(this, _from8, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get from9() {
        return __classPrivateFieldGet(this, _from9);
    }
    set from9(val) {
        __classPrivateFieldSet(this, _from9, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to1() {
        return __classPrivateFieldGet(this, _to1);
    }
    set to1(val) {
        __classPrivateFieldSet(this, _to1, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to2() {
        return __classPrivateFieldGet(this, _to2);
    }
    set to2(val) {
        __classPrivateFieldSet(this, _to2, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to3() {
        return __classPrivateFieldGet(this, _to3);
    }
    set to3(val) {
        __classPrivateFieldSet(this, _to3, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to4() {
        return __classPrivateFieldGet(this, _to4);
    }
    set to4(val) {
        __classPrivateFieldSet(this, _to4, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to5() {
        return __classPrivateFieldGet(this, _to5);
    }
    set to5(val) {
        __classPrivateFieldSet(this, _to5, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to6() {
        return __classPrivateFieldGet(this, _to6);
    }
    set to6(val) {
        __classPrivateFieldSet(this, _to6, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to7() {
        return __classPrivateFieldGet(this, _to7);
    }
    set to7(val) {
        __classPrivateFieldSet(this, _to7, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to8() {
        return __classPrivateFieldGet(this, _to8);
    }
    set to8(val) {
        __classPrivateFieldSet(this, _to8, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get to9() {
        return __classPrivateFieldGet(this, _to9);
    }
    set to9(val) {
        __classPrivateFieldSet(this, _to9, val);
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
        __classPrivateFieldSet(this, _tag, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get location() {
        return __classPrivateFieldGet(this, _location);
    }
    set location(val) {
        __classPrivateFieldSet(this, _location, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
    get proxy() {
        return __classPrivateFieldGet(this, _proxy);
    }
    set proxy(val) {
        __classPrivateFieldSet(this, _proxy, val);
        __classPrivateFieldGet(this, _debouncer).call(this);
    }
}
_debouncer = new WeakMap(), _conn = new WeakMap(), _from1 = new WeakMap(), _from2 = new WeakMap(), _from3 = new WeakMap(), _from4 = new WeakMap(), _from5 = new WeakMap(), _from6 = new WeakMap(), _from7 = new WeakMap(), _from8 = new WeakMap(), _from9 = new WeakMap(), _to1 = new WeakMap(), _to2 = new WeakMap(), _to3 = new WeakMap(), _to4 = new WeakMap(), _to5 = new WeakMap(), _to6 = new WeakMap(), _to7 = new WeakMap(), _to8 = new WeakMap(), _to9 = new WeakMap(), _styleProp = new WeakMap(), _tag = new WeakMap(), _location = new WeakMap(), _proxy = new WeakMap();
define(ProxyProps);
