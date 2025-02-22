import { IncomingMessage } from 'http';
import { parse } from 'url';
import { MAX_VIEWPORT_SIZE, ParsedRequest, Theme, ViewportTypeName, VIEWPORT_TYPES } from './types';

export function parseRequest(req: IncomingMessage) {
  console.log('ℹ️  HTTP ' + req.url);

  const { pathname, query } = parse(req.url || '/', true);
  const { images, theme, md, viewportType, size } = query || {};

  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }
  if (Array.isArray(viewportType)) {
    throw new Error('Expected a single viewport');
  }

  console.log('ℹ️  ', { pathname, query });

  const arr = (pathname || '/').slice(1).split('.');
  let extension = '';
  let text = '';
  if (arr.length === 0) {
    text = '';
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop() as string;
    text = arr.join('.');
  }

  const parsedRequest: ParsedRequest = {
    viewportType: VIEWPORT_TYPES.map(({ name }) => name).includes(
      (viewportType || '') as ViewportTypeName
    )
      ? (viewportType as ViewportTypeName)
      : 'horizontal',
    fileType: extension === 'png' ? extension : 'jpeg',
    text: decodeURIComponent(text),
    theme: theme === 'dark' ? 'dark' : 'light',
    md: md === '1' || md === 'true',
    images: getArray(images),
    size: size && !isNaN(Number(size)) ? Number(size) : MAX_VIEWPORT_SIZE,
  };
  parsedRequest.images = getDefaultImages(parsedRequest.images, parsedRequest.theme);
  return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
  if (typeof stringOrArray === 'undefined') {
    return [];
  } else if (Array.isArray(stringOrArray)) {
    return stringOrArray;
  } else {
    return [stringOrArray];
  }
}

function getDefaultImages(images: string[], theme: Theme): string[] {
  const defaultImage =
    theme === 'light'
      ? 'https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg'
      : 'https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-white.svg';

  if (!images || !images[0]) {
    return [defaultImage];
  }
  if (
    !images[0].startsWith('https://assets.vercel.com/') &&
    !images[0].startsWith('https://assets.zeit.co/')
  ) {
    images[0] = defaultImage;
  }
  return images;
}
