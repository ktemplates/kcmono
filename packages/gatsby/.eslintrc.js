const eslint = require("@kcinternal/configuration").eslint;
module.exports = eslint(__dirname, { react: true }).build();
