const tag = new RegExp("(<[^>]+>)", "g");
const entities = new RegExp("(&w+;)", "gi");

function htmlToPlainText(string) {
  return `${string || ""}`
        .trim()
        .replace(/\s+/g, " ")
        .replace(tag, "")
        .replace(entities, "")
        .trim();
}

function plainTextMetadata(text) {
  const words = `${text || ""}`
    .trim()
    .split(/\n+/)
    .filter((s) => s)
    .map((s) => s.split(/\s+/).length);

  return { words };
}

function wordCountCallback(value) {
  const text = htmlToPlainText(value);
  const { words } = plainTextMetadata(text);

  return words.reduce((a, c) => a + c);
}

function wordCount(eleventyConfig) {
  eleventyConfig.addFilter("wordCount", wordCountCallback);
}

module.exports = {
  htmlToPlainText,
  plainTextMetadata,
  wordCountCallback,
  wordCount,
};
