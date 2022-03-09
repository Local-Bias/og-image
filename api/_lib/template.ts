import { marked } from "marked";
import {
  getCssPatternA,
  getCssPatternB,
  getCssPatternC,
  getCssPatternD,
  getGlobalCss,
} from "./css";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";

const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

export function getHtml(parsedReq: ParsedRequest) {
  const { text, md } = parsedReq;

  const cssPatterns = [getCssPatternA(), getCssPatternB(), getCssPatternC()];

  const pattern = Math.floor(Math.random() * cssPatterns.length);

  console.log("🐢 choosed index", pattern);

  return `<!DOCTYPE html>
<html>
  <meta charset="utf-8" />
  <title>konomi.app og-image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${getGlobalCss()}${cssPatterns[pattern]}
  </style>
  <body>
    <div class="content">
      <div class="heading">
        ${emojify(md ? marked(text) : sanitizeHtml(text))}
      </div>
    </div>
    <div class="image">
      <img src="https://og-image.z.konomi.app/images/casual-life-3d-pile-of-books.png" />
    </div>
  </body>
</html>
  `;
}
