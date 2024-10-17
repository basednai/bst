import { buildTree } from "./buildTree.mjs";
import { treeNode } from "./treeNode.mjs";

export function insert(data, current) {
  if (!current.left && !current.right) {
    if (!current.data) {
      current.data = data;
    } else if (data > current.data) {
      current.right = treeNode(data);
    } else {
      current.left = treeNode(data);
    }
  } else if (!current.left) {
    if (data < current.data) current.left = treeNode(data);
    else insert(data, current.right);
  } else if (!current.right) {
    if (data > current.data) current.right = treeNode(data);
    else insert(data, current.left);
  } else {
    if (current.data > data) insert(data, current.left);
    if (current.data < data) insert(data, current.right);
  }
}

export function deleteItem(data, current) {
  if (current.data == data) {
    //both or one empty

    if (current.left && current.right) {
      // find inorder
      let successor = inOrderSuccessor(current, data);

      current.data = successor.data;
      successor.data = null;
    } else if (current.left) {
      current.data = current.left.data;
      current.left = null;
    } else if (current.right) {
      current.data = current.right.data;
      current.right = null;
    } else {
      current.data = null;
    }
  } else {
    if (current.data > data) deleteItem(data, current.left);
    if (current.data < data) deleteItem(data, current.right);
  }
}

export function find(data, current) {
  if (current)
    if (current.data == data) {
      return current;
    } else if (current.data > data) {
      return find(data, current.left);
    } else if (current.data < data) {
      return find(data, current.right);
    } else return;
}

export function levelOrder(current, callback) {
  if (!callback) console.error("Must use callback");

  //push root
  // when curr popped, push children
  let currentQueue = [current];
  let visited = [];
  let popped;
  do {
    popped = currentQueue.shift();
    visited.push(popped);
    if (popped.left || popped.right)
      currentQueue.push(popped.left, popped.right);

    callback(popped);
  } while (currentQueue.length);
}

export function inOrder(current, callback) {
  if (!callback) console.error("Must use callback");
  // console.log(current.data);

  if (!current.left && !current.right) {
    callback(current);
  } else if (!current.left) {
    callback(current);
    inOrder(current.right, callback);
  } else if (!current.right) {
    inOrder(current.left, callback);
    callback(current);
  } else {
    inOrder(current.left, callback);
    callback(current);

    inOrder(current.right, callback);
  }
}

export function inOrderArray(current) {
  let array = [];
  inOrder(current, (item) => {
    array.push(item.data);
  });
  return array;
}

export function postOrder(current, callback) {
  if (!callback) console.error("Must use callback");
  if (!(current.left && current.right)) {
    callback(current);
    return;
  } else {
    postOrder(current.left, callback);
    postOrder(current.right, callback);
    callback(current);
  }
}

export function preOrder(current, callback) {
  if (!callback) console.error("Must use callback");
  if (!(current.left && current.right)) {
    callback(current);
    return;
  } else {
    callback(current);
    preOrder(current.left, callback);
    preOrder(current.right, callback);
  }
}

export function height(node) {
  let left = getHeight(node.left) + 1;
  let right = getHeight(node.right) + 1;
  console.log("left", left, "right", right);

  return Math.max(left, right);
}

function getHeight(node, index = 0) {
  if (node) console.log(node.data, index);
  if (node == null) {
    return index;
  } else if (node.left && node.right) {
    let left = getHeight(node.left, index + 1);
    let right = getHeight(node.right, index + 1);
    return left > right ? left : right;
  } else if (!node.left) {
    return getHeight(node.right, index + 1);
  } else if (!node.right) {
    return getHeight(node.left, index + 1);
  }
}
export function depth(node, current, index = 0) {
  if (current) {
    if (current.data == node.data) {
      return index + 1;
    } else if (current.data > node.data) {
      return depth(node, current.left, index + 1);
    } else if (current.data < node.data) {
      return depth(node, current.right, index + 1);
    } else return false;
  }
}

export function isBalanced(root) {
  return Math.abs(height(root.left) - height(root.right)) <= 1 ? true : false;
}

export function reBalance(root) {
  let rebalancedTree = inOrderArray(root);

  return buildTree(rebalancedTree);
}

////////////////////////////////////////////////////////////////////////
function inOrderSuccessor(current, target) {
  let successor = null;
  while (current != null) {
    if (current == null) return null;
    if (current.data == target && current.right) {
      current = current.right;
      while (current.left) current = current.left;
      return current;
    } else if (current.data > target) {
      successor = current;
      current = current.left;
    } else if (current.data <= target) {
      current = current.right;
    }
  }
  return successor;
}
