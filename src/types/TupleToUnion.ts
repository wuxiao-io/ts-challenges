// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion2<T extends Array<any>> = T extends Array<infer Values> ? Values : never;

type TupleToUnion3<T> = T extends [infer First, ...infer Rest]
  ? (First | TupleToUnion<Rest>)
  : never

export default TupleToUnion
