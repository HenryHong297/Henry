module.exports = function(eleventyConfig) {
  // Copy photos and assets to the output
  eleventyConfig.addPassthroughCopy("src/photos");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Projects collection from markdown files
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
