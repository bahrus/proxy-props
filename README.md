# proxy-props

proxy-props solves two subtle problems with web components which use one-way, and two-way binding, and avoid three-way binding (explanation of what that phrase means is below).

Use case I -- passing props to lazy loaded elements.
Use case II -- providing a physical presence for a proxy.  This can help with xtal-decor.

One way binding -- pass-down -- element A passes data to element B. That is all.

Two way binding -- 

1.  "Reactive" (web) components -- Web component has "state" which is passed down, or distributed in some way, to the elements inside (ShadowRoot).
2.  Elements inside pass (via subscription) data back up to web component state controller, which then distributes derived state changes to other sub components in its (ShadowDOM) realm.

Three way binding -- more fluid components

```JavaScript
const threeWayBinding = {
    ...oneWayBinding,
    ...twoWayBinding,
    {
        threeway: markdown `
        1.  Web component state controller binding rules 
            are based on CSS Matches of the markup.
        2.  Strategically placed mutation observers notify 
            web component state controller of some new elements which match 
        `
    }
}
```

Fluid components, which require three-way binding aren't (IMO) a bad thing -- they are a more liberated, democratic  environment, where components can spontaneously have children, sibling clones, etc, without permission from the web component controller.  And those children can partake in the same binding mechanisms.

Actually, pass-down element supports this democratic environment also, with the help of mut-obs component, but only at peer-to-peer level automatically. When using care-of, need to manually insert mut-obs components.


