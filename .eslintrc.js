// ######################################################################## //
// ######################################################################## //
// ##                                                                    ## //
// ##      This configuration is for text-editor to format the code      ## //
// ##                                                                    ## //
// ######################################################################## //
// ######################################################################## //

const { eslint } = require("@kcinternal/configuration");
const config = eslint(__dirname, { root: true, react: true }).build();
module.exports = config;
