## Issues:

- When uncached, styles load only after DOM elements are created, which causes visual change in styles
- Components are loaded implicitly, so one has to remember to load them via import for side effects only. This indirect dependency is easy to miss
