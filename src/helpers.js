/*
 * Class Name: helpers.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=dGM_T5gqmrA
 *
 */

export default function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
