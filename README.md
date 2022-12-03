# Experimental visual bits

## Current state
- Movement is tracked in `.tracked-area` debounced 10ms.
- Layout/width issues without placeholder text in trackpad.

Considering whether experiment will want a backend and some data at some point.

## To-dos

Three js: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

Randomization fed into state.

Swipey effect? how to verify without production...

- https://www.npmjs.com/package/react-swipeable
- https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
- https://stackoverflow.com/questions/73005546/how-do-i-make-this-slideshow-react-to-swiping-on-a-mobile-device

Far-away times: TypeScript

### Tools and libraries

- Vite + React
- Threejs (...not yet)

Helpful snips via Josh W Comeau:

- [useMousePosition](https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/)
- [debounce](https://www.joshwcomeau.com/snippets/javascript/debounce/)

Styling

- [Ant Design](https://ant.design/) for some odds and ends (icons, color ref, maybe a button).

Cleanup

- husky
- eslint (and helpful shortlist for config)[https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs], except make sure to use **.eslintrc.cjs** not .js, all else same.
- prettier
- pretty-quick

**Foibles to avoid**

- For whatever reason despite cloning an empty repo, I needed to `git init` again? husky installation was not working otherwise.
- Someday soon (this 11-year-old warning)[https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important] will hit me.
