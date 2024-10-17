import { tree } from "./tree.mjs";
const input = [10, 20, 30, 100, 150, 200, 300];
const newTree = tree(input);

newTree.insert(500)
newTree.insert(5)
newTree.insert(3)
newTree.insert(57)
newTree.insert(251)
newTree.insert(252)
newTree.insert(253)
newTree.insert(254)
newTree.insert(11)
newTree.insert(250)
newTree.insert(199)
newTree.insert(1)
newTree.insert(254)
newTree.insert(249)
newTree.insert(248)
newTree.insert(247)
newTree.insert(246)




// newTree.prettyPrint();
// console.log(newTree.isBalanced());

// newTree.inOrder((item) => process.stdout.write(` -> ${item.data}`));
// let find = newTree.find(100)
// console.log(found);

// newTree.reBalance();

newTree.deleteItem(254)
newTree.prettyPrint();
// console.log(newTree.isBalanced());
console.log(newTree.height(newTree.find(100)));

