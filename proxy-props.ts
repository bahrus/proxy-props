import {define} from 'trans-render/define.js';
import {hydrate, disabled} from 'trans-render/hydrate.js';
import {XtallatX} from 'xtal-element/xtal-latx.js';
import {debounce} from 'xtal-element/debounce.js';

export const prop1 = 'prop1';
export const prop2 = 'prop2';
export const prop3 = 'prop3';
export const prop4 = 'prop4';
export const prop5 = 'prop5';
export const prop6 = 'prop6';
export const prop7 = 'prop7';
export const prop8 = 'prop8';
export const prop9 = 'prop9';

export const style_prop = 'style-prop';
export const tag   = 'tag';
export const map   = 'map';
export const display = 'display';
export class ProxyProps extends XtallatX(hydrate(HTMLElement)){

    #debouncer: any;
    constructor(){
        super();
        this.#debouncer = debounce(() => {
            if(!this.#conn || !this.#map) return;
            let next: HTMLElement | null = null;
            if(this.#display === 'none'){
                next = this.nextElementSibling as HTMLElement;
            }else{
                next = this.firstElementChild as HTMLElement;
            }
            if(next === null || next.localName !== this.#tag){
                next = document.createElement(this.#tag);
                next = this.insertAdjacentElement(this.#display === 'none' ? 'afterend' : 'beforeend', next) as HTMLElement;
            }
            for(const key in this.#map){
                const val = (<any>this)[key];
                if(val === undefined) continue;
                const prop = (<any>this.#map)[key];
                (<any>next)[prop] = val;
            }
            if(this.#styleProp !== undefined){
                Object.assign(next!.style, this.#styleProp);
            }
        }, 16);
    }
    static get is(){return 'proxy-props';}
    static get observedAttributes(){
        return [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, tag, map, disabled, style_prop, display];
    }
    attributeChangedCallback(n: string, ov: string, nv: string){
        switch(n){
            case display:
                this.#display = nv;
                break;
            case prop1:
            case prop2:
            case prop3:
            case prop4:
            case prop5:
            case prop6:
            case prop7:
            case prop8:
            case prop9:
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
    #display: string = 'none';
    get display(){
        return this.#display;
    }
    set display(val){
        this.setAttribute(display, val);
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

    #prop6: any | undefined;
    get prop6(){
        return this.#prop6;
    }
    set prop6(val){
        this.#prop6 = val;
        this.#debouncer();
    }

    #prop7: any | undefined;
    get prop7(){
        return this.#prop7;
    }
    set prop7(val){
        this.#prop7 = val;
        this.#debouncer();
    }

    #prop8: any | undefined;
    get prop8(){
        return this.#prop8;
    }
    set prop8(val){
        this.#prop8 = val;
        this.#debouncer();
    }

    #prop9: any | undefined;
    get prop9(){
        return this.#prop9;
    }
    set prop9(val){
        this.#prop9 = val;
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
        this.propUp([disabled, prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, tag, map, style_prop, display]);
        this.style.display = this.#display;
        this.#conn = true;
        if(this.#tag === undefined) return;
        this.#debouncer();
    }

}
define(ProxyProps);