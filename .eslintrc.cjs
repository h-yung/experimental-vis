// use .eslintrc.cjs when running ESLint in JavaScript packages that specify "type":"module" in their package.json. Note that ESLint does not support ESM configuration at this time.

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    //   'plugin:@typescript-eslint/recommended', did not use
    // the following is always the last config, so that it can override other configs. This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
  },
};
