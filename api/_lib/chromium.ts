import core, { Viewport } from 'puppeteer-core';
import { getOptions } from './options';
import { FileType, MAX_VIEWPORT_SIZE, ViewportTypeName, VIEWPORT_TYPES } from './types';
let _page: core.Page | null;

async function getPage(isDev: boolean) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

export async function getScreenshot(
  html: string,
  type: FileType,
  isDev: boolean,
  size: number,
  viewportType: ViewportTypeName
) {
  const page = await getPage(isDev);
  await page.setViewport(getViewport(size, viewportType));
  await page.setContent(html);
  const file = await page.screenshot({ type, quality: 70 });

  return file;
}

const getViewport = (size: number, viewportType: ViewportTypeName): Viewport => {
  const config = VIEWPORT_TYPES.find(({ name }) => name === viewportType);

  if (!config) {
    return { width: size, height: (size * 16) / 9 };
  }

  const { aspectRatio } = config;
  const width = aspectRatio >= 1 ? size : Math.floor(size * aspectRatio);
  const height = aspectRatio < 1 ? size : Math.floor(size / aspectRatio);

  console.log('💻 ビューポートを算出しました', { aspectRatio, width, height });

  return { width, height };
};
