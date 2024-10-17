import { buildTree } from "./buildTree.mjs";
import { printPretty } from "./prettyPrint.mjs";
import * as operations from "./operations.mjs";

export function tree(treeArray) {
  let root = buildTree(treeArray);

  return {
    treeArray,
    root,
    prettyPrint: () => printPretty(root),
    insert: (value) => operations.insert(value, root),
    deleteItem: (value) => operations.deleteItem(value, root),
    find: (value) => operations.find(value, root),
    levelOrder: (callback) => operations.levelOrder(root, callback),
    inOrder: (callback) => operations.inOrder(root, callback),
    postOrder: (callback) => operations.postOrder(root, callback),
    preOrder: (callback) => operations.preOrder(root, callback),
    height: (node) => operations.height(node),
    depth: (node) => operations.depth(node, root),
    isBalanced: () => operations.isBalanced(root),
      reBalance: () => root = operations.reBalance(root),
  };
}
