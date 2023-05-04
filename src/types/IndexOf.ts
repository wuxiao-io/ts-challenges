// 检查两个参数是否相等，如果相等，则返回 true，如果不相等返回 false
type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// IndexOf是一个递归类型，用于在类型数组 T 中查找类型 U 的索引，它接受第三个参数：
// 1. T extends unknown[]：一个类型数组，我们要在这个数组中查找类型 U。
// 2. U：我们要查找的类型。
// 3. Count extends 1[] = []：这是一个辅助类型参数，用于在递归过程中追踪当前的索引值。默认值为 []，表示从索引 0 开始。
type IndexOf<T extends unknown[], U, Count extends 1[] = []> = U extends [infer Head, ...infer Tail]
  // IndexOf 的实现利用了递归，它首先检查类型数组 T 是否非空（通过 U 是否是 [infer Head, ...infer Tail] 的形式）。
  // 如果非空，我们将数组的头部元素（Head）与要查找的类型 U 进行比较。如果相等，返回当前计数值（Count['length']）作为索引。
  // 如果不等，则对数组的尾部元素（Tail）递归调用 IndexOf，同时更新计数值（[...Count, 1]）。
  ? isEqual<Head, U> extends true
    ? Count['length']
    : IndexOf<Tail, U, [...Count, 1]>
  : -1

export default IndexOf
