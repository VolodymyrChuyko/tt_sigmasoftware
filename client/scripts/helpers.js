export default function setStyles(element, styles) {
  for (const style in styles) {
    element.style[style] = styles[style];
  }
}
