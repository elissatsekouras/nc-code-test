export default function flexFont(
  resizeToParentId: string,
  element: HTMLElement,
) {
  const parentDiv = document.getElementById(resizeToParentId);

  if (!parentDiv || !element) return;

  const parentWidth = parentDiv?.offsetWidth;

  let calculatedFontSize = window
    .getComputedStyle(element, null)
    .getPropertyValue('font-size');
  let fontSize = parseFloat(calculatedFontSize);

  const maxAttempts = 100;
  let attempts = 0;
  while (attempts < maxAttempts && element.offsetWidth > parentWidth) {
    fontSize = fontSize - 1;
    element.style.fontSize = fontSize + 'px';
    attempts++;
  }

  attempts = 0;
  while (attempts < maxAttempts && parentWidth > element.offsetWidth) {
    fontSize = fontSize + 1;
    element.style.fontSize = fontSize + 'px';
    attempts++;
  }
}
