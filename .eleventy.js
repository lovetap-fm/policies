const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("img");

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    levels: [1, 2],
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "before",
    }),
    permalinkSymbol: "#",
  });

  eleventyConfig.setLibrary("md", markdownLibrary);
};
