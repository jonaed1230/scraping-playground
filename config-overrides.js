const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "lib",
    style: true
  }),
  addLessLoader({
      javascriptEnabled: true,
  })
);
