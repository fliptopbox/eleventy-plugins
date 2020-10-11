# Eleventy

A collection of eleventy plugins

## WordCount

This plugin creates a liquid filter that takes a string, like 11ty
content, then strips HTML tags, trims the lines, splits the text
and returns the word count.

### Install the NPM package in eleventy folder

```bash
npm install -S eleventy-plugin-wordcount
```

### Create or modify your `.eleventy.js` and add the plugin

```javascript
const wordCount = require("eleventy-plugin-wordcount");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(wordCount);
};
```

### Use the plugin filter in your `liquid` templates

```html
<strong>Contains {{ content | wordCount }} words</strong>
```
