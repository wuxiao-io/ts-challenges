// 限制传入范型 T 为未知内容类型的数组，限制传入范型 U 为未知内容类型
// 通过解构合并成新数组类型
type Push<T extends Array<unknown>, U extends unknown> = [...T, U];

export default Push
