import { EditorState, convertFromHTML, ContentState, convertToRaw } from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';

/**
 * Converts html to draft object.
 * @param {string} data - put html string data.
 * @returns {object} returns draft object.
 */
export function htmlToDraft(data) {
  const blocksFromHTML = convertFromHTML(data);
  return EditorState.createWithContent(
    ContentState.createFromBlockArray(blocksFromHTML.contentBlocks),
  );
}

/**
 * Converts draft object to html string.
 * @param {object} data - draft object.
 * @returns {*} returns draft object.
 */
export function draftToHtml(data) {
  return draftjsToHtml(convertToRaw(data.getCurrentContent()));
}

/**
 * Gets draft object's actual text length.
 * @param {object} data - draft object.
 * @returns {number} actual text length.
 */
export function draftTextLength(data) {
  return convertToRaw(data.getCurrentContent()).blocks.reduce(
    (prev, next) => ({ text: prev.text + next.text }),
    { text: '' },
  ).text.length;
}
