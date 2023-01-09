type IsUnion<T, C = T> = T extends C ? ([C] extends [T] ? false : true) : never;

export default IsUnion

// https://github.com/type-challenges/type-challenges/issues/20980
