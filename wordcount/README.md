# Eleventy

A collection of eleventy plugins

## WordCount

This plugin creates a filter that takes a string, like 11ty content,
then strips HTML tags, trims the lines and returns the word count.

1. Install the NPM package in eleventy folder

```bash
npm install -S eleventy-plugin-wordcount
```

2. Create or modify your `.eleventy.js` and add the plugin

```javascript
const { wordCount } = require("eleventy-plugin-wordcount");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(wordCount);
};
```

3. Use the plugin filter in your `liquid` templates

```html
<strong>Contains {{ content | wordCount }} words</strong>
```
