// TreeNode 描述了一棵二叉树的节点
interface TreeNode {
  // 节点的值
  val: number,
  // 左子节点
  left: TreeNode | null,
  // 右子节点
  right: TreeNode | null,
}

type InorderTraversal<T extends TreeNode | null> =
  // 使用条件类型(Conditional Types)判断T是否为TreeNode类型。若是，则进行中序遍历，否则返回空数组
  T extends TreeNode
    // 中序遍历步骤：
    // 使用数组展开语法 (Spread Syntax) 将左子树的遍历结果展开。判断 T['left'] 是否为 TreeNode 类型，若是，则递归调用 InorderTraversal<T['left']>, 否则返回空数组
    // 将当前节点的值 T['val'] 插入遍历结果数组中。
    // 使用数组展开语法（Spread Syntax）将右子树的遍历结果展开。判断 T['right'] 是否为 TreeNode 类型，若是，则递归调用 InorderTraversal<T['right']>，否则返回空数组 []。
    ? [
      ...(
        T['left'] extends TreeNode
          ? InorderTraversal<T['left']>
          : []
      ),
      T['val'],
      ...(
        T['right'] extends TreeNode
          ? InorderTraversal<T['right']>
          : []
      )
    ]
    :[]

export default InorderTraversal
