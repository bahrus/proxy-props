import {define} from 'trans-render/define.js';
import {hydrate, disabled} from 'trans-render/hydrate.js';
import {XtallatX} from 'xtal-element/xtal-latx.js';
import {debounce} from 'xtal-element/debounce.js';

export const prop1 = 'prop1';
export const prop2 = 'prop2';
export const prop3 = 'prop3';
export const prop4 = 'prop4';
export const prop5 = 'prop5';
export const style_prop = 'style-prop';
export const tag   = 'tag';
export const map   = 'map';
export class ProxyProps extends XtallatX(hydrate(HTMLElement)){

    #debouncer: any;
    constructor(){
        super();
        this.#debouncer = debounce(() => {
            if(!this.#conn || !this.#map) return;
            let next = this.nextElementSibling;
            if(next === null || next.localName !== this.#tag){
                next =document.createElement(this.#tag);
                next = this.insertAdjacentElement('afterend', next);
            }
            for(const key in this.#map){
                const val = (<any>this)[key];
                if(val === undefined) continue;
                const prop = (<any>this.#map)[key];
                (<any>next)[prop] = val;
            }
        }, 16);
    }
    static get is(){return 'proxy-props';}
    static get observedAttributes(){
        return [prop1, prop2, prop3, prop4, prop5, tag, map, disabled, style_prop];
    }
    attributeChangedCallback(n: string, ov: string, nv: string){
        switch(n){
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
                this.#tag = nv;
                this.#debouncer();
                break;
        }
    }
    #prop1: any | undefined;
    get prop1(){
        return this.#prop1;
    }
    set prop1(val){
        this.#prop1 = val;
        this.#debouncer();
    }

    #prop2: any | undefined;
    get prop2(){
        return this.#prop2;
    }
    set prop2(val){
        this.#prop2 = val;
        this.#debouncer();
    }

    #prop3: any | undefined;
    get prop3(){
        return this.#prop3;
    }
    set prop3(val){
        this.#prop3 = val;
        this.#debouncer();
    }

    #prop4: any | undefined;
    get prop4(){
        return this.#prop4;
    }
    set prop4(val){
        this.#prop4 = val;
        this.#debouncer();
    }

    #prop5: any | undefined;
    get prop5(){
        return this.#prop5;
    }
    set prop5(val){
        this.#prop5 = val;
        this.#debouncer();
    }

    #styleProp: any | undefined;
    get styleProp(){
        return this.#styleProp;
    }
    set styleProp(val){
        this.#styleProp = val;
        this.#debouncer();
    }

    #tag!: string;
    get tag(){
        return this.#tag;
    }
    set tag(val){
        this.setAttribute(tag, val);
    }

    #map!: {[key: string]: any};
    get map(){
        return this.#map
    }
    set map(val){
        this.#map = val;
        this.#debouncer();
    }

    #conn = false;
    connectedCallback(){
        this.style.display = 'none';
        this.propUp([disabled, prop1, prop2, prop3, prop4, prop5, tag, map, style_prop]);
        this.#conn = true;
        if(this.#tag === undefined) return;
        this.#debouncer();
    }

}
define(ProxyProps);