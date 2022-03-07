import { marked } from "marked";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss(fontSize: string) {
  return `
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP");
  @import url("https://fonts.googleapis.com/css2?family=Roboto");
  
  body {
    font-family: "Noto Sans JP", "Roboto", sans-serif;
    background-color: #223;
    background-image: url("https://og-image.z.konomi.app/images/5291450.jpg");
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .content {
    filter: drop-shadow(0 5px 8px #000a);
    letter-spacing : 8px;
    text-shadow: 
          10px  10px 0px #fff,
        -10px  10px 0px #fff,
          10px -10px 0px #fff,
        -10px -10px 0px #fff,
          10px  0px 0px #fff,
          0px  10px 0px #fff,
        -10px  0px 0px #fff,
          0px -10px 0px #fff; 
    color: #333c5e;
    font-weight: 600;
  }

  .heading {
    font-size: ${sanitizeHtml(fontSize)};
  }`;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text, md, fontSize, images, widths, heights } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(fontSize)}
    </style>
    <body>
        <div class="content">
            <div class="heading">${emojify(
              md ? marked(text) : sanitizeHtml(text)
            )}
            </div>
        </div>
    </body>
</html>`;
}
