## Pros:

- Much better encapsulation and compactness compared to not using Web Components in VanillaJS. Web Component is in and of itself a tight connection between DOM and model. As a class, it's the one logical place to store data at, and as being an actual element it offers direct access to its DOM representation (both to its shadow DOM if present and to itself as Element and Node).

## Cons:

- It's a challenge to keep model and DOM in sync. Every little model change needs to be imperatively projected on to the DOM.

- Mixing logic and DOM operations seems inevitable, creating harder to follow code

- One has to be really aware of performance of every critical component. This requires experience, due diligence and additional work. Eg., in chase of more declarative markup, it's easy to forget that `innerHTML` is not very performant, especially if used in elements that get created many times over. This problem poses additional work, since in this case it's better to use a `<template>` which has to be added to DOM and copies every time such component gets created.

- There is no callback on Custom Elements that would fire asynchronously after element creation, which makes it problematic when passing data to elements. This is not a problem when custom element gets created via `document.createElement()`, because then the standard `connectedCallback` gets called only upon connecting that element to DOM, which present opportunity to set data on it which `connectedCallback` can then process. But it presents difficulties when custom element gets created via `innerHTML`ing it to parent element. In that case, the `connectedCallback` fires right away, giving no chance for "later" initialization. It forces then to introduce an `init` method through which deps get injected and the component get's fully set up. While not being such a problem, it is a bit awkward and feels quite a bit arbitrary.

- When uncached, styles load only after DOM elements are created, which causes visual change in styles

- Components are loaded implicitly, so one has to remember to load them via import for side effects only. This indirect dependency is easy to miss
