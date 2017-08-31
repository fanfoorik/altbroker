export function parseCheckObjects(objects, checked, raise) {
  const checkedFirst = [];
  const objs = objects.filter((obj) => {
    const item = obj;
    if (checked.indexOf(item.ID) !== -1) {
      item.checked = true;
      checkedFirst.push(item);
      return !raise;
    }
    item.checked = false;
    return true;
  });
  return {
    checked: checkedFirst,
    all: raise ? [].concat(checkedFirst, objs) : objs,
  };
}

export function filterItems(search, objects) {
  return objects.filter((obj) => {
    const item = obj;
    const string = item.SHOT_NAME || item.NAME || 'Нет имени/названия';
    const regexVal = search.replace(/\W/g, '\\$&');
    const regex = new RegExp(`(${regexVal})`, 'gi');
    const result = search.length ? string.replace(regex, '<u class="hl">$1</u>') : string;

    if (string.match(regex)) {
      item.name = result;
      return item;
    }
    return false;
  });
}
