import { treeNode } from "./treeNode.mjs";

export function buildTree(data = this.treeArray) {
  // get middle and make it root
  // get middle of left side and make node
  // get middle of right side and make node
  let half = Math.floor(data.length / 2);
    let middle, left, right;

  if (data.length % 2 == 0) {
    middle = data[half - 1];
    left = data.slice(0, half - 1);
    right = data.slice(half);
  } else {
    middle = data[half];
    left = data.slice(0, half);
      right = data.slice(half + 1);
  }

//   console.log(`array = ${data}\nleft = ${left}\nright = ${right}\nmiddle = ${middle}`);

    if (left.length == 0 && right.length == 0) {
    // console.log("base", data);

    return treeNode(middle);
  } else {
    return treeNode(middle, buildTree(left), buildTree(right));
  }
}
