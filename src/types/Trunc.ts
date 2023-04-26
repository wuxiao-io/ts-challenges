// Trunc 用于截取字符串或数字直到遇到小数点(`.`)的递归类型

// Trunc 默认接受两个泛型参数，`T` 和 `U`，默认情况下 U 是一个空字符串
// T必须是一个字符串 (string) 或数字 (number)
type Trunc<T extends string | number, U extends string = ''> =
  // 使用条件类型 (Conditional Types) 和类型推断 (Type Interface)，将 `${T}` 分解为 `Head` 和 `Tail`
  // Head 表示字符串的第一个字符， Tail 表示剩余字符
  `${T}` extends `${infer Head}${infer Tail}`
    // 判断 Head 是否是小数点 .
    // 如果是，则返回U。否则，递归调用 Trunc 类型，将 Tail 作为新的 T, 并将 Head 附加到 U
    ? Head extends '.'
      ? U
      : Trunc<Tail, `${U}`>
    // 如果 `${T}` 不符合 `{infer Head}${infer Tail}` 的形式， 说明 T 是空字符串或单个字符。 接着判断 U 的长度是否为 0， 若为0则返回T，否则返回 U
    : U['length'] extends 0
      ? T
      : U

export default Trunc
