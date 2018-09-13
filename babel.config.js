const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "62",
      chrome: "69",
      safari: "11.1",
      opera: "55"
    },
    }],
];

module.exports = { presets };
   
