const wc = require("./index");

test("Wordcount helper wordCountCallback", () => {
  const html = "<p>alpha bravo charlie</p>";
  expect(wc.wordCountCallback(html)).toBe(3);
});

test("Wordcount helper htmlToPlainText", () => {
  const html = `
        <img src="./image.png" class="one two three">
        <p>alpha <em>bravo</em> charlie <a href='#one' target='_blank'>delta</a> echo</p>
    `;
  const expected = "alpha bravo charlie delta echo";
  expect(wc.htmlToPlainText(html)).toBe(expected);
});

test("Wordcount helper plainTextMetadata", () => {
  const html = "alpha bravo charlie";
  const expected = { words: [3] };
  expect(wc.plainTextMetadata(html)).toEqual(expected);
});

test("Wordcount eleventy addFilter mock", () => {
  const fn = jest.fn();
  const eleventyConfig = { addFilter: fn };

  wc.wordCount(eleventyConfig);

  expect(fn).toHaveBeenCalledWith("wordCount", wc.wordCountCallback);
});
