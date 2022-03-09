export const getGlobalCss = () => `
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP");

body {
  font-family: "Roboto", "M PLUS Rounded 1c", "Noto Sans JP", sans-serif;
  background-color: #223;
  background-size: 100% auto;

  height: 90vh;
  width: 80vw;
  padding: 5vh 10vw;

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
  letter-spacing: 4px;
  text-shadow: 8px 8px #fff, -8px 8px #fff, 8px -8px #fff,
    -8px -8px #fff, 8px 0px #fff, 0px 8px #fff,
    -8px 0px #fff, 0px -8px #fff;
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
  font-size: 60px;
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
    color: #ee8c5b;
  }
`;

export const getCssPatternC = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/6057300.jpg");
  }
  .content {
    color: #ee8c5b;
  }
`;

export const getCssPatternD = () => `
  body {
    background-image: url("https://og-image.z.konomi.app/images/6071843.jpg");
  }
  .content {
    color: #333c5e;
  }
`;
