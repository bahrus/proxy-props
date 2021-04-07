# proxy-props [TODO]

proxy-props is a non-visual custom element that strives to solve two subtle problems with traditional web components that use planned, single channel two-way binding.  Components that wish to avoid directly employing sponaneous, multiple channel two-way binding may find this web component to be useful.  Explanation of what these phrases means is below.

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


## Glossary


### Real-time, mediated one-way binding:

Element A passes data to existing, interested elements in one direction (physical or logical).   A peer-to-peer mediator may exist between them to provide more loose coupling. That is all.

Example:

[on-to-me](https://github.com/bahrus/pass-down).

### One way, mediated binding, with support for spontaneity.

[pass-down](https://github.com/bahrus/pass-down) --

Element A passes data to existing, interested elements in one direction.  New elements can arrive on the scene somehow, no questions asked, and still receive that data.

Underneath the covers, it uses a mutation observer to monitor for new arrivals.

### Planned, two-way binding, single channel communication 

Web component acts as a controller, carefully (micro-)managing sub components within its purview, but

Uses single channel communication in both directions, one channel per direction

1.  "Reactive" (web) components -- Web component has "state" which is passed down exclusively via props, to the elements inside its encapsulated ShadowDOM.
2.  Elements inside pass (via subscription) data back up to web component state controller via (custom) events, which then reapplies data flow back as described by point 1. It distributes derived state changes to other sub components in its (ShadowDOM) realm.
3.  Creation of new elements inside is carefully choreographed by the web component state controller.

### Two-way binding, with support for a non-planned fluid, spontaneous, party atmosphere within the ShadowDOM realm 

Additional channels, useful for more fluid components with a sense of identity

1.  Hydrating state from both light and server-rendered Shadow children
2.  Natively supported css-based mappings, which attach behavior when elements matching css rules are added into the live DOM tree -- namely custom elements, and, I guess built-in "is" extensions.
3.  Additional custom behavior associated with css-based matching, triggered by mutation or css observers (for example.)  

Examples of 3:  [xtal-decor](https://github.com/bahrus/xtal-decor)



