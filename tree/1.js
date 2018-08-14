class TreeNode {
  constructor(value) {
    this.value = value;
    this.decentdents = [];
  }
}
const abc = new TreeNode('abc');
const homer = new TreeNode('Homer');
const bart = new TreeNode("bart");
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('maggie');

abc.decentdents.push(homer);
homer.decentdents(bart, lisa, maggie)