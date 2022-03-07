import { marked } from "marked";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";

const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss() {
  return `
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP");
  @import url("https://fonts.googleapis.com/css2?family=Roboto");
  
  body {
    font-family: "Noto Sans JP", "Roboto", sans-serif;
    background-color: #223;
    background-image: url("https://og-image.z.konomi.app/images/5291450.jpg");
    background-size: 100% auto;

    height: calc(100vh - 14vmin);
    width: calc(100vw - 14vmin);
    padding: 7vmin;

    display: grid;
    grid-template:
      "content content" 50%
      "content content" 50%/
      40% 60%;
  
    align-items: center;
    justify-content: center;
  
    position: relative;
    text-align: center;
  }
  
  .content {
    grid-area: content;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(0 5px 8px #333c5eaa);
    letter-spacing: 8px;
    text-shadow: 10px 10px #fff, -10px 10px #fff, 10px -10px #fff,
      -10px -10px #fff, 10px 0px #fff, 0px 10px #fff, -10px 0px #fff,
      0px -10px #fff;
    color: #333c5e;
    font-weight: 600;
  }

  .image {
    grid-area: image;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .image img {
    width: 80%;
    height: auto;
  }

  .heading {
    font-size: 120px;
  }`;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text, md } = parsedReq;
  return `<!DOCTYPE html>
<html>
  <meta charset="utf-8" />
  <title>konomi.app og-image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${getCss()}
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
