type Fill<
  // 泛型参数 T 限制为一个未知元素类型的数组
  T extends unknown[],
  // 指定要填充到数组中的元素类型
  N,
  // 指定填充开始的下标，默认为 0
  Start extends number = 0,
  // 指定填充结束的下标，默认为 0
  End extends number = 0,
  // 用于计数填充元素个数的数组，初始为空数组
  Count extends 1[] = [],
  // 用于判断当前填充位置是否已经到达开始下标 Start、默认为 Count
  Flag extends boolean = Count['length'] extends Start
    ? true
    : false
> = Count['length'] extends End
  ? T
  : T extends [infer R, ...infer U]
    ? Flag extends false
      ? [R, ...Fill<U, N, Start, End, [...Count, 1]>]
      : [N, ...Fill<U, N, Start, End, [...Count, 1], Flag>]
    : T

/**
 * `Count extends 1[] = []` 中的 `1[]` 表示一个元素类型为 `1` 的数组类型。也就是说 `Count` 这个泛型参数是一个数组类型，其中元素类型为`1`
 * `[]` 表示该数组的初始值为空数组
 *
 *  在这个类型定义中，`Count` 的作用是用于记录已经填充了多少个元素，它的类型默认为一个空数组`[]`, 表示开始时没有填充任何元素。在递归调用过程中，每填充一个元素，
 *  就将一个`1`元素添加到`Count`数组中，这样`Count`数组的长度就可以作为当前已经填充的元素个数进行判断。
 *
 *  需要注意的是，1 在这里只是一个占位符，用于表示一个元素类型为任意类型的单个元素。因为这里的目的不是要创建真正的 1 类型值，而是用这个值来标识填充了一个元素。实际上，使用 true 或其他任意类型都是可以的，只要在递归调用时能正确地将这个值添加到数组中就可以。
 */
