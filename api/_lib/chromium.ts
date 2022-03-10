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
  viewportType: ViewportTypeName
) {
  const page = await getPage(isDev);
  await page.setViewport(getViewport(viewportType));
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
}

const getViewport = (viewportType: ViewportTypeName): Viewport => {
  const config = VIEWPORT_TYPES.find(({ name }) => name === viewportType);

  if (!config) {
    return { width: MAX_VIEWPORT_SIZE, height: (MAX_VIEWPORT_SIZE * 16) / 9 };
  }

  const { aspectRatio } = config;
  const width = aspectRatio >= 1 ? MAX_VIEWPORT_SIZE : Math.floor(MAX_VIEWPORT_SIZE * aspectRatio);
  const height = aspectRatio < 1 ? MAX_VIEWPORT_SIZE : Math.floor(MAX_VIEWPORT_SIZE / aspectRatio);

  console.log('💻 ビューポートを算出しました', { aspectRatio, width, height });

  return { width, height };
};
