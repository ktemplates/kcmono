const webpack = require("@internal/configuration").webpack;
module.exports = webpack(__dirname, {
  target: "node",
  react: true,
  index: "index.ts",
}).build();