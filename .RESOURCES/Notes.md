# Dinosaur Project

- <https://github.com/udacity/OOJS-screencasts>

## Get Random Number 1-6

```js
Math.floor(Math.random() * 7);
```

===

## Tailwind

- Needed to set Tailwind to `const` and then pass the path of the config to the
  declaration. See example:

  ```js
  const tailwindcss = require('tailwindcss');

  module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')]
  };
  ```
