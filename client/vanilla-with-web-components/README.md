## Pros:

- Much better encapsulation and compactness compared to not using Web Components in VanillaJS. Web Component is in and of itself a tight connection between DOM and model. As a class, it's the one logical place to store data at, and as being an actual element it offers direct access to its DOM representation (both to its shadow DOM if present and to itself as Element and Node).

## Cons:

- It's a challenge to keep model and DOM in sync. Every little model change needs to be imperatively projected on to the DOM.
- Mixing logic and DOM operations seems inevitable, creating harder to follow code
- When uncached, styles load only after DOM elements are created, which causes visual change in styles
- Components are loaded implicitly, so one has to remember to load them via import for side effects only. This indirect dependency is easy to miss
