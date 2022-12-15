export function rightJustify(inText: string): string {
  // split text into lines.
  let arrLines: string[] = inText.split(/\r?\n/);

  // get length of longest line.
  let longestLength: number = arrLines.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  }).length;

  // iterate over the list of lines, shifting the spaces to right align the code.
  const newTxt: string = arrLines
    .map((line) => {
      let numSpace = line.search(/\S|$/);
      let stripLine = line.trim();

      // Create the spaces for the specific line.
      // experienced errors with string.repeat().....
      let pre_space: string = Array(1 + (longestLength - line.length)).join(
        " "
      );
      let post_space: string = Array(1 + numSpace).join(" ");

      return pre_space + stripLine + post_space;
    })
    .join("\n");

  return newTxt;
}
