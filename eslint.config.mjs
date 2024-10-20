module.exports = {
  env: {
    mocha: true, // This sets the mocha environment
    node: true,  // This allows Node.js globals
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
  },
  extends: 'eslint:recommended',
  rules: {
    // Add any specific rules you want here
  },
};
