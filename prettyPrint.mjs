export const printPretty = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return 
  }
  if (node.right !== null) {
    printPretty(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    printPretty(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
