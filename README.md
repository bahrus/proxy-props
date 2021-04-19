# proxy-props [TODO]

proxy-props (p-p for short) is a non-visual custom element that passes property value changes from its host custom element container, to down-stream elements.

It is a member of the [p-et-alia](https://github.com/bahrus/p-et-alia) family of web components.

proxy-props is only compatible with host custom element container elements that provide the ability to externally subscribe to property changes.

The ProxyProps class has a method which can be overridden, which specifies how to subscribe to the host element.  The built-in mechanism for this subscription is using the signature used by [xtal-element](https://github.com/bahrus/xtal-element) web components:

```JavaScript
container.reactor.subscribe(['prop1', 'prop2'], (el) => {
    //do something
})
```


## Syntax

Use case I:

```html

...
<laissez-dom>
    <template>
        <proxy-props on-prop-change-of='["list"]' to=[-list] val=... init-val=...></proxy-props>
        <i-bid -list></i-bid>
    </template>
</laissez-dom>
```

closest property means don't use shadow to get container.




