export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export const MAX_VIEWPORT_SIZE = 1280;

export const VIEWPORT_TYPES = [
  { name: 'horizontal', aspectRatio: 16 / 9 },
  { name: 'vertical', aspectRatio: 9 / 16 },
  { name: 'book', aspectRatio: 1 / Math.sqrt(2) },
] as const;

export type ViewportTypeName = typeof VIEWPORT_TYPES[number]['name'];

export interface ParsedRequest {
  viewportType: ViewportTypeName;
  fileType: FileType;
  text: string;
  theme: Theme;
  md: boolean;
  fontSize: string;
  images: string[];
  widths: string[];
  heights: string[];
}
