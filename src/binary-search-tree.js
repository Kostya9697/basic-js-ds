const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/*
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }


  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.rootNode === null) {
      return null;
    } else {
      return this.rootNode;
    }
  }
  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      else if (node.data === data) {
        return node;
      }
      else if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      else {
        node.right = addNode(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchNode(this.rootNode, data);
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      else if (node.data === data) {
        return true;
      }
      else if (data < node.data) {
        return searchNode(node.left, data)
      } else {
        return searchNode(node.right, data)
      }
    }
  }
  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchNode(this.rootNode, data);
    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        return searchNode(node.left, data)
      } else if (data > node.data){
        return searchNode(node.right, data)
      }else {
        return node
        
      }
    }
  }
  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null
        } else if (!node.right) {
          node = node.left
          return node
        } else if (!node.left) {
          node = node.right
          return node
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data);
        return node
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootNode){
      return null;
    }
    let node = this.rootNode;
    while(node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootNode){
      return null;
    }
    let node = this.rootNode;
    while(node.right){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};