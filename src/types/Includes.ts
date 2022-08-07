// NOTE: https://github.com/type-challenges/type-challenges/issues/13594

type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer P, ...infer R] ? (isEqual<P, U> extends true ? true : Includes<R, U>) : false

export default Includes
