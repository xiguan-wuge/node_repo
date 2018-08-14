element 节点（值）
子节点 

前端： 
  map，set 基于树
  html的DOM 也是基于树
  react的vnode， dom , diff 都是基于树

  从根节点（root）开始 decent 子节点（children） 

研究比较有代表性的数：二叉树
  最多只有两个节点，左子树， 右子树

  完美二叉树（perfect binary tree）： 深度为k &nbsp;&nbsp;叶节点=2^(k-1)&nbsp;&nbsp;  总节点数= 2^k-1
  
特例： 二叉搜索树：BST(Binary Search Tree)
在查找时非常方便
  1. 二叉树
  2. 左子节点小于父子节点小于右子节点(左子树所有节点的值小于根节点，右节点数所有的值大于根节点)

  搜索的概念：<br>
  &nbsp;&nbsp;BST 节点的插入
  1. 如果树中没有任何节点，该节点即为根节点 
  2. 如果节点比根节点或者比数的节点的值更大，则放在右子树；反之，则放在左子树
  3. 重复第二点操作，直至找到空位插入新节点<br>
  
   例子： 比如对于A B C D E F G H这些节点集，按E C A B D G F H顺序插入则为：
   ![avatar](https://user-gold-cdn.xitu.io/2018/8/1/164f2dd87fe74bd4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


BST 遍历有三种方式：
1. 中序遍历：以最小到最大的顺序访问节点
2. 先序遍历：祖先节点优先于后代节点的顺序遍历
3. 后序遍历： 先访问节点的后代子节点，再访问父节点