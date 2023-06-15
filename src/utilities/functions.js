export function preventDefaultAndPropagation(event) {
  // event.stopPropagation() and event.preventDefault() stop the browser's default behavior and allow your code to run instead. Without them, the browser would otherwise navigate away from your page and open the files the user dropped into the browser window.

  // src: https://web.dev/read-files

  event.preventDefault();
  event.stopPropagation();
}

export function returnFileSize(size) {
  if (size < 1024) {
      return `${size} bytes`;
  } else if (size >= 1024 && size < 1048576) {
      return `${(size / 1024).toFixed(1)} KB`
  } else if (size >= 1048576) {
      return `${(size / 1048576).toFixed(1)} MB`;
  }
}