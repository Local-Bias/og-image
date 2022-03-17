export const getGlobalCss = () => `
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP");

body {
  font-family: "Roboto", "M PLUS Rounded 1c", "Noto Sans JP", 'Yu Gothic Medium', 'ヒラギノ角ゴ Pro W3', '游ゴシック体', 'Yu Gothic', YuGothic,
  'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;

  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #0003;

  height: calc(76vh + 12vmin);
  width: calc(76vw + 12vmin);
  padding: calc(12vh - 6vmin) calc(12vw - 6vmin);

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

  filter: drop-shadow(0 0.1vmax 0.4vmax #333c5ecc);
  letter-spacing: 4px;
  text-shadow:
  0.5vmax 0.5vmax #fff, 0.4vmax 0.5vmax #fff, 0.3vmax 0.5vmax #fff, 0.2vmax 0.5vmax #fff, 0.1vmax 0.5vmax #fff,
  0.5vmax 0.5vmax #fff, 0.5vmax 0.4vmax #fff, 0.5vmax 0.3vmax #fff, 0.5vmax 0.2vmax #fff, 0.5vmax 0.1vmax #fff,
  -0.5vmax 0.5vmax #fff, -0.4vmax 0.5vmax #fff, -0.3vmax 0.5vmax #fff, -0.2vmax 0.5vmax #fff, -0.1vmax 0.5vmax #fff,
  -0.5vmax 0.5vmax #fff, -0.5vmax 0.4vmax #fff, -0.5vmax 0.3vmax #fff, -0.5vmax 0.2vmax #fff, -0.5vmax 0.1vmax #fff,
  0.5vmax -0.5vmax #fff, 0.5vmax -0.4vmax #fff, 0.5vmax -0.3vmax #fff, 0.5vmax -0.2vmax #fff, 0.5vmax -0.1vmax #fff,
  0.5vmax -0.5vmax #fff, 0.4vmax -0.5vmax #fff, 0.3vmax -0.5vmax #fff, 0.2vmax -0.5vmax #fff, 0.1vmax -0.5vmax #fff,
  -0.5vmax -0.5vmax #fff, -0.5vmax -0.4vmax #fff, -0.5vmax -0.3vmax #fff, -0.5vmax -0.2vmax #fff, -0.5vmax -0.1vmax #fff,
  -0.5vmax -0.5vmax #fff, -0.4vmax -0.5vmax #fff, -0.3vmax -0.5vmax #fff, -0.2vmax -0.5vmax #fff, -0.1vmax -0.5vmax #fff,
     0.5vmax 0px #fff, 0px 0.5vmax #fff,
    -0.5vmax 0px #fff, 0px -0.5vmax #fff;
  font-weight: 800;
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
  font-size: 6vmax;
}
`;

export const getCssPatternA = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5291450.jpg");
  }
  .content {
    color: #333c5e;
  }
`;

export const getCssPatternB = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/6056289.jpg");
  }
  .content {
    color: #ee6911;
  }
`;

export const getCssPatternC = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/6057300.jpg");
  }
  .content {
    color: #ee6911;
  }
`;

export const getCssPatternD = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5315093.jpg");
  }
  .content {
    color: #00517c;
  }
`;

export const getCssPatternE = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5348495.jpg");
  }
  .content {
    color: #2075ce;
  }
`;

export const getCssPatternF = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5586989.jpg");
  }
  .content {
    color: #c25d53;
  }
`;

export const getCssPatternG = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5294848.jpg");
  }
  .content {
    color: #135e4c;
  }
`;

export const getCssPatternH = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5566879.jpg");
  }
  .content {
    color: #c25d53;
  }
`;

export const getCssPatternI = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/5621334.jpg");
  }
  .content {
    color: #2075ce;
  }
`;

export const getCssPatternJ = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/6084843.jpg");
  }
  .content {
    color: #333c5e;
  }
`;
