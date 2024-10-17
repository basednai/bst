import { tree } from "./tree.mjs";
/* Create a binary search tree from an array of random numbers < 100. */
const input = new Array(7).fill(0);
input.forEach(
  (elem, index, array) => (array[index] = Math.floor(Math.random() * 100))
);

const testTree = tree(input);

/* Confirm that the tree is balanced by calling isBalanced. */
testTree.prettyPrint();
console.log(testTree.isBalanced());

/* Print out all elements in level, pre, post, and in order. */
console.log("level");
testTree.levelOrder(traversalCallback);
console.log("\n");
console.log("pre");
testTree.preOrder(traversalCallback);
console.log("\n");
console.log("post");
testTree.postOrder(traversalCallback);
console.log("\n");
console.log("in");
testTree.inOrder(traversalCallback);
console.log("\n");

/* Unbalance the tree by adding several numbers > 100.
 */ testTree.insert(Math.floor(Math.random() * 100 + 100));
testTree.insert(Math.floor(Math.random() * 100 + 100));
testTree.insert(Math.floor(Math.random() * 100 + 100));
testTree.insert(Math.floor(Math.random() * 100 + 100));

/* Confirm that the tree is balanced by calling isBalanced. */
testTree.prettyPrint();
console.log(testTree.isBalanced());

/* Balance the tree by calling rebalance. */
testTree.reBalance();

/* Confirm that the tree is balanced by calling isBalanced. */
testTree.prettyPrint();
console.log(testTree.isBalanced());

/*Print out all elements in level, pre, post, and in order.*/
console.log("level");
testTree.levelOrder(traversalCallback);
console.log("\n");
console.log("pre");
testTree.preOrder(traversalCallback);
console.log("\n");
console.log("post");
testTree.postOrder(traversalCallback);
console.log("\n");
console.log("in");
testTree.inOrder(traversalCallback);
console.log("\n");

function traversalCallback(item) {
  process.stdout.write(` -> ${item.data}`);
}
