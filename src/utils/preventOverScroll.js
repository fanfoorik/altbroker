function preventOverScroll(event) {
  const { currentTarget } = event;
  const delta = -event.deltaY;
  // Over scroll up
  const scrollUp = delta > 0 && currentTarget.scrollTop <= 0;
  // Over scroll down
  const scrollUDown = delta < 0 &&
    currentTarget.scrollTop >= currentTarget.scrollHeight - currentTarget.clientHeight;

  if (scrollUp || scrollUDown) {
    event.preventDefault();
  }
}

/**
 * Adds mousewheel event listener to detect over scroll prevention.
 * @param {(Node|Array.<Node>)} element - DOM node or an array of nodes.
 */
export default function (element) {
  if (element) {
    if (Array.isArray(element)) {
      element.forEach((item) => {
        item.addEventListener('mousewheel', preventOverScroll);
      });
    } else {
      element.addEventListener('mousewheel', preventOverScroll);
    }
  }
}
