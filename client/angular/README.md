## Pros:

- From the get go angular enforces good practices from project contributors, like separation into modules, components, services etc.

- The CLI is very useful. Afaik, the `create-react-app` doesn't have the same capability and one has to install different tool to be able to eg. create components from shell. It's definitely nice to have those capabilities in one tool.

- It's nice that one can put event handlers on the host elements. This appears to be not possible in React (verify!).

## Cons:

- One needs to be careful about state changes when using OnPush = he has to maintain immutability. This makes it bit harder to use for beginners and is definitely as easy to use as MobX.

- Need to order `keyvalue` pipe's result

- It's relatively hard to rename components
