// PartialByKeys 是一个自定义的 TypeScript 类型，它是基于 `Partial` 类型，并仅将指定的属性设置为可选。
type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// 我们首先使用 keyof T 确定 T 的所有属性名，然后使用 K extends keyof T 约束泛型参数 K 的类型为 T 的属性名联合类型
// 我们使用 Omit<T, K> 来从 T 类型中排除属性名为 K 的属性，并得到一个新类型，该新类型包含 T 中除了指定属性之外的所有属性。
// 然后，我们使用 Pick<T, K> 来从 T 类型中选取属性名为 K 的属性，并得到一个新类型，该新类型包含 T 中指定的属性。

export {
  PartialByKeys
}
