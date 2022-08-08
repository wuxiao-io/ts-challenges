import MyExclude from './MyExclude'

type MyOmit<T extends {}, K extends keyof T> = MyExclude<T, K> extends keyof T
  ? {[key in MyExclude<T, K>]: T[key]}
  : never;

export default MyOmit

// NOTE: https://github.com/type-challenges/type-challenges/issues/13955
