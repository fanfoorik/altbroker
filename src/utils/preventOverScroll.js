function preventOverScroll(event) {
  const { currentTarget } = event;
  const delta = -event.deltaY;
  const scrollIndex = currentTarget.scrollHeight - currentTarget.clientHeight;
  // Over scroll up
  const scrollUp = delta > 0 && currentTarget.scrollTop <= 0 && scrollIndex;
  // Over scroll down
  const scrollUDown = delta < 0 && scrollIndex && currentTarget.scrollTop >= scrollIndex;

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
