import {define} from 'trans-render/define.js';
import {hydrate, disabled} from 'trans-render/hydrate.js';
import {XtallatX} from 'xtal-element/xtal-latx.js';
import {debounce} from 'xtal-element/debounce.js';

export const insert = 'insert';
export const tag   = 'tag';
export const location = 'location'
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

type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";

const mostProps = [disabled, insert, tag, location, proxy, from1, from2, from3, from4, from5, from6, from7, from8, from9, to1, to2, to3, to4, to5, to6, to7, to8, to9];

export class ProxyProps extends XtallatX(hydrate(HTMLElement)){

    #debouncer: any;
    constructor(){
        super();
        const veriKey = Symbol();
        this.#debouncer = debounce(() => {
            if(!this.#conn) return;
            if(this.#insert){
                let next: HTMLElement | null = null;
                switch(this.#location){
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
                if(next === null || next.localName !== this.#tag){
                    if(next !== null && (<any>next)[veriKey]) next.remove();
                    next = document.createElement(this.#tag);
                    next = this.insertAdjacentElement(this.#location, next) as HTMLElement;
                    (<any>next)[veriKey] = true;
                }
                if(this.#styleProp !== undefined){
                    Object.assign(next!.style, this.#styleProp);
                }
                if(!this.#proxy) return;
                for(let i = 1; i < 10; i++){
                    const val = (<any>this)['from' + i];
                    if(val === undefined) continue;
                    const prop = (<any>this)['to' + i];
                    if(prop === undefined) continue;
                    (<any>next)[prop] = val;
                }

            }


        }, 16);
    }
    static get is(){return 'proxy-props';}
    static get observedAttributes(){
        return mostProps.concat(style_prop);
    }

    #conn = false;
    connectedCallback(){
        this.propUp(mostProps.concat(['styeProp']));
        switch(this.location){
            case 'afterend':
            case 'beforebegin':
                this.style.display = 'none';
                break;
        }
        this.#conn = true;
        if(this.#tag === undefined) return;
        this.#debouncer();
    }

    attributeChangedCallback(n: string, ov: string, nv: string){
        switch(n){
            case from1:
            case from2:
            case from3:
            case from4:
            case from5:
            case from6:
            case from7:
            case from8:
            case from9:
                (<any>this)[n] = JSON.parse(nv);
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
                (<any>this)[n] = nv;
                break;
            case style_prop:
                this.styleProp = JSON.parse(nv);
                break;
            case insert:
            case proxy:
                (<any>this)[n] = nv !== null;
                break;
        }
    }


    #from1: any | undefined;
    get from1(){
        return this.#from1;
    }
    set from1(val){
        this.#from1 = val;
        this.#debouncer();
    }

    #from2: any | undefined;
    get from2(){
        return this.#from2;
    }
    set from2(val){
        this.#from2 = val;
        this.#debouncer();
    }

    #from3: any | undefined;
    get from3(){
        return this.#from3;
    }
    set from3(val){
        this.#from3 = val;
        this.#debouncer();
    }

    #from4: any | undefined;
    get from4(){
        return this.#from4;
    }
    set from4(val){
        this.#from4 = val;
        this.#debouncer();
    }

    #from5: any | undefined;
    get from5(){
        return this.#from5;
    }
    set from5(val){
        this.#from5 = val;
        this.#debouncer();
    }

    #from6: any | undefined;
    get from6(){
        return this.#from6;
    }
    set from6(val){
        this.#from6 = val;
        this.#debouncer();
    }

    #from7: any | undefined;
    get from7(){
        return this.#from7;
    }
    set from7(val){
        this.#from7 = val;
        this.#debouncer();
    }

    #from8: any | undefined;
    get from8(){
        return this.#from8;
    }
    set from8(val){
        this.#from8 = val;
        this.#debouncer();
    }

    #from9: any | undefined;
    get from9(){
        return this.#from9;
    }
    set from9(val){
        this.#from9 = val;
        this.#debouncer();
    }


    #to1: any | undefined;
    get to1(){
        return this.#to1;
    }
    set to1(val){
        this.#to1 = val;
        this.#debouncer();
    }

    #to2: any | undefined;
    get to2(){
        return this.#to2;
    }
    set to2(val){
        this.#to2 = val;
        this.#debouncer();
    }

    #to3: any | undefined;
    get to3(){
        return this.#to3;
    }
    set to3(val){
        this.#to3 = val;
        this.#debouncer();
    }

    #to4: any | undefined;
    get to4(){
        return this.#to4;
    }
    set to4(val){
        this.#to4 = val;
        this.#debouncer();
    }

    #to5: any | undefined;
    get to5(){
        return this.#to5;
    }
    set to5(val){
        this.#to5 = val;
        this.#debouncer();
    }

    #to6: any | undefined;
    get to6(){
        return this.#to6;
    }
    set to6(val){
        this.#to6 = val;
        this.#debouncer();
    }

    #to7: any | undefined;
    get to7(){
        return this.#to7;
    }
    set to7(val){
        this.#to7 = val;
        this.#debouncer();
    }

    #to8: any | undefined;
    get to8(){
        return this.#to8;
    }
    set to8(val){
        this.#to8 = val;
        this.#debouncer();
    }

    #to9: any | undefined;
    get to9(){
        return this.#to9;
    }
    set to9(val){
        this.#to9 = val;
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
        this.#tag = val;
        this.#debouncer();
    }

    #location : InsertPosition = 'afterend';
    get location(){
        return this.#location;
    }
    set location(val){
        this.#location = val;
        this.#debouncer();
    }

    #proxy = false;
    get proxy(){
        return this.#proxy;
    }
    set proxy(val){
        this.#proxy = val;
        this.#debouncer();
    }

    #insert = false;
    get insert(){
        return this.#insert;
    }
    set insert(val){
        this.#insert = val;
        this.#debouncer();
    }


}
define(ProxyProps);