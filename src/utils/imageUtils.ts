export function getImageUrl(imageFileName: string): string {
    return new URL(`../images/midjourney/${imageFileName}`, import.meta.url).href;
  }