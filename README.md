# proxy-props

proxy-props is a non-visual custom element that strives to solve two subtle problems with web components which use one-way, and single channel two-way binding, and which avoid multiple channel two-way binding (explanation of what that phrase means is below).

Use case I -- passing props to lazy loaded elements.
Use case II -- providing a physical presence for a proxy.  This can help with [xtal-decor](https://github.com/bahrus/xtal-decor).


## Syntax

Use case I:

```html
<proxy-props -props -child-list -subtree to=laissez-dom care-of=i-bid></proxy-props>
...
<laissez-dom>
    <template>
        <i-bid></i-bid>
    </template>
</laissez-dom>
```

adds mutation observer on first nextSiblingElement laissez-dom until first i-bid match count is found.  Creates proxy object on i-bid, sets props property to the proxy

Use case II:

```html
<be-sorted-impl upgrade=* if-wants-to-be="sorted"></be-sorted-impl>

<some-container>
    ...
    <proxy-props proxy=be-sorted-impl to=ul -props></proxy-props>
    <ul be-sorted>
        <li>
            <span>Zorse</span>
        </li>
    </ul>
    ...
</some-container>

```

proxy does "upsearch" match.  to uses nextElementSibling first match.


Explanation of binding categorization.

One way binding -- [pass-down](https://github.com/bahrus/pass-down) -- element A passes data to element B via a peer-to-peer mediator. That is all.

Two way binding -- 

Single channel in both directions, one channel per direction

1.  "Reactive" (web) components -- Web component has "state" which is passed down via props, or distributed in some way, to the elements inside (ShadowRoot).
2.  Elements inside pass (via subscription) data back up to web component state controller via (custom) events, which then distributes derived state changes to other sub components in its (ShadowDOM) realm.

Multiple channel two-way binding --

Additional channels, useful for more fluid components with a sense of identity

1.  Hydrating state from (light) children
2.  Natively supported css-based mappings, which attach behavior when elements matching css rules is added into the live DOM tree -- namely custom elements, and, I guess built-in is extensions.
3.  Additional custom behavior associated with css-based matching, triggered by mutation observers (for example.)  Examples:  xtal-decor



Fluid components, which require multi-channel communication aren't (IMO) a bad thing -- they are a more liberated, democratic  environment, where components can spontaneously have children, sibling clones, etc, without permission from the web component controller.  And those children can partake in the same binding mechanisms.

Actually, pass-down element supports this democratic environment also, with the help of mut-obs component, but only at peer-to-peer level automatically. When using care-of, need to manually insert mut-obs components.


